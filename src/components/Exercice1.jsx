import "../styles/Exercice1.css"
import Roger from "../assets/chickenBox.png"

function Exercice1 (){

    return (
        <div id="exercice1">
            <h2>Exercice 1</h2>
            <div id="rogersBox">
                <figure >
                    <img src={Roger}  className="roger" alt="chicken in a box" />
                    <figcaption>Roger avec useState </figcaption>
                    <button >State + 1</button>
                </figure>
                <figure >
                    <img src={Roger}  className="roger" alt="chicken in a box" />
                    <figcaption>Roger avec handler</figcaption>
                    <button >Click</button>
                </figure>
            </div>
        </div>
    )
}

export default Exercice1