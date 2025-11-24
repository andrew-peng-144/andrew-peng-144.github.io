import styles from './Skills.module.scss'

const Skills = () => {
  return (
    <section className={styles['skills-section']}>
      <h2>Skills</h2>
      <div className={styles['skills-grid']}>
        <div className={styles['skills-card']}>
          <h4 className={styles['skills-title']}>Cloud Infrastructure</h4>
          <ul className={styles['skills-list']}>
            <li>Terraform / Hashicorp Lang HCL</li>
            <li>AWS Lambda</li>
            <li>CI/CD Azure Pipelines</li>
          </ul>
        </div>
        <div className={styles['skills-card']}>
          <h4 className={styles['skills-title']}>Backend</h4>
          <ul className={styles['skills-list']}>
            <li>.NET Core C#, MVC</li>
            <li>SQL Server, MySQL, SQLite</li>
            <li>Python - AWS SDK, numpy, FastAPI</li>
            <li>Node.js</li>
            <li>Java</li>
          </ul>
        </div>
        <div className={styles['skills-card']}>
          <h4 className={styles['skills-title']}>Frontend</h4>
          <ul className={styles['skills-list']}>
            <li>React</li>
            <li>Sass / CSS</li>
            <li>HTML</li>
            <li>Javascript / Typescript</li>
          </ul>
        </div>
        <div className={styles['skills-card']}>
          <h4 className={styles['skills-title']}>Game Development</h4>
          <ul className={styles['skills-list']}>
            <li>Godot / GDScript</li>
            <li>Pixi.js</li>
            <li>LibGDX</li>
          </ul>
        </div>
      </div>

    </section>
  )
}

export default Skills