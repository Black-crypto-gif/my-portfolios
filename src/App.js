import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Card from './components/CodingSkills';
import Code from './components/Code';
import SideHeader from './components/SideHeader';
import Tools from './components/Tools';
import Icons from './components/Icons';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <>
      <Header />
      <SideHeader />
      <Content />
      <Card />
      <Code/>
      <Tools />
      <Icons />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
