import "../styles/Exercice1.css"
import Roger from "../assets/chickenBox.png"
import { useState } from "react"

function Exercice1 (){
    const [rogerCount,setRogerCount] = useState(0)

    return (
        <div id="exercice1">
            <h2>Exercice 1</h2>
            <div id="rogersBox">
                <figure >
                    <img src={Roger}  className="roger" alt="chicken in a box" />
                    <figcaption>Roger avec useState {rogerCount}</figcaption>
                    <button onClick={() => setRogerCount(rogerCount + 1)}>State + 1</button>
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