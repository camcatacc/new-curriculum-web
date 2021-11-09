// Modules
import React from "react";

// Elements
import SectionTitle from "components/molecules/SectionTitle";
import GroupAbilities from "components/organisms/GroupAbilities";

// Styles
import { darkPink, brightPink, white } from "styles/customColors";

// Definitions
import type { AbilityProps } from "components/molecules/Ability";
import type { UnformattedBarAbilityProps, FormatBarAbilityProps } from "components/molecules/BarAbility";

export interface AbilitiesProps {
	title: string;
	abilities: AbilityProps[];
}

// Element
const Abilities = ({ title, abilities }: AbilitiesProps) => {
	const barAbilitiesArray: UnformattedBarAbilityProps[] = [
		{
			title: "HTML",
			percentage: 80
		},
		{
			title: "CSS",
			percentage: 80
		},
		{
			title: "Javascript",
			percentage: 90
		},
		{
			title: "Typescript",
			percentage: 90
		},
		{
			title: "React",
			percentage: 90
		},
		{
			title: "Angular",
			percentage: 50
		}
	];

	const barAbilitiesFormat: FormatBarAbilityProps = {
		barStyle: {
			backgroundColor: darkPink
		},
		titleStyle: {
			backgroundColor: brightPink,
			fontColor: white
		},
		fontSize: "1.1rem"
	};

	return (
		<div className="md:min-h-screen">
			<SectionTitle>{title}</SectionTitle>
			<GroupAbilities abilities={abilities} />
			{/*       <div className="flex flex-row gap-32">
        <GroupBarHabilities
          abilities={barAbilitiesArray}
          {...barAbilitiesFormat}
        />
        <GroupBarHabilities
          abilities={barAbilitiesArray}
          {...barAbilitiesFormat}
        />
      </div>
 */}
		</div>
	);
};

export default Abilities;
