const Student = {
    id: 'student',
    title: 'Kemahasiswaan',
    type: 'group',
    children: [
        {
            id: 'student-beasiswa',
            title: 'Beasiswa',
            type: 'item',
            url: '/kemahasiswaan/beasiswa'
        },
        {
            id: 'student-organisasi',
            title: 'Organisasi Mahasiswaan',
            type: 'item',
            url: '/kemahasiswaan/organisasi-mahasiswa'
        }
    ]
}

export default Student