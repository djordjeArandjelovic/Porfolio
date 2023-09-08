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
						<div className="job">
							<p className="year">{job.year}</p>
							<div className="job-info">
								<h2 className="role">{job.role}</h2>
								<span className="company">{job.company}</span>
							</div>
							<p>{job.description}</p>
						</div>
					))}
					{/* <div className="job">
						<p className="year">2021</p>
						<div className="job-info">
							<h2 className="role">Product Manager</h2>
							<span className="company">Skuda Mill</span>
						</div>
						<p>
							Working as a product manager, making sure all customer needs are
							met through the whole software life cycle, colaborating with HR to
							hire new developers and working closly with our marketing team.
						</p>
					</div>
					<div className="job">
						<p className="year">2020-2023</p>
						<div className="job-info">
							<h2 className="role">Factoring Manager</h2>
							<span className="company">Stelle Corporation</span>
						</div>
						<p>
							Responsible for the management and implementation of factoring
							service administration in order to meet business objectives.
						</p>
					</div>
					<div className="job">
						<p className="year">2019</p>
						<div className="job-info">
							<h2 className="role">Dept Manager</h2>
							<span className="company">Stelle Corporation</span>
						</div>
						<p>
							Started as a logistics coordinator for a small size project,
							making my way up to assistant accounting manager, working on
							bigger projects and becoming factoring manager the next year.
						</p>
					</div> */}
				</div>
			</main>
			<aside>
				<h2 className="visually-hidden">My skills</h2>
				<ul className="icon-list" role="list">
					{/* {skillsData.map((skill) => (
						<li key={skill.id}>
							<Image src={skill.image} />
						</li>
					))} */}
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
