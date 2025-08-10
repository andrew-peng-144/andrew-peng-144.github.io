
import Header from './components/header/Header';
import MyProjects from './components/my-projects/MyProjects';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Certifications from './components/certifications/Certifications';



function App() {
  return (
    <div>
      <Header />
      <MyProjects/>
      <Skills/>
      <Certifications/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App
