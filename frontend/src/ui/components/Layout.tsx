import { ChartPie, List, Moon, Sun, UserList, X } from "phosphor-react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "../../data/hooks/useTheme";
import { SidebarMenuItem } from "./SidebarMenuItem";

export function Layout() {
  const [sidebarState, setSidebarState] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <main className="relative flex flex-col min-h-screen overflow-hidden">
      <header
        className="z-20 h-16 flex justify-between items-center
        p-2.5 border-b bg-slate-50 dark:bg-slate-900 border-slate-300
        dark:border-slate-700"
      >
        <button
          onClick={() => setSidebarState(!sidebarState)}
          className="inline-flex lg:hidden border-none hover:ring-1
          ring-slate-200 focus:ring-1 dark:ring-slate-700 rounded-full"
        >
          {sidebarState ? <X size={20} /> : <List size={20} />}
        </button>
        <strong
          className="flex-1 ml-4 lg:flex-none lg:ml-0 lg:text-center
          lg:w-[240px]"
        >
          Logo
        </strong>
        <button
          onClick={toggleDarkMode}
          className="border-none rounded-full shadow-md"
        >
          {darkMode ? (
            <Sun size={20} weight="fill" />
          ) : (
            <Moon size={20} weight="fill" />
          )}
        </button>
      </header>

      <div className="relative flex flex-1">
        <div
          onClick={() => setSidebarState(false)}
          className={`${sidebarState || "hidden"} lg:hidden fixed inset-0
          bg-slate-800/50 z-10`}
        ></div>
        <aside
          className={`${sidebarState || "-translate-x-[240px]"}
          transition-transform absolute inset-y-0 left-0 lg:static
          lg:translate-x-0 flex flex-col border-r z-10 p-2 w-[240px]
          border-slate-300 dark:border-slate-700 bg-slate-50
          dark:bg-slate-800`}
        >
          <ul className="flex flex-1 flex-col gap-2">
            <li>
              <SidebarMenuItem
                href="/dashboard"
                setSidebarState={setSidebarState}
                icon={<ChartPie size={20} weight="fill" />}
                text="Dashboard"
              />
            </li>

            <li>
              <SidebarMenuItem
                href="/members/list"
                setSidebarState={setSidebarState}
                icon={<UserList size={20} weight="fill" />}
                text="Membros"
              />
            </li>
          </ul>
        </aside>

        <section className="container flex flex-col flex-1 p-2.5 mx-auto">
          <Outlet />
        </section>
      </div>
    </main>
  );
}
