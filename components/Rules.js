import React from "react";

function Rules({ ruleNumber }) {
  const rules = [
    //Rule 1
    `Bienvenidos a droonk!! <br />
     Para que entendais el juego y os lo podais pasar a lo grande es importante que os leais estas instrucciones (intentaremos ser breves tranquis)<br />
     Sentaos alrededor de una mesa, cada uno con algo para beber, elegid a alguien para lea las preguntas y seguir el orden que os de la gana`,
    //Rule 2
    `Vereis que cuando le deis a jugar os aparecerá una carta. Tendreis que prestar atención a varias cosas: <br />
    <ol>
    <li> EL BORDE: Puede tener 4 colores que corresponden a <span class="easy-rect">facil</span>, 
    <span class="medium-rect">media</span>, <span class="hard-rect">dificil</span>, <span class="death-rect">muerte</span>.
    <li> LA ESQUINA INFERIOR IZQUIERDA: Contiene la categoria a la que pertenece la pregunta.
    <li> LA ESQUINA INFERIOR DERECHA: Aqui aparecerá la penalización/castigo que se tendrá que hacer si no.  
    <li> La prueba a realizar que la encontrarás escrita en el centro.
    </ol>`,
    //Rule 3 
    `Debajo de cada carta verás 2 botones, <span class="next-rect">next</span>  y  <span class="downgrade-rect">downgrade</span>. El primero es para pasar a la siguiente pregunta
    mientras que el segundo es para bajar en 1 nivel la dificultad de la pregunta actual, así, si estaba en <span class="hard-rect">dificil</span> 
    pasará a <span class="medium-rect">medio</span> <br /><br />
    Una idea que os damos es que se pueda utilizar una vez por turno pero a cambio de un castigo que digais (por ejemplo: 2 tragos). Pero eso os lo dejamos a vuestra elección
    Por último y ya nos callamos es deciros que podeis tener la partida como querais si le dais a <span class="next-rect">Partida personalizada</span> en el menu principal para 
    elegir que tipo de preguntas quereis o si solo quereis preguntas del tipo muerte 💀` 
  ];

  const ruleContent = rules[ruleNumber - 1];

  return (
    <div className="rules-container">
      <p dangerouslySetInnerHTML={{ __html: ruleContent }} />
    </div>
  );
}

export default Rules;
