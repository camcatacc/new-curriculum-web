// Modules
import React from "react";

// Elements
import Bar from "components/atoms/BarAbility/Bar";
import BarTitle from "components/atoms/BarAbility/BarTitle";

// Definitions
export interface BarAbilityProps {
	percentage: number;
	name: string;
	titleColor: string;
	barColor: string;
	fontColor?: string;
}

// Element
const BarAbility = ({ percentage, name, titleColor, barColor, fontColor }: BarAbilityProps) => (
	<div className="flex flex-row justify-center">
		<div className="w-32">
			<BarTitle backgroundColor={titleColor} fontColor={fontColor} title={name} />
		</div>
		<div className="w-full md:w-80 ">
			<Bar backgroundColor={barColor} percentage={percentage} fontColor={fontColor} />
		</div>
	</div>
);

export default BarAbility;
