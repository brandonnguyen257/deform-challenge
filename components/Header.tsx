'use client';
import Link from 'next/link';

export default function Header() {
	return (
		<header
			style={{
				backgroundColor: 'black',
				padding: '10px 20px',
				position: 'absolute',
				top: 0,
				left: 0
			}}
		>
			<nav >
				<Link href="/" passHref>
					<span style={{ marginRight: '15px', color: 'lightorange' }}>
						Home Page
					</span>
				</Link>
				<Link href="/create-page" passHref>
					<span style={{ marginRight: '15px', color: 'lightorange' }}>
						Create Page
					</span>
				</Link>
				<Link href="/artist-gallery" passHref>
					<span style={{ color: 'lightorange' }}>Artist Gallery</span>
				</Link>
			</nav>

			<style jsx>{`
				span:hover {
					background-color: dimgray;
				}
			`}</style>
		</header>
	);
}
