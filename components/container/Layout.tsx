// Modules
import Head from "next/head";
import React from "react";

export default function Layout({ children }: { children: any }) {
	return (
		<div>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Curriculum David Camacho Cateura</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>{children}</main>
		</div>
	);
}
