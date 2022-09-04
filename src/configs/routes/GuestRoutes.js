import { lazy } from "react";
import Loadable from "../../components/Loadable";
import GuestLayout from "../../views/layouts/GuestLayout";

const Home = Loadable(lazy(() => import('../../views/pages/guests/Home')));
const Profile = Loadable(lazy(() => import('../../views/pages/guests/abouts/Profile')));
const Vimi = Loadable(lazy(() => import('../../views/pages/guests/abouts/Vimi')));
const Structure = Loadable(lazy(() => import('../../views/pages/guests/abouts/Structure')));
const Department = Loadable(lazy(() => import('../../views/pages/guests/Department')));
const Activity = Loadable(lazy(() => import('../../views/pages/guests/news/Activity')));
const DetailActivity = Loadable(lazy(() => import('../../views/pages/guests/news/Activity/DetailActivity')));
const Notice = Loadable(lazy(() => import('../../views/pages/guests/news/Notice')));
const DetailNotice = Loadable(lazy(() => import('../../views/pages/guests/news/Notice/DetailNotice')));
const Research = Loadable(lazy(() => import('../../views/pages/guests/researches/Research')));
const DetailResearch = Loadable(lazy(() => import('../../views/pages/guests/researches/Research/DetailResearch')));
const Dedicate = Loadable(lazy(() => import('../../views/pages/guests/researches/Dedicate')));
const DetailDedicate = Loadable(lazy(() => import('../../views/pages/guests/researches/Dedicate/DetailDedicate')));
const Academic = Loadable(lazy(() => import('../../views/pages/guests/services/Academic')));
const Lab = Loadable(lazy(() => import('../../views/pages/guests/services/Lab')));
const Library = Loadable(lazy(() => import('../../views/pages/guests/services/Library')));
const Organization = Loadable(lazy(() => import('../../views/pages/guests/students/Organization')));
const Scholarship = Loadable(lazy(() => import('../../views/pages/guests/students/Scholarship')));

const GuestRoutes = {
    path: '/',
    element: <GuestLayout />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: 'beranda',
            element: <Home />
        },
        {
            path: 'tentang-kami',
            element: <Profile />
        },
        {
            path: 'visi-misi',
            element: <Vimi />
        },
        {
            path: 'struktur-organisasi',
            element: <Structure />
        },
        {
            path: 'jurusan',
            children: [
                {
                    path: ':slug',
                    element: <Department />
                }
            ]
        },
        {
            path: 'kegiatan',
            children: [
                {
                    path: '',
                    element: <Activity />
                },
                {
                    path: ':slug',
                    element: <DetailActivity />
                }
            ]
        },
        {
            path: 'pengumuman',
            children: [
                {
                    path: '',
                    element: <Notice />
                },
                {
                    path: ':slug',
                    element: <DetailNotice />
                }
            ]
        },
        {
            path: 'penelitian',
            children: [
                {
                    path: '',
                    element: <Research />
                },
                {
                    path: ':slug',
                    element: <DetailResearch />
                }
            ]
        },
        {
            path: 'pengabdian',
            children: [
                {
                    path: '',
                    element: <Dedicate />
                },
                {
                    path: ':slug',
                    element: <DetailDedicate />
                }
            ]
        },
        {
            path: 'layanan',
            children: [
                {
                    path: '',
                    element: <Academic />
                },
                {
                    path: 'akademik',
                    element: <Academic />
                },
                {
                    path: 'laboratorium',
                    element: <Lab />
                },
                {
                    path: 'perpustakaan',
                    element: <Library />
                },
            ]
        },
        {
            path: 'kemahasiswaan',
            children: [
                {
                    path: '',
                    element: <Scholarship />
                },
                {
                    path: 'beasiswa',
                    element: <Scholarship />
                },
                {
                    path: 'organisasi-mahasiswa',
                    element: <Organization />
                },
            ]
        },
    ]

}

export default GuestRoutes;