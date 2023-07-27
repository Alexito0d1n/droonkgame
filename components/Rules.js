import React from "react";
import ReactHtmlParser from 'react-html-parser';

function Rules({ ruleNumber }) {
  const rules = [
    //Rule 1
    `<h3>Bienvenidos a droonk 🥴</h3>
    Para que entendáis el juego y os lo podáis pasar a lo grande es importante que os leáis estas instrucciones (intentaremos ser breves tranquis).
    <br/><br/>
    Sentaos alrededor de una mesa, cada uno con algo para beber, elegid a alguien para lea las preguntas y seguid el orden que os de la gana.
    <br/><br/>`,
    //Rule 2
    `<br/>
    Veréis que cuando le deis a jugar os aparecerá una carta. Tendréis que prestar atención a varias cosas: <br />
    <ol>
    <li> <b>El borde:</b> Puede tener 4 colores que corresponden a <span class="easy-rect">fácil</span>,
    <span class="medium-rect">media</span>, <span class="hard-rect">difícil</span> o <span class="death-rect">muerte</span>.
    <br/><br/>
    <li> <b>La esquina inferior izquierda</b> contiene la categoría a la que pertenece la pregunta.
    <br/><br/>
    <li> <b>La esquina inferior derecha</b> contiene la penalización/castigo que se tendrá que hacer si no.
    <br/><br/>
    <li> <b>El centro</b> la prueba a realizar.
    <br/><br/>
    </ol>`,
    //Rule 3 
    `<br/>
    Debajo de cada carta verás 2 botones, <span class="next-rect">next</span>  y  <span class="downgrade-rect">downgrade</span>.
    El primero es para pasar a la siguiente pregunta; mientras que el segundo es para bajar en 1 nivel la dificultad de la pregunta actual.
    Así, si estaba en <span class="hard-rect">difícil</span> pasará a <span class="medium-rect">medio</span> <br /><br />
    Una idea que os damos es que se pueda utilizar una vez por turno a cambio de un castigo que digáis (por ejemplo: 2 tragos). Pero eso lo dejamos a vuestra elección.<br /><br />
    Por último, y ya nos callamos, es deciros que podéis usar <span class="next-rect">Partida personalizada</span> en el menu principal para 
    elegir que tipo de preguntas queréis y los niveles de dificultad 💀. <br /><br />`
  ];

  const ruleContent = rules[ruleNumber - 1];

  return (
    <div className="rules-container">
        <div> { ReactHtmlParser (ruleContent) } </div>
    </div>
  );
}

export default Rules;
