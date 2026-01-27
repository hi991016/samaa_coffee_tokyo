import styles from './side.module.scss'

interface BrandSideProps {
  color?: string
}

const BrandSideText: React.FC<BrandSideProps> = ({ color }) => {
  return (
    <div className={styles.container} style={{ color: color }}>
      <p>さまあ</p>
      <p>美しい未来</p>
    </div>
  )
}

export default BrandSideText
