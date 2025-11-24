import styles from './About.module.scss'

const About = () => {

  return (

    <section className={styles['about-wrapper']}>
      <h2>About me</h2>
      <p> Software developer with hands-on experience in cloud infrastructure and backend development. </p>
      <br></br>
      <p>I also like to develop games and write music!</p>
      <br></br>
      <p>React me at: <span style={{fontWeight: "bold"}}>mr.andrew.peng@gmail.com</span></p>
      <br></br>
      <p>Georgia Institute of Technology | Class of 2023</p>
    </section>
  )
}

export default About