import React from "react";
import { jobsData } from "../data";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import scss from "../assets/scss.svg";
import react from "../assets/react.svg";
import { Image } from "@chakra-ui/image";

const Resume = () => {
	return (
		<div className="main-grid">
			<main>
				<p className="eyebrow">Skills & Experience</p>
				<h1 className="page-title">My Resume</h1>
				<p className="intro">
					I am a front end developer with product manager experience and passion
					for learning new techonologies.
				</p>
				<div className="job-experience">
					{jobsData.map((job) => (
						<div className="job" key={job.id}>
							<p className="year">{job.years}</p>
							<div className="job-info">
								<h2 className="role">{job.role}</h2>
								<span className="company">{job.company}</span>
							</div>
							<p>{job.description}</p>
						</div>
					))}
				</div>
			</main>
			<aside>
				<h2 className="visually-hidden">My skills</h2>
				<ul className="icon-list" role="list">
					<li>
						<p className="visually-hidden">html</p>
						<Image src={html} />
					</li>
					<li>
						<p className="visually-hidden">css</p>
						<img src={css} alt="" />
					</li>
					<li>
						<p className="visually-hidden">scss</p>
						<img src={scss} alt="" />
					</li>
					<li>
						<p className="visually-hidden">javascript</p>
						<img src={js} alt="" />
					</li>
					<li>
						<p className="visually-hidden">javascript</p>
						<img src={react} alt="" />
					</li>
				</ul>
			</aside>
		</div>
	);
};

export default Resume;
