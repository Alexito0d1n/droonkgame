import { Rules, } from "../components";
import Link from "next/link";

function RulesHome() {
   return (
    <div>
      

      <main>
        <div className="welcome-screen">
          <div className="logo-container">
            <div className="rules-image">
              <Rules />
              
            </div>
          </div>
          <div className="buttons">
            
            <Link href="/play">
              <button className="input-buttons">EMPIEZA A JUGAR</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default RulesHome;
