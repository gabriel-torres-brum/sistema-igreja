import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaLock, FaUserAlt } from "react-icons/fa";

import { AuthContext } from "../data/contexts/AuthContext";
import { Input } from "../ui/components/Input";
import { InputIcon } from "../ui/components/Inputs/InputIcon";

export function Login() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);

  function onSubmit({ username, password }) {
    signIn({ username, password });
  }

  return (
    <div className="">
      <InputIcon
        type="text"
        id="username"
        {...register("username")}
        placeholder="Usuário"
      />
    </div>
  );
}
