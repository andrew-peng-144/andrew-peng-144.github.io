import styles from './Footer.module.scss'

const Footer = () => {

  return (
    <footer>

        <div className={styles['footer-copyright']}>
            <small>&copy; Andrew Peng. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer