import Link from "next/link";
import React from "react";
import { FaGithub, FaPlay } from "react-icons/fa";
import { MotionDiv } from "./MotionDiv";

export default function TextBlock(props: {
	title: string;
	paragraphs?: string[];
}) {
	// const container = {
	// 	hidden: { opacity: 0 },
	// 	show: {
	// 		opacity: 1,
	// 		transition: {
	// 			staggerChildren: 0.5,
	// 		},
	// 	},
	// };

	// const listItem = {
	// 	hidden: { opacity: 0, y: 100 },
	// 	show: { opacity: 1, y: 0 },
	// };

	return (
		<MotionDiv
			className={
				"flex flex-col gap-8  w-full items-center justify-between py-8"
			}
			// initial={{ opacity: 0, y: 100 }}
			// whileInView={{ opacity: 1, y: 0 }}
			variants={{
				hidden: { opacity: 0 },
				show: { opacity: 1 },
			}}
			initial="hidden"
			animate="show"
			// viewport={{ once: true, amount: 0.5 }}
			transition={{
				duration: 0.1,
				ease: "easeOut",
				// when: "beforeChildren",
				staggerChildren: 0.3,
			}}
		>
			<h1 className="text-4xl font-bold font-sans">{props.title}</h1>
			{props.paragraphs
				? props.paragraphs.map((paragraph, i) => {
						return (
							<MotionDiv
								key={i}
								variants={{
									hidden: { opacity: 0, y: -20 },
									show: { opacity: 1, y: 0 },
								}}
								transition={{ duration: 1.2, ease: "easeOut" }}
							>
								<p className="opacity-80 max-w-4xl">{paragraph}</p>
							</MotionDiv>
						);
				  })
				: null}
		</MotionDiv>
	);
}
