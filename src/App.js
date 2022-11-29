import "./App.css";

function App() {
  return (
    <div className="grid">
      <PrimaryContent />
      <LayoutContent />
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

const LayoutContent = () => {
  return (
    <div id="layout_content">
      <Element />
      <Element />
      <Element />
    </div>
  );
};

const Element = ({
  el_name = "Hydrogen",
  symbol = "H",
  at_no = 1,
  wt = 1.008,
  el_type = "G",
}) => {
  return (
    <div className="element">
      <p className="atomic_number">{at_no}</p>
      <h1>{symbol}</h1>
      <p>{el_name}</p>
      <p>{wt}</p>
      <p className="element_type">{el_type}</p>
    </div>
  );
};
