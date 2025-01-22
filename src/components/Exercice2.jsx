import "../styles/Exercice2.css";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
function Exercice2() {
	const allBox = useRef();
	useGSAP(
		() => {
			gsap.to(allBox.current.children, {
				rotate: 360,
				repeat: -1,
				stagger: { each: 0.1, from: "center" },
			});
		},
		[],
		{ scope: allBox },
	);

	return (
		<div id="exercice2">
			<h2>Exercice 2</h2>
			<div id="stagerBox" ref={allBox}>
				<div>1</div>
				<div>2</div>
				<div>3</div>
				<div>4</div>
				<div>5</div>
			</div>
		</div>
	);
}

export default Exercice2;
