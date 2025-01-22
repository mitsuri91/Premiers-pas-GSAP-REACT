import "../styles/Exercice1.css";
import Roger from "../assets/chickenBox.png";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useState } from "react";

function Exercice1() {
	const [rogerCount, setrogerCount] = useState(0);
	const roger1 = useRef();
	const roger2 = useRef();
	const { contextSafe } = useGSAP({ scope: roger2 });

	const handleClick = contextSafe(() => {
		gsap.to(roger2.current, { rotate: 360 });
	});

	useGSAP(() => {
		gsap.to(roger1.current, { scale: 1.5 });
	}, [setrogerCount]);

	return (
		<div id="exercice1">
			<h2>Exercice 1</h2>
			<div id="rogersBox">
				<figure ref={roger1}>
					<img src={Roger} className="roger" alt="chicken in a box" />
					<figcaption>Roger avec useState </figcaption>
					<button type="button" onClick={() => setrogerCount(rogerCount + 1)}>
						{rogerCount}
					</button>
				</figure>
				<figure ref={roger2}>
					<img src={Roger} className="roger" alt="chicken in a box" />
					<figcaption>Roger avec handler</figcaption>
					<button type="button" onClick={handleClick}>
						Click
					</button>
				</figure>
			</div>
		</div>
	);
}

export default Exercice1;
