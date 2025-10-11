import './Projects.css'
import personalities_photo from '../../assets/projects_resources/personalities_photo.png'
import personalities_mockup from '../../assets/projects_resources/personalities_mockup.pdf'
import personalities_data_model from '../../assets/projects_resources/personalities_data_model.pdf'
const personalitiesUrl = 'http://fabien-astiasaran.com'
const personalitiesRepoUrl = 'https://github.com/fabienAstia/chefDoeuvre'
import oriMassages_photo from '../../assets/projects_resources/ori_massages2.png'
import ori_massages_data_model from '../../assets/projects_resources/ori_massages_data_model.pdf'
const oriMassagesRepoUrl = 'https://github.com/fabienAstia/ori-massages'
import matis_photo from '../../assets/projects_resources/matis.png'

export default function Projects(){
    const projectList = projects.map(project =>
        <div className="col g-3" key={project.id}>
            <div className="card h-100 custom-style ">
                <div className="card-body d-flex flex-column justify-content-between gap-3">
                    <h3 className="card-title text-center fw-bold ">{project.title}</h3>
                    <p className="card-text">{project.description}</p>
                    {project.links.url?(
                         <a href={project.links.url} target='_blank' className='my-2'>
                            <img src={project.image} alt='project image'/>
                        </a>
                    ) :(
                        <img src={project.image} alt='project image'/>
                    )}
                    <p className="text-center fw-bold justify-content-center d-flex flex-wrap gap-2">
                        {project.stack.split(',').map((tech, i) => (
                            <span key={i} className={`badge mx-1 fs-6 ${
                                tech.toLowerCase().includes('vue') ? 'text-bg-success' :
                                tech.toLowerCase().includes('react') ? 'text-bg-primary' :
                                tech.toLowerCase().includes('java') ? 'text-bg-danger' :
                                tech.toLowerCase().includes('postgresql') ? 'text-bg-info' : 'text-bg-secondary'
                            }`}>{tech.trim()}</span>
                        ))}
                    </p>
                 
                    <div className='row row-cols-1 row-cols-md-2 g-2 w-100 justify-content-center'>
                        {project.links.url && 
                        <div className='col justify-content-center'>
                            <a href={project.links.url} className='btn btn-primary w-100 customButton' target='_blank' rel="noreferrer">Visiter le site</a>
                        </div>
                        }
                        {project.links.repository &&
                        <div className='col justify-content-center'>
                            <a href={project.links.repository} className='btn btn-dark w-100 customButton' target='_blank' rel="noreferrer">Code source</a>
                        </div>
                        }
                        {project.links.dataModel &&
                            <div className='col'>
                            <a href={project.links.dataModel} className='btn btn-outline-dark w-100 customButton' target='_blank' rel="noreferrer">Conception (PDF)</a>
                        </div>
                        }
                        {project.links.mockup &&
                        <div className='col'>
                            <a href={project.links.mockup} className='btn btn-outline-dark w-100 customButton' target='_blank' rel="noreferrer">Maquette (PDF)</a>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
    return (
        <section className='projects'>
            <h2>Mes Projets</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 justify-content-center">
                {projectList}
            </div>  
        </section>
    );
}

const projects = [
    {
        id:1,
        title:'Personalities',
        description:`Plateforme de test de personnalité MBTI : passation de test, 
                    calcul et affichage du résultat, offres d\'emplois, authentification, interface administrateur.`,
        image: personalities_photo,
        stack : 'VueJs, Java, PostgreSQL',
        links: {
            url: personalitiesUrl,
            mockup: personalities_mockup,
            dataModel: personalities_data_model,
            repository:personalitiesRepoUrl
        }
    }, 
      {
        id:2,
        title:'Ori Massages',
        description:`Plateforme de réservation pour Massages : consultation des services, réservation,
                    interface administrateur pour gestion des rendez-vous.`,
        image: oriMassages_photo,
        stack : 'React, Java, PostgreSQL',
        links: {
            mockup:'',
            dataModel:ori_massages_data_model,
            repository:oriMassagesRepoUrl
        }
    }, 
      {
        id:3,
        title:'Matis',
        description:'Bibliothèque digitale sur le savoir des Matis',
        image: matis_photo,
        stack : 'React, Java, PostgreSQL',
        links: {
            mockup:'',
            dataModel:'',
            repository:''
        }
    }
]