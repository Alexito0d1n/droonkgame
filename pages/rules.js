import { useState } from "react";
import { Rules } from "../components";
import Button from "../components/Button";

function RulesHome() {
  const [currentRule, setCurrentRule] = useState(1);
  const totalRules = 3; // El número total de reglas en el juego

  const handleNext = () => {
    if (currentRule < totalRules) {
      setCurrentRule(currentRule + 1);
    }
  };

  const handlePrevious = () => {
    if (currentRule > 1) {
      setCurrentRule(currentRule - 1);
    }
  };

  return (
    <div>
      <main>
        <div className="welcome-screen">
          <h2>Instrucciones del juego:</h2>
          <Rules ruleNumber={currentRule} />
          <div className="buttons">
            <div className="button-group">
              {currentRule > 1 && (
                <Button action={handlePrevious} disabled={false}>
                  &#9664; {/* Triángulo izquierdo */}
                </Button>
              )}
              {currentRule < totalRules && (
                <Button action={handleNext} disabled={false}>
                  &#9654; {/* Triángulo derecho */}
                </Button>
              )}
              {currentRule === totalRules && (
                <Button href="/play" disabled={false}>
                  EMPIEZA A JUGAR
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default RulesHome;
