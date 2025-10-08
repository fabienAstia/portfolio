import './Skills.css'

export default function Skills(){
    const stackList = skills.map(stack => 
        <span key={stack.id} className={`badge m-2 ${stack.badgeClass}`}>
            {stack.title}
        </span>
    );

    return (
        <>
        <h2>Compétences</h2>
        <div className={`d-flex justify-content-center flex-wrap fs-4`}>
            {stackList}
        </div>
        </>
    );
}

const skills = [
    {
        id:1,
        title:'HTML',
        badgeClass:'custom-class'
    },
    {
        id:2,
        title:'CSS',
        badgeClass:'text-bg-primary'
    },
    {
        id:3,
        title:'Javascript',
        badgeClass:'text-bg-warning'
    },
    {
        id:4,
        title:'VueJs',
        badgeClass:'text-bg-success'
    },
    {
        id:5,
        title:'React',
        badgeClass:'text-bg-primary'
    },
    {
        id:6,
        title:'Java',
        badgeClass:'text-bg-danger'
    },
    {
        id:7,
        title:'PostgreSQL',
        badgeClass:'text-bg-info'
    },
    {
        id:8,
        title:'Git/Github',
        badgeClass:'text-bg-dark'
    },
    {
        id:9,
        title:'Jenkins',
        badgeClass:'text-bg-light border border-black'
    },
    {
        id:10,
        title:'SSH',
        badgeClass:'text-bg-secondary'
    }
];