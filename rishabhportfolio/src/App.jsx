
import './App.css'
import Contact from './components/contact/contact'
import Skills from './components/Dosection/do'
import Education from './components/Education/Education'
import Footer from './components/Footer/Footer'
import Intro from './components/Intro/intro'
import Works from './components/Myportfoliio/portfolio'
import Navbar from './components/Navbar/navbar'

function App() {

  return (
  <div>
      <Navbar></Navbar>
      <Intro></Intro>
      <Skills></Skills>
      <Works></Works>
      <Education></Education>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
