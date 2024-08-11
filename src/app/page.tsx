import Project from "@/components/Project";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

export default function Home() {
	return (
		<>
			{/* // <main className="flex min-h-screen flex-col items-center justify-between p-24 "> */}
			{/* // <main className="flex flex-col w-full p-24 items-center justify-center gap-8 "> */}
			<section className="flex flex-row w-full items-center gap-8 rounded-3xl py-24">
				<img src="/images/portrait.png" alt="portrait" width="300" />
				{/* <Image
					src="/images/portrait.png"
					alt="portrait"
					fill
					objectFit="contain"
				/> */}
				<div className="flex flex-col gap-5 w-full ">
					<h1 className="text-2xl font-semibold text-zinc-400 leading-4">
						Hej, jag heter
					</h1>
					<h1 className="text-5xl font-black text-zinc-900 leading-10 ">
						Selim Hjorthall.
					</h1>
					{/* <h1 className="text-5xl font-black text-zinc-900 max-w-96 ">
						Utvecklare och UI/UX designer.
					</h1> */}
					<h1 className="text-5xl font-black text-zinc-600 leading-10">
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

			<Project
				title="Rentbuddy"
				description="
				I samarbete med ett universitetsteam i Australien utvecklade jag tillsammans med 
				två andra studenter, en mobilapplikation utvecklad för att effektivisera processen 
				för uthyrning och delning av bostäder. Ett universitetsteam från Australien 
				hade ansvaret att förundersöka och identifiera användarnas behov, där vi fick ta över facklan och 
				utveckla en omfattande lösning. Problemet grundade sig i Australiens bostadskris.
				"
				// Mina huvudsakliga ansvarsområden inkluderade frontend-utveckling,
				// inklusive komponentutveckling, state management och UI/UX-design.
				imgurl="/images/rentbuddy.png"
				tags={["React", "React Native", "Firebase", "Auth", "React Navigation"]}
				reversed={true}
			/>

			<Project
				title="Skolplattform"
				description="
				I samarbete med CGI och forskare vid Umeå Universitet, skapades en
				prototyp av en modern skolplattform som använder sig av en app samt
				deltagande av lektioner via VR. Fokuset låg på att minska skolfrånvaron bland ungdomar.
				Prototypen för appen skapades i Figma och VR prototypen skapdes i Unity.
				"
				imgurl="/images/skolplattform-vr.png"
				// url="skolplattform"
				tags={[
					"Prototyp",
					"Figma",
					"Unity",
					"VR",
					"Design",
					"Research",
					"Användartester",
				]}
				reversed={false}
			/>

			<Project
				title="Weather Haiku"
				description="
				Utvecklade en väderbaserad haiku-generator med 
				hjälp av Next.js, React, Framer Motion, Typescript, Tailwind CSS och Cohere AI. 
				Webbappen hämtar önskad väderdata (ort) från OpenWeatherMap, bearbetar den med Cohere AI 
				för att generera haikuer och presenterar resultaten i ett dynamiskt, animerat gränssnitt.
				"
				imgurl="/images/weatherhaiku-umea.png"
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
				Tillsammans med en grupp andra studenter skapades en prototyp av en mobil applikation 
				designad för att förenkla och uppmuntra hållbara avfallshanteringspraxis. 
				Genom att ta itu med vanliga hinder för återvinning, 
				såsom bristande information, tillgänglighet och motivation, strävade vi efter att bidra 
				till en mer cirkulär ekonomi. Appens fokus var att stödja hållbarhetsmål 12, 
				hållbar konsumtion och produktion.
				"
				imgurl="/images/recyclecycle.png"
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
				imgurl="/images/stupidstroll.png"
				tags={["Kotlin", "Java", "Sensors", "Google Maps SDK"]}
				reversed={false}
			/>

			<Project
				title="CityLoop"
				description="I nära samarbete med tre andra utvecklare byggde vi mobilspelet Cityloop från grunden. 
				Mitt fokus låg på att skapa spelvärlden, designa användargränssnittet och producera ljud och musik. 
				Tillsammans lyckades vi skapa ett roligt och engagerande spel där spelarna kämpade mot andra figtiva entreprenörer."
				// imgurl="/images/cityloop.png"
				videourl="https://www.youtube.com/embed/8a6LKIefUjs?si=_wg3nX0vxdOuz-mn"
				tags={["Unreal Engine", "UI", "Ljud", "Musik", "Spelvärld"]}
				reversed={true}
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
