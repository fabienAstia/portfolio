import './Skills.css'

export default function Skills(){
    // const stackList = skills.map(stack => 
    //     <span key={stack.id} className={`badge m-2 ${stack.badgeClass}`}>
    //         {stack.title}
    //     </span>
    // );
    const frontList = skills.map(stack => 
    (stack.category === 'front' &&
        <span key={stack.id} className={`badge m-2 ${stack.badgeClass}`}>
            {stack.title}
        </span>
    ));
    const backList = skills.map(stack => 
    (stack.category === 'back' &&
        <span key={stack.id} className={`badge m-2 ${stack.badgeClass}`}>
            {stack.title}
        </span>
    ));
    const dataList = skills.map(stack => 
    (stack.category === 'data' &&
        <span key={stack.id} className={`badge m-2 ${stack.badgeClass}`}>
            {stack.title}
        </span>
    ));
    const toolsEnvList = skills.map(stack => 
    (stack.category === 'tools/env' &&
        <span key={stack.id} className={`badge m-2 ${stack.badgeClass}`}>
            {stack.title}
        </span>
    ));

    return (
        <>
        <section className='skills'>
            <h2>Compétences</h2>
            <div className='category'>
                <h5 className='text-center'>Front : </h5>
                <div className={`d-flex justify-content-center flex-wrap fs-4`}>
                    {frontList}
                </div>
            </div>
            <div className='category'>
                <h5 className='text-center'>Back : </h5>
                <div className={`d-flex justify-content-center flex-wrap fs-4`}>
                    {backList}
                </div>
            </div>
             <div className='category'>
                <h5 className='text-center'>DataBase : </h5>
                <div className={`d-flex justify-content-center flex-wrap fs-4`}>
                    {dataList}
                </div>
            </div>
             <div className='category'>
                <h5 className='text-center'>Tools & Env : </h5>
                <div className={`d-flex justify-content-center flex-wrap fs-4`}>
                    {toolsEnvList}
                </div>
            </div>
        </section>
      
        </>
    );
}

const skills = [
    {
        id:1,
        title:'HTML',
        badgeClass:'custom-class1',
        category:'front'
    },
    {
        id:2,
        title:'CSS',
        badgeClass:'text-bg-primary',
        category:'front'
    },
    {
        id:3,
        title:'Javascript',
        badgeClass:'text-bg-warning',
        category:'front'
    },
    {
        id:4,
        title:'VueJs',
        badgeClass:'text-bg-success',
        category:'front'
    },
    {
        id:5,
        title:'React',
        badgeClass:'text-bg-primary',
        category:'front'
    },
    {
        id:6,
        title:'Java',
        badgeClass:'text-bg-danger',
        category:'back'
    },
    {
        id:7,
        title:'PostgreSQL',
        badgeClass:'text-bg-info',
        category:'data'
    },
    {
        id:8,
        title:'Git/Github',
        badgeClass:'text-bg-dark',
        category:'tools/env'
    },
    {
        id:9,
        title:'Jenkins',
        badgeClass:'text-bg-light border border-black',
        category:'tools/env'
    },
    {
        id:10,
        title:'SSH',
        badgeClass:'text-bg-secondary',
        category:'tools/env'
    },
    {
        id:11,
        title:'SpringBoot',
        badgeClass:'custom-class2',
        category:'back'
    }
];