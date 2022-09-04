import { lazy } from "react";
import Loadable from "../../components/Loadable";
import MiniLayout from "../../views/layouts/MiniLayout";

const Login = Loadable(lazy(() => import('../../views/pages/auth/Login')));
const ResetPassword = Loadable(lazy(() => import('../../views/pages/auth/ResetPassword')));
const CreatePassword = Loadable(lazy(() => import('../../views/pages/auth/CreatePassword')));
const Notfound = Loadable(lazy(() => import('../../views/errors/NotFound')));
const Forbidden = Loadable(lazy(() => import('../../views/errors/Forbidden')));
const InternalServer = Loadable(lazy(() => import('../../views/errors/InternalServer')));

const LoginRoutes = {
    path: '/',
    element: <MiniLayout />,
    children: [
        {
            path: 'login',
            element: <Login />
        },
        {
            path: 'reset-password',
            element: <ResetPassword />
        },
        {
            path: 'create-password',
            element: <CreatePassword />
        },
        {
            path: '*',
            element: <Notfound />
        },
        {
            path: '403',
            element: <Forbidden />
        },
        {
            path: '500',
            element: <InternalServer />
        },
    ]
}

export default LoginRoutes;