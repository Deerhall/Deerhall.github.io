import Link from "next/link";
import React from "react";

export default function Project(props: {
	title: string;
	description?: string;
	url?: string;
	imgurl?: string;
	videourl?: string;
	tags?: string[];
	reversed?: boolean;
}) {
	return (
		<div
			className={
				"flex  max-xl:flex-col max-xl:gap-4 gap-10 w-full items-center justify-between py-20 " +
				(props.reversed ? "flex-row-reverse" : "flex-row")
			}
		>
			<div
				className={
					"flex h-full  w-2/5 items-center " +
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
			<div className="flex flex-col w-3/5 gap-6 items-start justify-center ">
				{props.title ? (
					<h3 className="text-4xl text-zinc-900 font-bold font-sans">
						{props.title}
					</h3>
				) : null}

				{props.description ? (
					<p className="text-gray-700 font-sans max-w-">{props.description}</p>
				) : null}

				{props.tags ? (
					<div className="flex flex-row gap-2">
						{props.tags.map((tag) => (
							<p
								key={tag}
								className="bg-amber-200 text-stone-600 rounded-full px-3 py-1 text-nowrap text-sm font-medium font-mono"
							>
								{tag}
							</p>
						))}
					</div>
				) : null}

				{props.url ? (
					// <p className="bg-red-300 w-fit rounded-lg px-4">{props.url}</p>
					<Link href={`/projekt/${props.url}`}>
						<button className="bg-black text-white px-8 py-2 rounded-full cursor-pointer font-medium text-lg">
							See more
						</button>
					</Link>
				) : null}
			</div>
		</div>
	);
}
