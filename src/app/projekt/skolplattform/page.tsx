import Project from "@/components/Project";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

export default function Home() {
	return (
		<>
			<section className="flex flex-row w-full items-center justify-center gap-8 rounded-3xl overflow-hidden p-8">
				<img src="/images/developer.gif" alt="portrait" width="300" />
			</section>
		</>
	);
}
