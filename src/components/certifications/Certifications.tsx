import styles from './Certifications.module.scss'

const Certifications = () => {

  return (

    <section>
      <h2>Certifications</h2>
      <div className={styles['cert-container']}>
        <h3>AWS Certified Developer Associate</h3>
        <h3>AWS Certified Cloud Practitioner</h3>
      </div>
    </section>
  )
}

export default Certifications