import { Navbar } from "./navbar";

function App() {
  const sumar = () => {
    return console.log("Estoy sumando");
  };
  return (
    <div>
      <Navbar />
      <main>
        <h2>Prinicipal</h2>
        <button onClick={sumar}>sumar</button>
      </main>
      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  );
}

export default App;
