import styles from './About.module.scss'

const About = () => {

  return (

    <section className={styles['about-wrapper']}>
      <h2>About me</h2>
      <p>I am a software developer who holds 2 AWS certifications, and work experiences in C#, Terraform, Java, PHP backend development, MySQL database management, REST API development, and computational cell research, as well as project experience in AWS server hosting and game development.
        <br></br>
        I graduated from Georgia Institute of Technology in May 2022, with a BS in Computer Science and highest honors. Other than programming side projects, I also have a passion for playing and composing music!
        <br></br>
        Reach me at: mr.andrew.peng@gmail.com</p>
    </section>
  )
}

export default About