import "./App.css";
import { logros } from "./back";
import { achievements } from "./constants";

//va a leer el numero de logros y el numero que nos de va a ser con el que vamos a pintar nuestras constantes de front

function App() {
  let natureLevel = logros.nature.level;
  let mathLevel = logros.matematicas.level;
  let lolLevel = logros.lolsito.level;
  return (
    <main>
      <div className="flex flex-col">
        <div className="flex">
          <h2 className="text-white text-center bold p-4 flex items-center w-[167px] h-[167px]">
            Nature
          </h2>
          {achievements.nature.map((foco, i) => (
            <div key={`nature-${i}`}>
              {/* nitamos el numero que nos entrega el back */}
              {console.log({ i, natureLevel })}
              {i < natureLevel ? (
                <img
                  className="flex max-w-[167px] max-h-[223px]"
                  src={foco.imgSrc}
                  alt={`nature-${i}`}
                />
              ) : (
                <img
                  className="flex max-w-[167px] max-h-[223px] grayscale-image"
                  src={foco.imgSrc}
                  alt={`nature-${i}`}
                />
              )}
            </div>
          ))}
        </div>
        <br />
        <div className="flex">
          <h2 className="text-white text-center bold p-4 flex items-center w-[167px] h-[167px]">
            matematicas
          </h2>
          {achievements.matematicas.map((foco, i) => (
            <div key={`nature-${i}`}>
              {/* nitamos el numero que nos entrega el back */}
              {console.log({ i, mathLevel })}
              {i < mathLevel ? (
                <img
                  className="flex max-w-[167px] max-h-[223px]"
                  src={foco.imgSrc}
                  alt={`nature-${i}`}
                />
              ) : (
                <img
                  className="flex max-w-[167px] max-h-[223px] grayscale-image"
                  src={foco.imgSrc}
                  alt={`nature-${i}`}
                />
              )}
            </div>
          ))}
        </div>

        <br />

        <div className="flex">
          <h2 className="text-white text-center bold p-4 flex items-center w-[167px] h-[167px]">
            lolsito
          </h2>
          {achievements.lolsito.map((foco, i) => (
            <div key={`nature-${i}`}>
              {/* nitamos el numero que nos entrega el back */}
              {console.log({ i, lolLevel })}
              {i < lolLevel ? (
                <img
                  className="flex max-w-[167px] max-h-[223px]"
                  src={foco.imgSrc}
                  alt={`nature-${i}`}
                />
              ) : (
                <img
                  className="flex max-w-[167px] max-h-[223px] grayscale-image"
                  src={foco.imgSrc}
                  alt={`nature-${i}`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
