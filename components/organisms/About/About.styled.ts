import { motion } from "framer-motion";
import styled from "styled-components";

export const ParentContainer = styled.div`
	gap: 10%;
`;

export const FirstChildContainer = styled(motion.div)`
	flex: 1;
`;

export const SecondChildContainer = styled(motion.div)`
	flex: 2;
`;
