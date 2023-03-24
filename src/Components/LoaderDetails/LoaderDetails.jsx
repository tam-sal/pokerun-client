import styles from './LoaderDetails.module.css'
const LoaderDetails = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.jelly}></div>

      <svg width="0" height="0" className={styles.jelly_maker}>
        <defs>
          <filter id={styles.uib_jelly_ooze}>
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="6.25"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="ooze"
            />
            <feBlend in="SourceGraphic" in2="ooze" />
          </filter>
        </defs>
      </svg>
    </div>
  )
}
export default LoaderDetails