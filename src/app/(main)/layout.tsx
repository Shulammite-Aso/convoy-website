import '../globals.scss';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogSlide from '../components/BlogSlide';
import { getPosts } from '@/lib/getPosts';

export const metadata: Metadata = {
	title: 'Convoy',
	description: 'Convoy Documentation and Website'
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const featurePosts = await getPosts();
	return (
		<html lang="en" style={{ scrollBehavior: 'smooth' }}>
			<body suppressHydrationWarning={true}>
				<Header></Header>
				{children}
				<BlogSlide featurePosts={featurePosts.slice(0, 7)}></BlogSlide>
				<Footer></Footer>

				<svg display="none" className="hidden">
					<symbol width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" id="angle-down-icon">
						<path d="M11.3333 6.11333C11.2084 5.98916 11.0395 5.91946 10.8633 5.91946C10.6872 5.91946 10.5182 5.98916 10.3933 6.11333L8.00001 8.47333L5.64001 6.11333C5.5151 5.98916 5.34613 5.91946 5.17001 5.91946C4.99388 5.91946 4.82491 5.98916 4.70001 6.11333C4.63752 6.1753 4.58792 6.24904 4.55408 6.33027C4.52023 6.41151 4.50281 6.49865 4.50281 6.58666C4.50281 6.67467 4.52023 6.7618 4.55408 6.84304C4.58792 6.92428 4.63752 6.99802 4.70001 7.05999L7.52667 9.88666C7.58865 9.94914 7.66238 9.99874 7.74362 10.0326C7.82486 10.0664 7.912 10.0839 8.00001 10.0839C8.08801 10.0839 8.17515 10.0664 8.25639 10.0326C8.33763 9.99874 8.41136 9.94914 8.47334 9.88666L11.3333 7.05999C11.3958 6.99802 11.4454 6.92428 11.4793 6.84304C11.5131 6.7618 11.5305 6.67467 11.5305 6.58666C11.5305 6.49865 11.5131 6.41151 11.4793 6.33027C11.4454 6.24904 11.3958 6.1753 11.3333 6.11333Z" />
					</symbol>
				</svg>
			</body>
		</html>
	);
}
