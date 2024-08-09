import React from "react";

export default function Project(props: { title: string; url?: string }) {
	return (
		<div className="flex flex-col gap-4 w-full bg-teal-100 items-center justify-center">
			<h1>{props.title}</h1>
			<p className="bg-red-300 w-fit rounded-lg px-4">Test my luck</p>

			{props.url ? (
				<p className="bg-red-300 w-fit rounded-lg px-4">{props.url}</p>
			) : null}
		</div>
	);
}
