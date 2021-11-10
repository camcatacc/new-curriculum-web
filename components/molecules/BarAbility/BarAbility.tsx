// Modules
import React from "react";

// Elements
import Bar from "components/atoms/BarAbility/Bar";
import BarTitle from "components/atoms/BarAbility/BarTitle";

// Definitions
export interface BarAbilityProps extends UnformattedBarAbilityProps, FormatBarAbilityProps {}

export interface UnformattedBarAbilityProps {
	percentage: number;
	title: string;
}

export interface FormatBarAbilityProps {
	titleStyle: {
		backgroundColor: string;
		fontColor: string;
	};
	barStyle: {
		backgroundColor: string;
	};
	fontSize?: string | number;
}

// Element
const BarAbility = ({ titleStyle, barStyle, fontSize, percentage, title }: BarAbilityProps) => {
	return (
		<div className="flex flex-row w-full">
			<div className="w-1/4">
				<BarTitle backgroundColor={titleStyle.backgroundColor} fontColor={titleStyle.fontColor} fontSize={fontSize}>
					{title}
				</BarTitle>
			</div>
			<div className="flex-1">
				<Bar color={barStyle.backgroundColor} percentage={percentage} fontSize={fontSize} />
			</div>
		</div>
	);
};

export default BarAbility;
