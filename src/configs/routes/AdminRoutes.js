import { lazy } from "react";
import Loadable from "../../components/Loadable";
import AdminLayout from "../../views/layouts/AdminLayout";

const Dashboard = Loadable(lazy(() => import('../../views/pages/admin/Dashboard')));
const AcademicList = Loadable(lazy(() => import('../../views/pages/admin/academic-data/AcademicList')));
const AcademicEdit = Loadable(lazy(() => import('../../views/pages/admin/academic-data/AcademicEdit')));
const ActivityList = Loadable(lazy(() => import('../../views/pages/admin/activity-data/ActivityList')));
const ActivityEdit = Loadable(lazy(() => import('../../views/pages/admin/activity-data/ActivityEdit')));
const DedicateList = Loadable(lazy(() => import('../../views/pages/admin/dedicate-data/DedicateList')));
const DedicateEdit = Loadable(lazy(() => import('../../views/pages/admin/dedicate-data/DedicateEdit')));
const DepartmentList = Loadable(lazy(() => import('../../views/pages/admin/department-data/DepartmentList')));
const DepartmentEdit = Loadable(lazy(() => import('../../views/pages/admin/department-data/DepartmentEdit')));
const Faculty = Loadable(lazy(() => import('../../views/pages/admin/faculty-data/Faculty')));
const FacultyEdit = Loadable(lazy(() => import('../../views/pages/admin/faculty-data/FacultyEdit')));
const LabList = Loadable(lazy(() => import('../../views/pages/admin/lab-data/LabList')));
const LabEdit = Loadable(lazy(() => import('../../views/pages/admin/lab-data/LabEdit')));
const LibraryList = Loadable(lazy(() => import('../../views/pages/admin/library-data/LibraryList')));
const LibraryEdit = Loadable(lazy(() => import('../../views/pages/admin/library-data/LibraryEdit')));
const NoticeList = Loadable(lazy(() => import('../../views/pages/admin/notice-data/NoticeList')));
const NoticeEdit = Loadable(lazy(() => import('../../views/pages/admin/notice-data/NoticeEdit')));
const OrganizationList = Loadable(lazy(() => import('../../views/pages/admin/organization-data/OrganizationList')));
const OrganizationEdit = Loadable(lazy(() => import('../../views/pages/admin/organization-data/OrganizationEdit')));
const ResearchList = Loadable(lazy(() => import('../../views/pages/admin/research-data/ResearchList')));
const ResearchEdit = Loadable(lazy(() => import('../../views/pages/admin/research-data/ResearchEdit')));
const ScholarshipList = Loadable(lazy(() => import('../../views/pages/admin/scholarship-data/ScholarshipList')));
const ScholarshipEdit = Loadable(lazy(() => import('../../views/pages/admin/scholarship-data/ScholarshipEdit')));


const AdminRoutes = {
    path: '/admin',
    element: <AdminLayout />,
    children: [
        {
            path: '',
            element: <Dashboard />
        },
        {
            path: 'dashboard',
            element: <Dashboard />
        },
        {
            path: 'faculty',
            children: [
                {
                    path: '',
                    element: <Faculty />
                },
                {
                    path: ':slug',
                    element: <FacultyEdit />
                },
            ]
        },
        {
            path: 'department',
            children: [
                {
                    path: '',
                    element: <DepartmentList />
                },
                {
                    path: ':slug',
                    element: <DepartmentEdit />
                },
            ]
        },
        {
            path: 'activity',
            children: [
                {
                    path: '',
                    element: <ActivityList />
                },
                {
                    path: ':slug',
                    element: <ActivityEdit />
                },
            ]
        },
        {
            path: 'notice',
            children: [
                {
                    path: '',
                    element: <NoticeList />
                },
                {
                    path: ':slug',
                    element: <NoticeEdit />
                },
            ]
        },
        {
            path: 'research',
            children: [
                {
                    path: '',
                    element: <ResearchList />
                },
                {
                    path: ':slug',
                    element: <ResearchEdit />
                },
            ]
        },
        {
            path: 'dedicate',
            children: [
                {
                    path: '',
                    element: <DedicateList />
                },
                {
                    path: ':slug',
                    element: <DedicateEdit />
                },
            ]
        },
        {
            path: 'academic',
            children: [
                {
                    path: '',
                    element: <AcademicList />
                },
                {
                    path: ':slug',
                    element: <AcademicEdit />
                },
            ]
        },
        {
            path: 'lab',
            children: [
                {
                    path: '',
                    element: <LabList />
                },
                {
                    path: ':slug',
                    element: <LabEdit />
                },
            ]
        },
        {
            path: 'library',
            children: [
                {
                    path: '',
                    element: <LibraryList />
                },
                {
                    path: ':slug',
                    element: <LibraryEdit />
                },
            ]
        },
        {
            path: 'scholarship',
            children: [
                {
                    path: '',
                    element: <ScholarshipList />
                },
                {
                    path: ':slug',
                    element: <ScholarshipEdit />
                },
            ]
        },
        {
            path: 'organization',
            children: [
                {
                    path: '',
                    element: <OrganizationList />
                },
                {
                    path: ':slug',
                    element: <OrganizationEdit />
                },
            ]
        },
    ]
}

export default AdminRoutes