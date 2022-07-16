import { NavLink } from "react-router-dom";

interface SidebarMenuItemProps {
  href: string
  setSidebarState: (state: boolean) => void
  icon?: JSX.Element
  text: string
}

export function SidebarMenuItem({
  href,
  setSidebarState,
  icon,
  text
}: SidebarMenuItemProps) {
  return (
    <NavLink to={href} className="overflow-hidden">
      {({ isActive }) => (
        <button
          onClick={() => setSidebarState(false)}
          className={`${isActive && "bg-indigo-200 dark:bg-indigo-400"}
          transition duration-300 inline-flex items-center p-2 px-4 rounded
          active:scale-95 hover:ring-indigo-300 hover:dark:ring-indigo-500
          ring-2 ring-slate-200 dark:ring-slate-700 w-full`}
        >
          {icon}
          <span className="flex-1">
            {text}
          </span>
        </button>
      )}
    </NavLink>
  );
}
