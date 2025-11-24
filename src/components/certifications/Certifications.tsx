import styles from './Certifications.module.scss'

const Certifications = () => {

  return (

    <section>
      <h2>Certifications</h2>
      <div className={styles['cert-container']}>
        <div className={styles['cert-image-wrapper']}>
          <h3>AWS Certified Developer Associate</h3>
          <img src='aws-certified-developer-associate.png' alt='Developer Associate' />
        </div>
        <div className={styles['cert-image-wrapper']}>
          <h3>AWS Certified Cloud Practitioner</h3>
          <img src='aws-certified-cloud-practitioner.png' alt='Cloud Practitioner' />
        </div>

      </div>
    </section>
  )
}

export default Certifications