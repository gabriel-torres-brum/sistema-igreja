import { useAuthContext } from "../data/hooks/useAuthContext";

export function Dashboard() {
  const { user } = useAuthContext();

  return (
    <div
      className="flex flex-1 items-center
      justify-center"
    >
      <strong>{user?.name}</strong>
    </div>
  );
}
