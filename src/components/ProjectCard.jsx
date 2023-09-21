import React from "react";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Card, CardBody, CardFooter } from "@chakra-ui/card";

const ProjectCard = ({ heading, img, img_alt, project_desc, stack, font }) => {
	return (
		<Card
			direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
			overflow="hidden"
			variant="outline"
			boxShadow={"2px 1px 8px rgba(0, 0, 0, 0.5)"}
			align={"center"}
			width={"80%"}
			margin={"2rem auto"}
			_hover={{
				boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
			}}
		>
			<Image
				objectFit="contain"
				maxW={{ base: "100%", sm: "400px" }}
				src={img}
				alt={img_alt}
				padding={3}
			/>

			<Stack>
				<CardBody>
					<Image className="ucImg" src={"./src/assets/uc6.jpg"} />
					<Heading
						fontFamily={font}
						fontWeight={"light"}
						letterSpacing={"1px"}
						size="lg"
					>
						{heading}
					</Heading>

					<Text py="2">{project_desc}</Text>
				</CardBody>

				<CardFooter my={"auto"}>
					<Button
						variant="solid"
						background={"yellow.400"}
						colorScheme={"yellow"}
					>
						Take a look
					</Button>
					<Text my={"auto"} marginLeft={"auto"} marginRight={14}>
						Stack: {stack}
					</Text>
				</CardFooter>
			</Stack>
		</Card>
	);
};

export default ProjectCard;
