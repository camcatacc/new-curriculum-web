// Modules
import React from "react";

// Elements
import SectionTitle from "components/molecules/SectionTitle";
import About from "components/organisms/About";

// Definitions
export interface PresentationProps {
	className?: string;
}

// Default props
const paragraphs: string[] = [
	"Soy una persona comprometida, capaz y resolutiva, con conocimientos, experiencia y formación como desarrollador que se complementan muy bien con mi background empresarial.",
	"Durante 5 años he dirigido una empresa de robótica y programación educativa, dedicando el último año y medio a idear, diseñar y desarrollar una solución online en forma    de aplicación híbrida y una plataforma web para los profesores.",
	"Actualmente, busco una posición como desarrollador web o móvil en la que pueda seguir aportando valor y crecer."
];

// Element
const Presentation = ({ className }: PresentationProps) => {
	return (
		<div className={`flex flex-col justify-center ${className}`}>
			<SectionTitle>QUI SÓC</SectionTitle>
			<About name="David" surname="Camacho Cateura" paragraphs={paragraphs} />
		</div>
	);
};

export default Presentation;
