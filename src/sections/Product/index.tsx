import { Header } from 'src/components'
import styles from './product.module.scss'

const Product: React.FC = () => {
  return (
    <section className={styles.container}>
      <Header logo={true} sidebar={false} />
      <div className={styles.bottom}>
        <a className='u-hovertxt' href='https://store.samaa.world' target='_blank' rel='noopener noreferrer'>
          Available Here
        </a>
      </div>
    </section>
  )
}

export default Product
