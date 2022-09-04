const Activity = {
    id: 'new',
    title: 'News',
    type: 'group',
    children: [
        {
            id: 'new-aktivitas',
            title: 'Aktivitas',
            type: 'item',
            url: '/aktivitas'
        },
        {
            id: 'new-pengumuman',
            title: 'Pengumuman',
            type: 'item',
            url: '/pengumuman'
        }
    ]
}

export default Activity