import styles from './Footer.modules.css'
import ghIcon from '../../assets/icons/github4.png'
import linkedIcon from '../../assets/icons/linkedin.png'



function Footer() {

  return (
    <>
      <footer className={styles.footer}>
        {'<'} developed by Tamer Saleh &copy;2023 &nbsp;
        <a href='https://github.com/tam-sal' target="_blank" rel="noopener noreferrer">
          {<img src={ghIcon} alt="git-hub" width='20px' />}</a>
        &nbsp;&nbsp;
        <a href="https://www.linkedin.com/in/tamsaleh/" target="_blank" rel="noopener noreferrer">
          {<img src={linkedIcon} alt="linked" width='20px' />}</a> /{'>'}
      </footer>
    </>
  )
}
export default Footer