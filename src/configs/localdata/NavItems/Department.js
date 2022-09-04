//Kalau ada api gunakan function GetDepartment untuk menimpa variable ChildDepartment
const ChildDepartment = [
    {
        id: 1,
        slug: 'matematika',
        department: "Matematika"
    },
    {
        id: 2,
        slug: 'fisika',
        department: "Fisika"
    },
    {
        id: 3,
        slug: 'kimia',
        department: "Kimia"
    },
    {
        id: 4,
        slug: 'biologi',
        department: "Biologi"
    },
];

const Department = {
    id: 'department',
    title: "Jurusan",
    type: 'group',
    children: ChildDepartment.map(item => (
        {
            id: item.id,
            title: `Jurusan ${item.department}`,
            type: 'item',
            url: `/jurusan/${item.slug}`
        }
    ))
};

export default Department;