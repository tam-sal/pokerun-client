import { Nav, Cards, SearchBar, Header, Footer } from '../../Components/'
import style from './Home.module.css'

function Home() {


  return (

    <div className={style.homeContainer}>
      <Header />
      <Nav />
      <SearchBar />
      <Cards />
      <Footer />
    </div>

  )
}



export default Home