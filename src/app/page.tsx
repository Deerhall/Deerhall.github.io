import Image from "next/image";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaM } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { LuMail } from "react-icons/lu";

export default function Home() {
	return (
		// <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
		<main className="flex flex-col w-full p-24 items-center justify-center gap-8 ">
			<section className="flex flex-row max-w-screen-lg items-center gap-8  rounded-3xl  overflow-hidden p-4">
				<img src="/images/portrait.png" alt="portrait" width="320" />
				{/* <Image
					src="/images/portrait.png"
					alt="portrait"
					fill
					objectFit="contain"
				/> */}
				<div className="flex flex-col gap-5 w-full ">
					<h1 className="text-2xl font-semibold text-gray-700 leading-3">
						Hej. Jag är Selim
					</h1>
					<h1 className="text-5xl font-black text-zinc-900 ">
						Utvecklare och UI/UX designer.
					</h1>
					<svg width="auto" height="2">
						<line
							x1="0"
							y1="1"
							x2="100"
							y2="1"
							stroke="#D2D2D2"
							strokeWidth="2"
						/>
					</svg>
					<p className="text-gray-700 font-sans">
						Jag är en nyfiken, driven och passionerad utvecklare som ständigt
						hungrar efter mer. Som civilingenjörsstudent inom interaktion och
						design utforskar jag ständigt nya teknologier och idéer för att
						vässa mina färdigheter. Med ett öga för detaljer och en obeveklig
						strävan efter innovation skapar jag uppslukande digitala världar och
						estetiskt tilltalande produkter.
					</p>
					<div className="flex flex-row gap-5 items-center">
						<a href="https://github.com/Deerhall">
							{/* <img src="/svg/github.svg" alt="github" width="28" /> */}
							<FaGithub className="text-gray-700 h-8 w-auto" />
						</a>
						<a href="https://www.instagram.com/hjorthall/">
							{/* <img src="/svg/instagram.svg" alt="instagram" width="28" /> */}
							<FaInstagram className="text-gray-700 h-8 w-auto" />
						</a>
						<a href="https://www.linkedin.com/in/hjorthall/">
							{/* <img src="/svg/linkedin.svg" alt="linkedin" width="28" /> */}
							<FaLinkedin className="text-gray-700 h-8 w-auto" />
						</a>
						<a href="mailto:selimhjorthall@gmail.com">
							{/* <img src="/svg/mail.svg" alt="mail" width="28" /> */}
							<LuMail className="text-gray-700 h-8 w-auto" />
						</a>
					</div>
				</div>
			</section>

			{/* <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
				<a
					href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className="mb-3 text-2xl font-semibold">
						Docs{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className="m-0 max-w-[30ch] text-sm opacity-50">
						Find in-depth information about Next.js features and API.
					</p>
				</a>

				<a
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className="mb-3 text-2xl font-semibold">
						Learn{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className="m-0 max-w-[30ch] text-sm opacity-50">
						Learn about Next.js in an interactive course with&nbsp;quizzes!
					</p>
				</a>

				<a
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className="mb-3 text-2xl font-semibold">
						Templates{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className="m-0 max-w-[30ch] text-sm opacity-50">
						Explore starter templates for Next.js.
					</p>
				</a>

				<a
					href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className="mb-3 text-2xl font-semibold">
						Deploy{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
						Instantly deploy your Next.js site to a shareable URL with Vercel.
					</p>
				</a>
			</div> */}
		</main>
	);
}
