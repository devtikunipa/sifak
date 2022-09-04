import { useRoutes } from "react-router-dom";
import GuestRoutes from "./GuestRoutes";
import LoginRoutes from "./LoginRoutes";
import AdminRoutes from "./AdminRoutes";

export default function ThemeRoutes() {
    return useRoutes([GuestRoutes, LoginRoutes, AdminRoutes])
}