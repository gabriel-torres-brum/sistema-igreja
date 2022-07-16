import { FaUserAlt } from "react-icons/fa";

export function InputIcon(props) {
  return (
    <fieldset className="w-full space-y-1 dark:text-gray-100">
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <label
            htmlFor={props.id}
            className="p-1 focus:outline-none focus:ring"
          >
            <FaUserAlt />
          </label>
        </span>
        <input
          className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400"
          {...props}
        />
      </div>
    </fieldset>
  );
}
