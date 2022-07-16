import { ChurchType } from "./Church";
import { RoleType } from "./Role";
import { UserType } from "./User";

interface ListMembersData {
  id: string | number;
  slug: string;
  name: string;
  gender: "male" | "female";
  birthday: Date;
  phone: string | null;
  phone2: string | null;
  tither: boolean;
  role: RoleType;
  church: ChurchType;
  user: UserType;
}