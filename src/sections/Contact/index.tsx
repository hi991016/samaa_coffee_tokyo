import styles from './contact.module.scss'

const Contact: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.center}>
        <a className='u-hovertxt' href='mailto:hello@samaa.world'>
          hello@samaa.world
        </a>
      </div>
      <div className={styles.bottom}>
        <p>©︎ SAMAA_</p>
      </div>
    </section>
  )
}

export default Contact
