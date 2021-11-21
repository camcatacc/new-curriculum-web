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
	animated?: boolean;
}

// Element
const BarAbility = ({ percentage, name, titleColor, barColor, fontColor, animated }: BarAbilityProps) => (
	<div className="flex flex-row justify-center">
		<div className="w-40 md:w-32 truncate">
			<BarTitle backgroundColor={titleColor} fontColor={fontColor} title={name} />
		</div>
		<div className="w-full md:w-80 ">
			<Bar backgroundColor={barColor} percentage={percentage} fontColor={fontColor} animated={animated} />
		</div>
	</div>
);

export default BarAbility;
