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
            <li>NET Core C#</li>
          </ul>
        </div>
        <div className={styles['skills-card']}>
          <h4 className={styles['skills-title']}>Backend</h4>
          <ul className={styles['skills-list']}>
            <li>SQL & MySQL</li>
            <li>PHP</li>
            <li>Java</li>
            <li>Python</li>
            <li>Node.js</li>
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