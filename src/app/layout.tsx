import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaScroll } from "react-icons/fa6";
import { GiScrollUnfurled } from "react-icons/gi";
import { IoDocument, IoDocumentOutline } from "react-icons/io5";
import { LuMail, LuPhone } from "react-icons/lu";
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
		<html lang="en" className="flex w-full justify-center ">
			<body
				className={
					inter.className +
					" flex flex-col w-full max-w-6xl min-h-screen justify-between"
				}
			>
				<header className="flex flex-wrap flex-row w-full justify-between items-center py-4 px-2  gap-2">
					{/* <div id="logo" className="flex flex-row items-center gap-3"> */}
					<Link href={`/`} className="flex flex-row items-center gap-3">
						<img
							src="/svg/ux-happy.svg"
							alt="logo"
							height="64"
							className="dark:invert"
						/>
						<div className="flex flex-col">
							<h5 className=" font-bold text-3xl tracking-normal leading-7 max-xl:text-xl">
								Selim Hjorthall
							</h5>
							<h6 className=" font-light max-xl:hidden">
								Interaktion &amp; Design Student
							</h6>
							<h6 className="opacity-40 font-		bold text-sm xl:hidden">
								Interaktion &amp; Design
							</h6>
						</div>
					</Link>

					<div className="hidden">
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
							<p className="max-sm:bg-fuchsia-300 rounded			-3xl p-1">SM</p>
							<p className="max-md:bg-fuchsia-300 rounded-3xl p-1">MD</p>
							<p className="max-lg:bg-fuchsia-300 rounded-3xl p-1">LG</p>
							<p className="max-xl:bg-fuchsia-300 rounded-3xl p-1">XL</p>
							<p className="max-2xl:bg-fuchsia-300 rounded-3xl p-1">XXL</p>
						</div>
					</div>
					<div className="flex flex-row justify-between list-none">
						<a
							href="/files/Selim_Hjorthall_CV_Sv.pdf"
							className="flex items-center gap-1 bg-amber-300 transition ease-out hover:ring-2 ring-gray-500 dark:text-zinc-900  py-2 px-4 rounded-full "
						>
							CV
							{/* <GiScrollUnfurled /> */}
							{/* <FaScroll /> */}
							{/* <IoDocumentOutline /> */}
							<IoDocument />
						</a>
					</div>
				</header>
				<main className="flex flex-col  items-center justify-center gap-8">
					{children}
				</main>
				<footer className="flex max-xl:flex-col max-xl:px-8 max-xl:py-8 gap-4 py-12 bg-gray-700 justify-around w-fill rounded-3xl text-white mb-8 mt-40 mx-4">
					<a
						href="https://www.linkedin.com/in/hjorthall/"
						className="flex gap-2 items-center"
					>
						<FaLinkedin className="h-8 w-auto" />
						<p>Selim Hjorthall</p>
					</a>
					<a
						href="mailto:selimhjorthall@gmail.com"
						className="flex gap-2 items-center"
					>
						<LuMail className="h-8 w-auto" />
						<p>selimhjorthall@gmail.com</p>
					</a>
					<a href="tel:0706830268" className="flex gap-2 items-center">
						<LuPhone className="h-8 w-auto" />
						<p>070-6830268</p>
					</a>
					<a
						href="https://github.com/Deerhall"
						className="flex gap-2 items-center"
					>
						<FaGithub className="h-8 w-auto" />
						<p>Deerhall</p>
					</a>
					{/* <img src="/images/gigi.png" className="absolute top-0" /> */}
				</footer>
			</body>
		</html>
	);
}
