import { ProjectData } from '../../project-data'
import styles from './MyProjects.module.scss'
import ProjectCard from './ProjectCard'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h2>Projects</h2>
      <h3>My Projects</h3>

      <div className={styles['projects-wrapper']}>
        {ProjectData.map((project) => (
          <ProjectCard key={project.id} {...project}/>
        ))}
      </div>
    </section>
  )
}

export default Myprojects