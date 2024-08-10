import React from "react";

export default function Project(props: {
	title: string;
	description?: string;
	url?: string;
	imgurl?: string;
	reversed?: boolean;
}) {
	return (
		<div
			className={
				"flex w-full items-center justify-center gap-20 bg-green-100 " +
				(props.reversed ? "flex-row-reverse" : "flex-row")
			}
		>
			{props.imgurl ? (
				<div className="flex w-1/3 h-full bg-red-500 justify-end">
					<img
						src={props.imgurl}
						alt="project image"
						// height="400"
						className="max-w-lg"
					/>
				</div>
			) : null}
			<div className="flex flex-col gap-4 bg-purple-100 items-start justify-center">
				{props.title ? (
					<h3 className="text-4xl font-normal text-zinc-900 ">{props.title}</h3>
				) : null}
				{props.description ? (
					<p className="text-gray-700 font-sans max-w-screen-md">
						{props.description}
					</p>
				) : null}
				{props.url ? (
					// <p className="bg-red-300 w-fit rounded-lg px-4">{props.url}</p>
					<button className="bg-black text-white px-8 py-2 rounded-full cursor-pointer font-medium text-lg">
						See more
					</button>
				) : null}
			</div>
		</div>
	);
}
