import { MotionDiv } from "@/components/MotionDiv";
import Project from "@/components/Project";
import TextBlock from "@/components/TextBlock";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

export default function Home() {
	return (
		<>
			<section className="flex flex-col w-full items-center justify-center">
				<img
					src="/images/projekt/skolplattform/skolplattform_xl.png"
					alt="project image"
					className="w-full max-w-2xl max-xl:w-3/4 rounded-3xl"
				/>
				<TextBlock
					title="Vägen tillbaka till klassrummet
"
					paragraphs={[
						"Problemet med problematisk frånvaro i skolan har ökat även före COVID-19-pandemin, med begränsad tillförlitlig statistik på grund av underrapportering och andra bidragande faktorer. För att ta itu med detta akuta problem initierades ett projekt av CGI och genomfördes vid Umeå universitet. Projektet syftar till att utveckla ett virtual reality (VR)-koncept som minskar problematisk frånvaro och skapar en positiv och säker virtuell klassrumsmiljö för frånvarande elever.",
						"Projektets mål var att skapa en digital plattform som stöder elever med problematisk frånvaro genom att erbjuda en alternativ miljö som främjar närvarokänsla och underlättar återgången till fysiska klassrum. Projektet följde en strukturerad process med design thinking och agila metoder för att säkerställa effektivitet, kreativitet och användarcentrerad design.",
						"De utvecklade prototyperna visar konceptets genomförbarhet och potential, med fokus på att främja engagemang, struktur, underlätta återgång till fysiska klassrum och i slutändan minska problematisk frånvaro. VR-systemet ger en live-stream från en 360-graderskamera, vilket gör det möjligt för elever att se klassrummet i realtid och interagera med lärare och kamrater via röstkanaler och handuppräckning. Den kompletterande surfplatteappen fungerar som en följeslagare och erbjuder funktionalitet för både distans- och närvarande inlärning, inklusive tillgång till schema, uppgifter, kommunikation med skolpersonal och en loggbok.",
						"Systemet syftar till att erbjuda en omfattande och anpassningsbar lärupplevelse för elever, där virtuella och fysiska element smälter samman sömlöst. Kommunikationsfunktioner, målsättning, belöningar och feedbackmekanismer är integrerade för att underlätta interaktion mellan elev och lärare samt motivation. Systemets modularitet möjliggör potentiell integration med befintliga system som Google Classroom eller Teams.",
						"Användartester visade lovande resultat och lyfte fram vikten av struktur, säkerhet och anpassning för elever med problematisk frånvaro. Framtida utveckling bör överväga AI-anpassning, ägarskap av säkra utrymmen och effekten av gamification. Dessutom är noggrann hantering av känsliga data avgörande vid utveckling av system för barn.",
						"Sammanfattningsvis visar projektets konceptuella lösning med VR-teknik potential för att hantera problematisk frånvaro i skolan och ge en positiv virtuell klassrumsupplevelse för frånvarande elever. Ytterligare förfining, användartestning och potentiell implementering i skolor rekommenderas för att minska problemet med problematisk frånvaro, särskilt i högre årskurser.",
					]}
				/>
				<MotionDiv
					whileHover={{ scale: 1.1 }}
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.1 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<a href="/files/projekt/Vägen tillbaka till klassrummet.pdf">
						<button className="bg-amber-300 dark:text-zinc-900 items-center justify-center px-16 h-12 rounded-xl cursor-pointer font-medium text-lg transition ease-out hover:ring-2 ring-gray-500 dark:ring-gray-50">
							<p className="opacity-80">Rapport (PDF)</p>
						</button>
					</a>
				</MotionDiv>
			</section>
		</>
	);
}
