// Modules
import React from "react";

// Elements
import Image from "next/image";
import AvatarName from "components/atoms/AvatarName/AvatarName";

// Styles
import * as Styled from "components/molecules/AvatarWithName/AvatarWithName.styled";

// Definitions
export interface AvatarWithNameProps {
	name: string;
	surname: string;
}

// Element
const AvatarWithName = ({ name, surname }: AvatarWithNameProps) => {
	return (
		<>
			<Styled.Container className="w-full relative mb-4">
				<Image layout="fill" src="/avatar.jpg" alt={name + surname} className="absolute top-0 left-0 bottom-0 right-0 rounded-full" />
			</Styled.Container>
			<AvatarName name={name} surname={surname} />
		</>
	);
};

export default AvatarWithName;
