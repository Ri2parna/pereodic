import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [elements, setElements] = useState(() => []);
  const [loading, setLoading] = useState(() => null);

  useEffect(() => {
    fetch("https://periodic-table-api.herokuapp.com")
      .then((data) => data.json())
      .then((item) => setElements(item))
      .catch(() => console.log("There has been an error"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="grid">
      <PrimaryContent />
      {!loading && <LayoutContent elements={elements} />}
    </div>
  );
}

export default App;

const PrimaryContent = () => {
  return (
    <div id="primary_content">
      <h3>The pereodic table of elements</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ad
        voluptatum, eum perspiciatis quidem provident accusantium ratione
        veritatis sit culpa unde voluptas quibusdam architecto reiciendis
        debitis rem voluptates nulla libero?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat suscipit
        nulla facilis. Sapiente, molestias, recusandae quibusdam officia id
        itaque cumque nesciunt nam perspiciatis eaque nulla voluptatem mollitia
        saepe tempore eos?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsa
        ullam maxime ad aliquid doloremque sed quisquam dolorum deserunt nam?
        Ipsam maxime aliquam repudiandae architecto est doloribus dolores
        voluptates saepe.
      </p>
    </div>
  );
};

const LayoutContent = ({ elements }) => {
  return (
    <div id="layout_content">
      {elements.map((el) => (
        <Element key={el.atomicNumber} data={el} />
      ))}
    </div>
  );
};

const Element = ({ data: element }) => {
  // console.log(element);
  return (
    <div className="element">
      <p className="atomic_number">{element.atomicNumber}</p>
      <h1>{element.symbol}</h1>
      <p>{element.name}</p>
      <p>{element.atomicMass.slice(0, 3)}</p>
      <p className="element_type">{element.standardState[0]}</p>
    </div>
  );
};
