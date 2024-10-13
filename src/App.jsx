
import About from './components/About/About'
import Content from './components/Content/Content'
import Header from './components/header/Header'
import Info from './components/Info/Info'
import Menu from './components/Menu/Menu'
import Banner from './components/Banner/banner'
import CafeIntro from './components/CafeIntro/CafeIntro'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div className='container'>
      <Header />
      <Content />
      <About />
      <Menu />
      <Info />
      <Banner />
      <CafeIntro />
      <Footer />
    </div>
  )
}

export default App