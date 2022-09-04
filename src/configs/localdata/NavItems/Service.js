const Service = {
    id: 'service',
    title: 'Layanan',
    type: 'group',
    children: [
        {
            id: 'service-akademik',
            title: 'Akademik',
            type: 'item',
            url: '/layanan/akademik'
        },
        {
            id: 'service-laboratorium',
            title: 'Laboratorium',
            type: 'item',
            url: '/layanan/laboratorium'
        },
        {
            id: 'service-perpustakaan',
            title: 'Perpustakaan',
            type: 'item',
            url: '/layanan/perpustakaan'
        }
    ]
}

export default Service;