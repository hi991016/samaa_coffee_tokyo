import { Header } from 'src/components'
import styles from './story.module.scss'

const Story: React.FC = () => {
  return (
    <section className={styles.container}>
      <Header logo={true} sidebar={false} />
      <div className={styles.bottom}>
        <a className='u-hovertxt' href='http://' target='_blank' rel='noopener noreferrer'>
          Read Our Story
        </a>
      </div>
    </section>
  )
}

export default Story
