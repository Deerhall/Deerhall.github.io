import Link from "next/link";
import React from "react";
import { FaGithub, FaPlay } from "react-icons/fa";
import { MotionDiv } from "./MotionDiv";

export default function Project(props: {
	title: string;
	description?: string;
	readUrl?: string;
	demoUrl?: string;
	githubUrl?: string;
	imgurl?: string;
	videourl?: string;
	tags?: string[];
	reversed?: boolean;
}) {
	return (
		<MotionDiv
			className={
				"flex max-xl:flex-col max-xl:gap-4 gap-10 w-full items-center justify-between py-20 " +
				(props.reversed ? "flex-row-reverse" : "flex-row")
			}
			layout
			initial={{ opacity: 0, y: 100 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.1 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
		>
			<div
				className={
					"flex h-full w-2/5 max-xl:w-full max-xl:px-4 max-xl:justify-center items-center " +
					(props.reversed ? "justify-end" : "justify-start")
				}
				style={{ maxHeight: "500px" }}
			>
				{props.imgurl ? (
					<img
						src={props.imgurl}
						alt="project image"
						// height="400"
						className="max-w-full max-h-full"
					/>
				) : null}
				{props.videourl ? (
					<iframe
						src={props.videourl}
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen={true}
						className="h-fit w-full rounded-2xl"
						style={{ aspectRatio: "16/9" }}
					/>
				) : null}
			</div>
			<div className="flex flex-col w-3/5 max-xl:w-full max-xl:px-4 gap-6 items-start">
				{props.title ? (
					<h3 className="text-4xl  font-bold font-sans ">{props.title}</h3>
				) : null}

				{props.description ? (
					<p className="font-sans opacity-80">{props.description}</p>
				) : null}

				{props.tags ? (
					<div className="flex flex-wrap gap-2">
						{props.tags.map((tag) => (
							<div
								key={tag}
								className="opacity-50 bg-amber-300 rounded-full dark:opacity-100 dark:bg-zinc-600"
							>
								<p className="px-3 py-1 text-nowrap text-sm font-medium font-mono dark:text-white">
									{tag}
								</p>
							</div>
						))}
					</div>
				) : null}

				{props.readUrl || props.demoUrl || props.githubUrl ? (
					<div className="flex gap-4">
						{props.readUrl ? (
							<MotionDiv whileHover={{ scale: 1.1 }}>
								<Link href={`/projekt/${props.readUrl}`}>
									<button className="bg-amber-300 dark:text-zinc-900 items-center justify-center px-16 h-12 rounded-xl cursor-pointer font-medium text-lg transition ease-out hover:ring-2 ring-gray-500 dark:ring-gray-50">
										<p className="opacity-80">Read</p>
									</button>
								</Link>
							</MotionDiv>
						) : null}

						{props.demoUrl ? (
							<MotionDiv whileHover={{ scale: 1.2 }}>
								<a
									href={props.demoUrl}
									target="_blank" // Open in new tab
									className="flex items-center justify-center bg-amber-300 dark:text-zinc-900 h-12 w-12 pl-1 rounded-full cursor-pointer font-medium text-lg transition ease-out hover:ring-2 ring-gray-500 dark:ring-gray-50"
								>
									<FaPlay className="h-6 opacity-80 " />
								</a>
							</MotionDiv>
						) : null}

						{props.githubUrl ? (
							<MotionDiv whileHover={{ scale: 1.2 }}>
								<a
									href={props.githubUrl}
									target="_blank"
									className="flex items-center justify-center bg-amber-300 dark:text-zinc-900  h-12 w-12 rounded-full  cursor-pointer font-medium text-lg transition ease-out hover:ring-2 ring-gray-500 dark:ring-gray-50"
								>
									<FaGithub className="h-6 w-6 opacity-80 " />
								</a>
							</MotionDiv>
						) : null}
					</div>
				) : null}
			</div>
		</MotionDiv>
	);
}
