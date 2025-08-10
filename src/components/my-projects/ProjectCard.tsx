import React from 'react'
import styles from './ProjectCard.module.scss'

export type ProjectCardProps = {
  id: number
  name: string
  description: string
  image?: string
  link?: string
  github?: string
  youtube?: string
  soundcloud?: string
}
const ProjectCard: React.FC<ProjectCardProps> = ({ id, name, description, image = "./assets/react.svg", link = "example.com", github, youtube, soundcloud }) => {

  return (
    <article key={id} className={styles['project-card']}>
      <a className={styles['card-image-wrapper']} href={link}>
        <img src={image} alt={name} />
      </a>
      <h3>{name}</h3>
      <p className={styles['card-desc']}>{description}</p>
      <div className={styles['card-footer']}>
        {github && (
          // insert github icon
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
            style={{ textAlign:'center'}}
          >
        GitHub
      </a>
        )}
      {
        youtube && (
          // insert youtube icon
          <div></div>
        )
      }
      {
        soundcloud && (
          // insert soundcloud icon
          <div></div>
        )
      }
    </div>

    </article >
  )
}
export default ProjectCard