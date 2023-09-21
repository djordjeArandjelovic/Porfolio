import React from "react";
import { Button } from "@chakra-ui/button";
import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import gamingPic from "../assets/gamingArchives.jpg";
import netflex from "../assets/netflex.jpg";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
	return (
		<>
			<Box width={"90%"} margin={"auto"} height={"90vh"}>
				<Flex flexDirection={"column"}>
					<ProjectCard
						heading={"The Gaming Archives"}
						img={gamingPic}
						img_alt={"The Gaming Archives"}
						project_desc={
							"This is my first React project. It is a video game database, with a universe/space/star wars themed elements, made with the help of RAWG API. For the UI design I used Chakra-UI."
						}
						stack={"React, CSS, Chakra-UI, Firebase"}
						font={"StarWars"}
					/>
					<ProjectCard
						heading={"The Movie App"}
						img={netflex}
						img_alt={"The Movie App"}
						project_desc={
							"Made with TMDB API, this is a simple movie/tv show database, it might look like something you saw before, design wise :)"
						}
						stack={"React, Chakra-UI, Axios"}
						font={"mono"}
					/>
				</Flex>
			</Box>
		</>
	);
};

export default Projects;
