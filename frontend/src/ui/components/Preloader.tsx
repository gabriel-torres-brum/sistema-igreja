import { Spinner } from "../icons/Spinner";

export function Preloader() {
  return (
    <div className="fixed inset-0 grid place-items-center">
      <div className="form-control gap-2.5">
        <Spinner />
        Aguarde...
      </div>
    </div>
  );
}
