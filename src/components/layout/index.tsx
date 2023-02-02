import React from 'react'
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div>
			<Navbar />
			{children}
			<Footer />
		</div>
	)
}

export default Layout