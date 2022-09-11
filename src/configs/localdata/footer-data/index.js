export const HeadlineFooter = {
    headline1: process.env.REACT_APP_DESCRIPTION,
    headline2: 'Tentang ' + process.env.REACT_APP_NAME,
    headline3: 'Link',
    headline4: '© ' + new Date().getFullYear() + ' ' + process.env.REACT_APP_NAME + ' UNIVERSITAS PAPUA',
}

export const DataLink = [
    {
        id: 1,
        title: 'Jurnal Natural',
        url: '#'
    },
    {
        id: 2,
        title: 'SIMUNIPA',
        url: 'https://simunipa.unipa.ac.id'
    },
    {
        id: 3,
        title: 'UNIPA',
        url: 'https://unipa.ac.id'
    }
]

export const DataContact = {
    address: 'Kampus UNIPA, Amban Manokwari',
    telp: 'telp/fax: (021)12345 6789',
    email: 'email: mipa@unipa.ac.id'
}