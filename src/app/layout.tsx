import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Hjorthall",
	description: "Utvecklare och UI/UX designer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="flex w-full justify-center">
			<body
				className={
					inter.className +
					" flex flex-col w-full max-w-6xl min-h-screen justify-between"
				}
			>
				<header className="flex flex-row w-full justify-between items-center py-4 ">
					{/* <div id="logo" className="flex flex-row items-center gap-3"> */}
					<Link href={`/`} className="flex flex-row items-center gap-3">
						<img src="/svg/ux.svg" alt="logo" height="64" />
						<div className="flex flex-col">
							<h5 className="text-zinc-900 font-bold text-3xl tracking-normal leading-7">
								Selim Hjorthall
							</h5>
							<h6 className="text-zinc-900 font-light">
								Interaktion &amp; Design Student
							</h6>
						</div>
					</Link>
					{/* </div> */}
					{/* <div>
						<div className="flex items-center">
							<p className="text-neutral-400 px-2">Above:</p>
							<p className="sm:bg-fuchsia-300 rounded-3xl p-1">SM</p>
							<p className="md:bg-fuchsia-300 rounded-3xl p-1">MD</p>
							<p className="lg:bg-fuchsia-300 rounded-3xl p-1">LG</p>
							<p className="xl:bg-fuchsia-300 rounded-3xl p-1">XL</p>
							<p className="2xl:bg-fuchsia-300 rounded-3xl p-1">XXL</p>
						</div>
						<div className="flex items-center">
							<p className="text-neutral-400 px-2">Below:</p>
							<p className="max-sm:bg-fuchsia-300 rounded-3xl p-1">SM</p>
							<p className="max-md:bg-fuchsia-300 rounded-3xl p-1">MD</p>
							<p className="max-lg:bg-fuchsia-300 rounded-3xl p-1">LG</p>
							<p className="max-xl:bg-fuchsia-300 rounded-3xl p-1">XL</p>
							<p className="max-2xl:bg-fuchsia-300 rounded-3xl p-1">XXL</p>
						</div>
					</div> */}
					<div className="flex flex-row justify-between list-none">
						<a
							href="/files/Selim_Hjorthall_CV_Sv.pdf"
							className="bg-amber-300 hover:bg-amber-100 py-2 px-4 rounded-full transition-colors "
						>
							Hämta CV
						</a>
					</div>
				</header>
				<main className="flex flex-col  items-center justify-center gap-8">
					{children}
				</main>
				<footer className="flex py-12 bg-gray-700 justify-around w-fill rounded-3xl text-white mb-8 mt-40">
					<div className="flex gap-3 items-center">
						<img src="/svg/footer-linkedin.svg" alt="linkedin" width="32" />
						<p>Selim Hjorthall</p>
					</div>
					<div className="flex gap-3 items-center">
						<img src="/svg/footer-mail.svg" alt="email" width="32" />
						<p>selimhjorthall@gmail.com</p>
					</div>
					<div className="flex gap-3 items-center">
						<img src="/svg/footer-phone.svg" alt="phone number" width="32" />
						<p>070 - 68 302 68</p>
					</div>
					<div className="flex gap-3 items-center">
						<img src="/svg/footer-instagram.svg" alt="instagram" width="32" />
						<p>hjorthall</p>
					</div>
				</footer>
			</body>
		</html>
	);
}
