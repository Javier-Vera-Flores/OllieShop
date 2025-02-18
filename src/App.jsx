import { Navbar } from "./components/layouts/NavBar/Navbar";
import { Header } from "./components/layouts/Header/Header";
import {Footer} from './components/layouts/Footer/Footer';
import {Bienvenida} from '../src/components/layouts/Bienvenida/Bienvenida';

function App() {
  const sumar = () => {
    return console.log("Estoy sumando");
  };
  return (
    <>
      <Header />
      {/* {<h1>Bienvenido a ollie Shop</h1>} */}
      <Bienvenida/>
      <Footer/>

    </>
  );
}

export default App;
