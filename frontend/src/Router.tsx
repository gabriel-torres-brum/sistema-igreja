import { Route, Routes } from "react-router-dom";

import { Layout } from "./ui/components/Layout";
import { RequireAuth } from "./ui/components/auth/RequireAuth"
;
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { ListMembers } from "./pages/members/ListMembers";
import { EditMember } from "./pages/members/EditMember";
import { NotFound } from "./pages/404";

export function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />

      <Route element={<RequireAuth />}>
        <Route element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="members">
            <Route path="list" element={<ListMembers />} />
            {/* <Route path=":slug" element={<EditMember />} /> */}
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
