// Modules
import { useTheme } from "@material-ui/core";
import React from "react";

// Elements
import Head from "next/head";

// Components
export default function Layout({ children, name }: { children: any; name: string }) {
	const theme = useTheme();
	return (
		<div>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Curriculum {name}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main style={{ background: theme.palette.background.default }}>{children}</main>
		</div>
	);
}
