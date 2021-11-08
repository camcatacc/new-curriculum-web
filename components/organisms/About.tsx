import React from "react";
import { InlineStyles } from "../../styles/stylesInterface";
import { Paragraph } from "../atoms/Paragraph";
import { AvatarWithName } from "../molecules/AvatarWithName";

export const About = (props: { name: string; surname: string }) => {
    return (
        <div
            style={{ gap: "10%" }}
            className="flex flex-col md:flex-row items-center"
        >
            <div style={{ flex: 1 }} className="w-full md:w-auto">
                <AvatarWithName name={props.name} surname={props.surname} />
            </div>
            <div style={{ flex: 2 }}>
                <div className="mb-8">
                    <Paragraph>
                        Soy una persona comprometida, capaz y resolutiva, con
                        conocimientos, experiencia y formación como
                        desarrollador que se complementan muy bien con mi
                        background empresarial.
                    </Paragraph>
                </div>
                <div className="mb-8">
                    <Paragraph>
                        Durante 5 años he dirigido una empresa de robótica y
                        programación educativa, dedicando el último año y medio
                        a idear, diseñar y desarrollar una solución online en
                        forma de aplicación híbrida y una plataforma web para
                        los profesores.
                    </Paragraph>
                </div>
                <div className="mb-8">
                    <Paragraph>
                        Actualmente, busco una posición como desarrollador web o
                        móvil en la que pueda seguir aportando valor y crecer.
                    </Paragraph>
                </div>
            </div>
        </div>
    );
};
