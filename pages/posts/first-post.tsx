import type { FC } from 'react';

const FirstPost: FC = () => {
	return <h1>First Post</h1>;
};
export default FirstPost;

import Link from 'next/link';

const NextPost: FC = () => {
	// return <h1>First Post</h1>;
	return (
		<>
			<h1>First Post</h1>
			<h2>
				<Link href="/">← Back to home</Link>
			</h2>
		</>
	);
};
