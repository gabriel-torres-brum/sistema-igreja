import { useEffect } from "react";
import { useParams } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { dateValidation, phoneValidation } from "../../data/utils/validations";
import { maskDate, maskPhoneNumber } from "../../data/utils/masks";
import { InputSpanError } from "../../ui/components/InputSpanError";

const validationSchema = yup.object({
  name: yup.string().required(),
  birthday: yup.string().required().matches(dateValidation),
  phone1: yup.string().matches(phoneValidation, { excludeEmptyString: true }),
  phone2: yup.string().matches(phoneValidation, { excludeEmptyString: true }),
});

export function EditMember() {
  const { slug } = useParams<{ slug: string }>();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      birthday: "",
      gender: "Male",
      tither: false,
      phone1: "",
      phone2: "",
    },
    resolver: yupResolver(validationSchema),
  });

  function onSubmit(data) {
    var arrayBirthday = data.birthday.split("/");
    var birthday = `${arrayBirthday[2]}-${arrayBirthday[1]}-${arrayBirthday[0]}`;
    console.log(birthday);
  }

  function onError(error) {
    console.log(error);
    toast.warning("Verifique os campos e tente novamente!");
  }

  const phone1Value = String(watch("phone1"));
  const phone2Value = String(watch("phone2"));
  const birthdayValue = String(watch("birthday"));

  useEffect(() => {
    setValue("phone1", maskPhoneNumber(phone1Value));
  }, [phone1Value]);

  useEffect(() => {
    setValue("phone2", maskPhoneNumber(phone2Value));
  }, [phone2Value]);

  useEffect(() => {
    setValue("birthday", maskDate(birthdayValue));
  }, [birthdayValue]);

  return (
    <div className="flex flex-col">
      <strong className="text-xl p-2.5 flex-1 text-center my-5">
        Editando informações de {data.member.name}
      </strong>
      <div className="flex p-5 rounded bg-white dark:bg-slate-900">
        <form
          className="flex flex-col flex-1 gap-5"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <div className="form-control">
              <label className="label label-text" htmlFor="name">
                Nome completo *
              </label>
              <input
                className="outline-none form-input border-none ring-2
                ring-slate-300 bg-slate-100 focus:ring-indigo-300
                rounded dark:ring-slate-600 dark:bg-slate-800
                dark:focus:ring-indigo-500"
                id="name"
                type="text"
                placeholder="Nome completo"
                {...register("name")}
              />
              {errors?.name?.type && (
                <InputSpanError type={errors?.name?.type} field="name" />
              )}
            </div>
            <div className="form-control">
              <label className="label label-text" htmlFor="birthday">
                Data de nascimento *
              </label>
              <input
                className="outline-none form-input border-none ring-2
                ring-slate-300 bg-slate-100 focus:ring-indigo-300
                rounded dark:ring-slate-600 dark:bg-slate-800
                dark:focus:ring-indigo-500"
                id="birthday"
                type="text"
                placeholder="Ex.: 01/04/1999"
                {...register("birthday")}
              />
              {errors?.birthday?.type && (
                <InputSpanError
                  type={errors?.birthday?.type}
                  field="birthday"
                />
              )}
            </div>
            <div className="form-control">
              <label className="label label-text" htmlFor="gender">
                Gênero *
              </label>
              <select
                className="outline-none form-select border-none ring-2
                ring-slate-300 bg-slate-100 focus:ring-indigo-300
                rounded dark:ring-slate-600 dark:bg-slate-800
                dark:focus:ring-indigo-500"
                id="gender"
                {...register("gender")}
              >
                <option value="Male">Masculino</option>
                <option value="Female">Feminino</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label label-text" htmlFor="phone1">
                Telefone principal
              </label>
              <input
                className="outline-none form-input border-none ring-2
                ring-slate-300 bg-slate-100 focus:ring-indigo-300
                rounded dark:ring-slate-600 dark:bg-slate-800
                dark:focus:ring-indigo-500"
                type="text"
                id="phone1"
                {...register("phone1")}
              />
              {errors?.phone1?.type && (
                <InputSpanError type={errors?.phone1?.type} field="phone1" />
              )}
            </div>
            <div className="form-control">
              <label className="label label-text" htmlFor="phone2">
                Telefone extra
              </label>
              <input
                className="outline-none form-input border-none ring-2
                ring-slate-300 bg-slate-100 focus:ring-indigo-300
                rounded dark:ring-slate-600 dark:bg-slate-800
                dark:focus:ring-indigo-500"
                type="text"
                id="phone2"
                {...register("phone2")}
              />
              {errors?.phone2?.type && (
                <InputSpanError type={errors?.phone2?.type} field="phone2" />
              )}
            </div>
            <div className="form-control">
              <label className="label label-text">Dizimista *</label>
              <fieldset
                className="flex-1 flex items-center gap-2"
                id="tither"
                {...register("tither")}
              >
                <label className="items-center flex gap-2">
                  <input type="radio" value="true" name="tither" />
                  Sim
                </label>
                <label className="items-center flex gap-2">
                  <input
                    type="radio"
                    value="false"
                    name="tither"
                    defaultChecked
                  />
                  Não
                </label>
              </fieldset>
            </div>
          </div>

          <button
            className="btn btn-ghost btn-block btn-sm border-none
            gap-2 tracking-wider bg-blue-200 dark:bg-blue-600
            text-xs rounded font-bold hover:bg-blue-300
            dark:hover:bg-blue-500"
            type="submit"
          >
            Atualizar
          </button>
        </form>
      </div>
    </div>
  );
}
