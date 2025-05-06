import React, {useState, useEffect} from "react";
// useState serve para guardar valores que mudam com o tempo
//useEffect serve para rodar algum código em momentos especificos 
function Letreiro() {
    const texto = "Venha estudar na Fatec!";

    const [letras, setLetras] = useState(""); // guarda o texto que já foi digitado na tela, define um estado
    const [indice, setIndice] = useState(0); // guarda a posição da próxima letra que será mostrada 

    useEffect(() => {
        if (indice < texto.length) {
          const intervalo = setInterval(() => {
            setLetras((letrasAnteriores) => letrasAnteriores + texto[indice]);
            setIndice((indiceAnterior) => indiceAnterior + 1);
          }, 100);
    
          
          return () => clearInterval(intervalo);
        }
      }, [indice, texto]);

  return (
    <>
        <h1>
            Meu letreiro
        </h1>
        <p>
            {letras}
        </p>
    </>
  );
}

export default Letreiro;