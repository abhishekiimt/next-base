import Head from 'next/head'
import React from 'react'

interface PageProps {
	title: string;
	description: string;
}

const Page = (props: PageProps) => {
	const { title, description } = props
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	)
}

export default Page