import styles from './About.module.scss'

const About = () => {

  return (

    <section className={styles['about-wrapper']}>
      <h2>About me</h2>
      <p>mr.andrew.peng@gmail.com</p>
      <p>Georgia Institute of Technology | Class of 2023</p>
    </section>
  )
}

export default About