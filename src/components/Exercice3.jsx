import "../styles/Exercice3.css";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function Exercice3() {
	const box = useRef();

	useGSAP(
		() => {
			const tl = gsap.timeline();

			tl.to(box.current, { x: "20vw" })
				.to(box.current, { y: "20vh" })
				.to(box.current, { x: "70vw" });
		},
		[],
		{ scope: box },
	);

	return (
		<div id="exercice3">
			<h2>Exercice 3</h2>
			<div id="stagerBox">
				<div ref={box}></div>
				<div>1</div>
				<div>2</div>
				<div>3</div>
			</div>
		</div>
	);
}

export default Exercice3;
