import type { FC, ReactNode } from 'react';
import styles from './layout.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import utilStyles from '../app/utils.module.css';

const name = 'Yukino Kitamura';
export const siteTitle = 'Next.js Sample Website';
type Props = {

  children: React.ReactNode;
	home?: boolean;
};

const Layout: FC<Props> = ({ children, home }) => {
	// return <div className={styles.container}>{children}</div>;
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Learn how to build a personal website using Next.js"
				/>
				<meta
					property="og:image"
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle,
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header className={styles.header}>
				{home ? (
					<>
						<Image
							priority
							src="/images/IMG_4193.JPG"
							className={utilStyles.borderCircle}
							height={144}
							width={144}
							alt=""
						/>
						<h1 className={utilStyles.heading2Xl}>{name}</h1>
					</>
				) : (
					<>
						<Link href="/">
							<Image
								priority
								src="/images/IMG_4193.JPG"
								className={utilStyles.borderCircle}
								height={108}
								width={108}
								alt=""
							/>
						</Link>
						<h2 className={utilStyles.headingLg}>
							<Link href="/" className={utilStyles.colorInherit}>
								{name}
							</Link>
						</h2>
					</>
				)}
			</header>
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/">← Back to home</Link>
				</div>
			)}
		</div>
	);
};
// const Layout: FC<Props> = ({ children }) => {
	// return <div>{children}</div>;
  // return <div className={styles.container}>{children}</div>;
// };
export default Layout;

