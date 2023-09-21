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
		// <Box width={"90%"} margin={"auto"} height={"90vh"}>
		// 	<Card
		// 		direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
		// 		overflow="hidden"
		// 		variant="outline"
		// 		boxShadow={"2px 1px 8px rgba(0, 0, 0, 0.5)"}
		// 		align={"center"}
		// 		width={"80%"}
		// 		margin={"2rem auto"}
		// 		_hover={{
		// 			boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
		// 		}}
		// 	>
		// 		<Image
		// 			objectFit="contain"
		// 			maxW={{ base: "100%", sm: "400px" }}
		// 			src={gamingPic}
		// 			alt="The Gaming Archives"
		// 			padding={3}
		// 		/>

		// 		<Stack>
		// 			<CardBody>
		// 				<Image className="ucImg" src={"./src/assets/uc6.jpg"} />
		// 				<Heading
		// 					fontFamily={"StarWars"}
		// 					fontWeight={"light"}
		// 					letterSpacing={"1px"}
		// 					size="lg"
		// 				>
		// 					The Gaming Archives
		// 				</Heading>

		// 				<Text py="2">
		// 					This is my first React project. It is a video game database, with
		// 					a universe/space/star wars themed elements, made with the help of
		// 					RAWG API. For the UI design I used Chakra-UI.
		// 				</Text>
		// 			</CardBody>

		// 			<CardFooter my={"auto"}>
		// 				<Button
		// 					variant="solid"
		// 					background={"yellow.400"}
		// 					colorScheme={"yellow"}
		// 				>
		// 					Take a look
		// 				</Button>
		// 				<Text my={"auto"} marginLeft={"auto"} marginRight={14}>
		// 					Stack: React, CSS, Chakra-UI
		// 				</Text>
		// 			</CardFooter>
		// 		</Stack>
		// 	</Card>
		// </Box>
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
					/>
					<ProjectCard
						heading={"The Movie App"}
						img={netflex}
						img_alt={"The Movie App"}
						project_desc={
							"Made with TMDB API, this is a simple movie/tv show database, it might look like something you saw before, design wise :)"
						}
						stack={"React, Chakra-UI, Axios"}
					/>
				</Flex>
			</Box>
		</>
	);
};

export default Projects;
