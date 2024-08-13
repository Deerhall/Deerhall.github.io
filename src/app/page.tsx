import { MotionDiv } from "@/components/MotionDiv";
import Project from "@/components/Project";
import { BsChevronCompactDown, BsChevronDown } from "react-icons/bs";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

export default function Home() {
	return (
		<>
			<section className="flex flex-col w-full h-screen max-xl:h-fit items-center">
				<div className=" flex flex-row h-3/4 max-xl:h-fit items-center gap-8 rounded-3xl mb-20 max-xl:flex-col  max-xl:gap-2 max-xl:items-start">
					<div className="flex w-96 max-xl:w-full justify-center ">
						<img
							src="/images/home/portrait.png"
							alt="portrait"
							// width="300"
							className="max-w-72 max-xl:max-w-36"
						/>
					</div>

					<div className="flex flex-col gap-5 w-full">
						{/* <h1 className="text-2xl font-semibold text-zinc-400 leading-4"> */}
						<h1 className="text-2xl font-semibold opacity-50   dark:opacity-80 leading-4 max-xl:text-xl max-xl:leading-3 max-xl:pt-4 max-xl:text-center">
							Hej, jag heter
						</h1>
						<h1 className="text-5xl font-black leading-10 max-xl:text-4xl max-xl:leading-8 max-xl:text-center">
							Selim Hjorthall.
						</h1>

						<h1 className="text-5xl font-black opacity-70 leading-10 max-xl:text-xl max-xl:leading-4  max-xl:text-center">
							Utvecklare och UI/UX designer.
						</h1>
						<svg
							// width="auto"
							height="2"
							className="max-xl:hidden"
						>
							<line
								x1="0"
								y1="1"
								x2="100"
								y2="1"
								stroke="#D2D2D2"
								strokeWidth="2"
							/>
						</svg>
						<p className="opacity-80 font-sans text-lg">
							Jag är en nyfiken, driven och passionerad utvecklare som ständigt
							hungrar efter mer. Som civilingenjörsstudent inom interaktion och
							design utforskar jag ständigt nya teknologier och idéer för att
							vässa mina färdigheter. Med ett öga för detaljer och en obeveklig
							strävan efter innovation skapar jag lättförstådda och estetiskt
							tilltalande produkter.
						</p>
						<div className="flex flex-row gap-5 items-center max-xl:justify-center">
							<a href="https://github.com/Deerhall">
								{/* <img src="/svg/github.svg" alt="github" width="28" /> */}
								<FaGithub className="opacity-80 h-8 w-auto" />
							</a>
							<a href="https://www.instagram.com/hjorthall/">
								{/* <img src="/svg/instagram.svg" alt="instagram" width="28" /> */}
								<FaInstagram className="opacity-80 h-8 w-auto" />
							</a>
							<a href="https://www.linkedin.com/in/hjorthall/">
								{/* <img src="/svg/linkedin.svg" alt="linkedin" width="28" /> */}
								<FaLinkedin className="opacity-80 h-8 w-auto" />
							</a>
							<a href="mailto:selimhjorthall@gmail.com">
								{/* <img src="/svg/mail.svg" alt="mail" width="28" /> */}
								<LuMail className="opacity-80 h-8 w-auto" />
							</a>
						</div>
					</div>
				</div>
				<BsChevronDown className="max-xl:hidden w-20 h-20 animate-pulse" />
			</section>

			{/* <div className="flex w-fit items-center m-auto gap-4 px-4 mt-8">
				<div className="w-24 bg-gray-500 h-1 rounded-full opacity-10"></div>
				<h1 className="text-xl font-black opacity-70 ">Projekt</h1>
				<div className="w-24 bg-gray-500 h-1 rounded-full opacity-10"></div>
			</div> */}

			<Project
				title="Rentbuddy"
				description="
				I samarbete med ett universitetsteam i Australien utvecklade jag, tillsammans med 
				två andra studenter, en mobilapplikation för att effektivisera processen 
				för uthyrning och delning av bostäder. Problemställningen grundade sig i Australiens bostadskris.
				Australiens universitetsteam var ansvariga för research och identifiering av användarnas behov 
				och vårt team var ansvariga för utvecklingen av en app som löser identifierade behov. 
				Appen byggdes i React Native och använde Firebase som SaaS backend.
				"
				// Mina huvudsakliga ansvarsområden inkluderade frontend-utveckling,
				// inklusive komponentutveckling, state management och UI/UX-design.
				demoUrl="https://www.figma.com/proto/H5NwAClFE98wnwmL80XQZX/Rentbuddy?node-id=0-1&scaling=contain&content-scaling=fill-screen"
				imgurl="/images/home/rentbuddy.png"
				tags={["React", "React Native", "Firebase", "Auth", "React Navigation"]}
				reversed={true}
			/>

			<Project
				title="Skolplattform"
				description="
				I samarbete med CGI och forskare vid Umeå Universitet, skapades en
				prototyp av en modern skolplattform som använder sig av en app samt ett VR gränssnitt som
				tillåter deltagande i skolan. Målet med projektet var att ta fram en lösning för att hjälpa
				ungdomar med hög skolfrånvaro. Prototypen för appen skapades i Figma och VR prototypen
				byggdes i Unity för HTC Vive Pro.
				"
				imgurl="/images/home/skolplattform-vr.png"
				readUrl="skolplattform"
				tags={[
					"Prototyp",
					"Figma",
					"Unity",
					"VR",
					"Design",
					"Research",
					"Användartester",
				]}
				githubUrl="https://github.com/Deerhall/DBT-SchoolPlatform-UnityVR-Prototype"
				demoUrl="https://www.figma.com/proto/3B8jLtZTegGHYKX9YJr5i1/Plattform-Skola?node-id=1332-3924&scaling=contain&content-scaling=fill-screen&starting-point-node-id=1332%3A5168"
				reversed={false}
			/>

			<Project
				title="Weather Haiku"
				description="
				En väderbaserad haiku-generator utvecklades med hjälp av Next.js, React, Framer Motion, 
				Typescript, Tailwind CSS och Cohere AI. Webbappen hämtar önskad väderdata (för angiven ort) 
				från OpenWeatherMap, bearbetar informationen med Cohere AI för att sedan generera en haiku 
				som presenteras i ett dynamiskt, animerat gränssnitt. 
				Målet var att skapa en ny produkt som bygger på existerand produkter.
				"
				imgurl="/images/home/weatherhaiku-umea.png"
				tags={[
					"React",
					"Next.js",
					"Framer Motion",
					"Typescript",
					"AI",
					"Open API",
				]}
				reversed={true}
			/>

			<Project
				title="Mossbollen Marimo"
				description="
				En 30-sekunders animerad film föreställande en liten mystisk figur som finner en intressant knapp i skogen.
				Filmen var slutuppgiften i kursen 3D-modellering och animation i opensource-miljö, 
				där Blender användes för att modellera alla objekt, rigga karaktären samt animera och ljussätta scenen. 
				"
				videourl="https://www.youtube.com/embed/79-w6xnj__0?si=6orhmRGc1PBJfHvg"
				tags={[
					"Blender",
					"Modelering",
					"Riggning",
					"Animation",
					"Texturering",
					"Ljussättning",
				]}
				reversed={false}
			/>

			<Project
				title="Recycle Cycle"
				description="
				Ett grupprojekt med studenter från kognitionsvetenskapsprogrammet. Vi skapade en prototyp av en mobil applikation 
				designad för att förenkla och uppmuntra hållbara avfallshanteringspraxis. 
				Genom att ta itu med vanliga hinder för återvinning, 
				såsom bristande information, tillgänglighet och motivation, strävade vi efter att bidra 
				till en mer cirkulär ekonomi. Appens fokus var att stödja hållbarhetsmål 12 (hållbar konsumtion och produktion).
				"
				imgurl="/images/home/recyclecycle.png"
				demoUrl="https://www.figma.com/proto/mj9ZznHvUni9NIAAmBHHfX/Recycle-Cycle-Designs?node-id=98-818&scaling=contain&content-scaling=fill-screen"
				// readUrl="asd"
				// githubUrl="a"
				tags={["Prototyp", "Figma", "Reasearch", "Användartester"]}
				reversed={true}
			/>

			<Project
				title="Stupid Stroll"
				description="
				Utvecklade en mobil app designad för att uppmuntra användare till korta, spontana promenader. 
				Genom att erbjuda slumpmässiga destinationer syftar appen till att 
				främja mentalt välbefinnande och skapa en känsla av upptäckarglädje. 
				Minimalt användarvänligt gränssnitt som utnyttjar enhetens kamera och GPS-funktioner. 
				"
				imgurl="/images/home/stupidstroll.png"
				tags={["Kotlin", "Java", "Sensors", "Google Maps SDK"]}
				reversed={false}
			/>

			<Project
				title="CityLoop"
				description="I nära samarbete med tre andra utvecklare byggde vi mobilspelet Cityloop från grunden. 
				Mitt fokus låg på att skapa spelvärlden, designa användargränssnittet och producera ljud och musik. 
				Tillsammans lyckades vi skapa ett roligt och engagerande spel där spelarna kämpade mot andra figtiva entreprenörer."
				// imgurl="/images/home/cityloop.png"
				videourl="https://www.youtube.com/embed/8a6LKIefUjs?si=_wg3nX0vxdOuz-mn"
				tags={["Unreal Engine", "UI", "Ljud", "Musik", "Spelvärld"]}
				reversed={true}
			/>

			<Project
				title="NESP (New Era of Sport Psychology)"
				description="
				Ansvarig för att skapa, designa och utveckla den mobila plattformen NESP. 
				Projektet involverade alla faser från tidig prototyp till färdig produkt, 
				inklusive design, användartestning, utveckling och lansering.
				Med ett litet men tight team, jobbar vi för att skapa en plattform som kan 
				stödja ambitiösa idrottare med att hantera sina mentala utmaningar på ett 
				praktiskt och engagerande sätt.
				"
				demoUrl="http://nesp.io/"
				imgurl="/images/home/nesp.png"
				tags={[
					"Flutter",
					"Dart",
					"Firebase",
					"Prototyp",
					"Design",
					"UX/UI",
					"Användartester",
				]}
				reversed={false}
			/>

			{/* <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
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
		</>
	);
}
