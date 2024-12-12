import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Menu } from './components/sections/Menu';
import { Hours } from './components/sections/Hours';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { BurgerImages } from './components/ui/BurgerImages';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <BurgerImages />
      <Header />
      <main>
        <Hero />
        <Menu />
        <Hours />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;