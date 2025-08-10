import styles from './Header.module.scss'
import { Links } from "../../links"
const Header = () => {
  return (


    <header id='home'>

      <div className={styles['header-wrapper']}>
        <h1>Andrew Peng</h1>
        <h5>Software Developer</h5>

        <div className={styles['header-links']}>

          <a href={Links.Resume} target="_blank" rel='noopener noreferrer' download>Resume</a>
          <a href={Links.Linkedin} target="_blank" rel='noopener noreferrer'>LinkedIn</a>
          <a href={Links.Github} target="_blank" rel='noopener noreferrer'>GitHub</a>
          <a href={Links.Soundcloud} target="_blank" rel='noopener noreferrer'>SoundCloud</a>

        </div>
      </div>
    </header>



  )
}

export default Header