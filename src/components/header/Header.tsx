import styles from './Header.module.scss'

const Header = () => {
  return (


    <header id='home'>

      <div className={styles['header-wrapper']}>
        <h1>Andrew Peng</h1>
        <h5>Software Developer</h5>

        <div className={styles['header-links']}>

          <a href="example.com" target="_blank" rel='noopener noreferrer'>Resume</a>
          <a href="example.com" target="_blank" rel='noopener noreferrer'>LinkedIn</a>
          <a href="example.com" target="_blank" rel='noopener noreferrer'>GitHub</a>
          <a href="example.com" target="_blank" rel='noopener noreferrer'>SoundCloud</a>

        </div>
      </div>
    </header>



  )
}

export default Header