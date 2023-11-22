import { useState, useEffect } from "react";
import data from "./data";
import Articolo from "./Articolo";

//Funzione che se presente 'Theme' nel localStorage
// returna il suo valore o di default return 'light-mode'
const getFromLocalStorage = () => {
  if (localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  } else {
    return "light-mode";
  }
};

function App() {
  //Stato iniziale per la nostra modalità
  const [theme, setTheme] = useState(getFromLocalStorage());

  //Cambia il valore dello staate theme
  const cambiaTema = () => {
    if (theme === "light-mode") {
      setTheme("dark-mode");
    } else {
      setTheme("light-mode");
    }
  };

  useEffect(() => {
    //Attacca classe al html tag
    document.documentElement.className = theme;

    //inserisco valore di theme nel localStorage ogni volta viene mutato il suo state
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <div className="container mt-5 mb-5">
        <button className="btn" onClick={cambiaTema}>
          Cambia
        </button>
      </div >
      <div className="ms-5 me-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {data.map((el) => (
            <Articolo key={el.id} {...el} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
