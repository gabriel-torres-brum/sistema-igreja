import { differenceInYears } from "date-fns";

import { Link } from "react-router-dom";
import { IdentificationBadge, User } from "phosphor-react";
import { useEffect, useState } from "react";
import { api } from "../../data/services/api";
import { ListMembersData } from "../../data/@types/ListMembers";

export function ListMembers() {
  const [members, setMembers] = useState<ListMembersData[]>();

  async function list() {
    const response = await api.get("/members/list");
    setMembers(response.data);
  }

  useEffect(() => {
    list();
  }, []);

  if (!members) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="flex flex-col">
      <strong className="text-xl p-2.5 flex-1 text-center my-5">
        Listagem de Membros
      </strong>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5">
        {members?.map((member) => (
          <div
            key={member.id}
            className="bg-white dark:bg-slate-900
            rounded overflow-hidden shadow relative"
          >
            <figure
              className="bg-slate-400 text-slate-500
              dark:bg-slate-500 dark:text-slate-400 inset-y-0
              absolute w-36"
            >
              <User size={"100%"} />
            </figure>
            <div className="ml-[144px] flex flex-col p-5">
              <div className="flex flex-col flex-1">
                <div className="flex flex-col">
                  <strong className="truncate">{member.name}</strong>
                  <div
                    className="flex justify-start text-xs
                    my-1.5 gap-1"
                  >
                    <span
                      className="block text-center rounded font-bold
                      bg-pink-200 truncate dark:bg-pink-600 border
                      border-slate-300 dark:border-slate-500 text-2xs
                      md:text-xs px-1 py-px"
                    >
                      {member.role.role_name}
                    </span>
                    {member.tither && (
                      <span
                        className="block text-center rounded font-bold
                        bg-emerald-200 truncate dark:bg-emerald-600 border
                        border-slate-300 dark:border-slate-500 text-2xs
                        md:text-xs px-1 py-px"
                      >
                        Dizimista
                      </span>
                    )}
                    <span
                      className="block text-center rounded font-bold
                      bg-indigo-200 truncate dark:bg-indigo-600 border
                      border-slate-300 dark:border-slate-500 text-2xs
                      md:text-xs px-1 py-px"
                    >
                      {differenceInYears(Date.now(), new Date(member.birthday))}{" "}
                      anos
                    </span>
                  </div>
                </div>
                <div
                  className="text-xs text-justify flex flex-col
                  flex-1 py-5 gap-1 tracking-wider font-medium"
                >
                  <span className="truncate">{member.church.church_name}</span>
                  <span className="truncate">{member.tither}</span>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <Link
                  className=""
                  key={member.id}
                  to={`/app/members/${member.slug}`}
                >
                  Abrir Ficha
                  <IdentificationBadge size={20} weight="fill" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
