import "../styles/Introduction.css"
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState } from "react";
import pirate from "../assets/pirateChicken.png"

function Introduction(){
    const [method,setMethod] = useState("to")
    const [getCode,setGetCode] = useState("")

    const handleMethodChange = (event) => {
        setMethod(event.target.value)
    }

    useGSAP(() => {

        const target = "#pirateImg";
        gsap.set(target, { clearProps: "all" });

        switch (method){
            case 'to':
                gsap.to(target, { duration: 1, x: `50vw` });
                break;
              case 'from':
                gsap.from(target, { duration: 1, x: `50vw` });
                break;
              case 'fromTo':
                gsap.fromTo(target, { x: 0, rotation: 0 }, { duration: 1, x: `50vw` });
                break;
              case 'set':
                gsap.set(target, { x: `30vw`});
                break;
              default:
                break;
        }
    }, [method])

    return(
        <div id="introduction">
            <h1>Premiers pas avec GSAP sur React</h1>
            <p><em>Rappel visuel des methodes</em></p>
            <form>
                <label>
                    <input type="radio" id="to" name="method" value="to" checked={method === 'to'} onChange={handleMethodChange} />
                    <span className="violet">gsap</span>.<span className="green">to</span>(<span className="yellow"> "cible"</span>, <span className="orange">{`{ valeurs }`}</span> )
                    <p>la méthode <span className="violet">gsap</span>.<span className="green">to</span>( ) commencera l'animation des valeurs css d'une <span className="yellow"> "cible"</span> vers ses nouvelles <span className="orange">{`{ valeurs }`}</span> .</p>
                </label>
                <label>
                    <input type="radio" id="from" name="method" value="from" checked={method === 'from'} onChange={handleMethodChange} />
                    <span className="violet">gsap</span>.<span className="green">from</span>(<span className="yellow"> "cible"</span>, <span className="orange">{`{ valeurs }`}</span> )
                    <p>la méthode <span className="violet">gsap</span>.<span className="green">from</span>( ) commencera l'animation des <span className="orange">{`{ valeurs }`}</span>  renseignées vers les valeurs css de la <span className="yellow"> "cible"</span>.</p>
                </label>
                <label>
                    <input type="radio" id="fromTo" name="method" value="fromTo" checked={method === 'fromTo'} onChange={handleMethodChange} />
                    <span className="violet">gsap</span>.<span className="green">fromTo</span>(<span className="yellow"> "cible"</span>, <span className="orange">{`{ valeurs 1 }`}</span>, <span className="orange">{`{ valeurs 2 }`}</span> )
                    <p>la méthode <span className="violet">gsap</span>.<span className="green">fromTo</span>( ) commencera l'animation de la <span className="yellow">"cible"</span> à partir des <span className="orange">{`{ valeurs1 }`}</span>  vers les <span className="orange">{`{ valeurs 2 }`}</span>.</p>
                </label>
                <label>
                    <input type="radio" id="set" name="method" value="set" checked={method === 'set'} onChange={handleMethodChange} />
                    <span className="violet">gsap</span>.<span className="green">set</span>(<span className="yellow"> "cible"</span>, <span className="orange">{`{ valeurs }`}</span> )
                    <p>la méthode <span className="violet">gsap</span>.<span className="green">set</span>( ) déplace sans animations les valeurs css d'une <span className="yellow"> "cible"</span> vers ses nouvelles <span className="orange">{`{ valeurs }`}</span> .</p>
                </label>
            </form>
            <img src={pirate} alt="pirate" id="pirateImg"/>
        </div>
    )
}

export default Introduction