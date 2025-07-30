import React from 'react'
import styles from './ProjectCard.module.scss'

export type ProjectCardProps = {
  id: number
  name: string
  description: string
  image?: string
  github?: string
  youtube?: string
  soundcloud?: string
}
const ProjectCard: React.FC<ProjectCardProps> = ({id, name, description, image = "./assets/react.svg", github, youtube, soundcloud}) => {
  return (
    <article className={styles['project-card']}>
      <div className={styles['card-image-wrapper']}>
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <div className={styles['card_desc']}>{description}</div>
      <div className={styles['card_footer']}>
        {github && (
          // insert github icon
          <div></div>
        )}
      </div>

    </article>
  )
}
export default ProjectCard