import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	Link,
	Text,
} from "@chakra-ui/react";
import React from "react";
import img from "../assets/cover4.svg";
import helloImg from "../assets/hello.png";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";

const Home = () => {
	return (
		<>
			<Flex
				align={"center"}
				justify={"space-between"}
				height={"90vh"}
				paddingX={14}
				paddingY={{ base: "20%", md: 0, lg: 0 }}
				direction={{ base: "column", md: "row", lg: "row" }}
				gap={{ base: "10rem", md: 2, lg: 0 }}
			>
				<Box width={"50%"}>
					<Heading className="name" as={"h1"} marginBottom={5}>
						Djordje Arandjelo<span>vic</span>
					</Heading>
					<Heading className="position" as={"h3"} fontSize={"md"}>
						Frontend Developer
					</Heading>
					<Text className="heroText">
						I am a web developer, working on building (and occasinally
						designing) digital experiences. Currently my main focus is React and
						building web softwares. I am working as a Product Owner at the
						moment in a software development company, but I am looking to branch
						out.
					</Text>
					<Flex gap={10} className="btnBox">
						<Button className="btn btn-cv" width={"10rem"}>
							Download CV
						</Button>
						<Button className="btn btn-talk" width={"10rem"}>
							Let's Talk
						</Button>
					</Flex>
					<Flex gap={5} className="contact">
						<Link
							href="https://www.linkedin.com/in/djordje-arandjelovic/"
							target="_blank"
						>
							<BiLogoLinkedin />
						</Link>
						<Link href="https://github.com/djordjeArandjelovic" target="_blank">
							<FaGithub />
						</Link>
					</Flex>
				</Box>
				<Box>
					<Image src={img} fallbackSrc="https://via.placeholder.com/400" />
				</Box>
			</Flex>
		</>
	);
};

export default Home;
