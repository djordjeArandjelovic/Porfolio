import React from "react";
import {
	Box,
	Flex,
	Avatar,
	Text,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorModeValue,
	Stack,
	useColorMode,
	Center,
	Show,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode("dark");
	// const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Box
				bg={useColorModeValue("gray.100", "gray.900")}
				px={10}
				position={"absolute"}
				top="0"
				left="0"
				width={"100%"}
			>
				<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
					<Box>
						<Text className="logo">Djordje.</Text>
					</Box>

					<Flex alignItems={"center"}>
						<Show above="md">
							<Box marginRight={10} display={"flex"} gap={3}>
								<Link to={"/"}>Home</Link>
								<Link to={"/resume"}>Resume</Link>
								<Link to={"/projects"}>Projects</Link>
								<Link to={"/funfacts"}>Fun Facts</Link>
								<Link to={"/contact"}>Contact</Link>
							</Box>
						</Show>

						{/* <Stack direction={"row"} spacing={7}>
							<Button onClick={toggleColorMode}>
								{colorMode === "light" ? <MoonIcon /> : <SunIcon />}
							</Button>

							<Menu marginRight="10px">
								<MenuButton
									as={Button}
									rounded={"full"}
									variant={"link"}
									cursor={"pointer"}
									minW={0}
								>
									<Avatar
										size={"sm"}
										src={"https://avatars.dicebear.com/api/male/username.svg"}
									/>
								</MenuButton>
								<MenuList alignItems={"center"}>
									<br />
									<Center>
										<Avatar
											size={"2xl"}
											src={"https://avatars.dicebear.com/api/male/username.svg"}
										/>
									</Center>
									<br />
									<Center>
										<p>Username</p>
									</Center>
									<br />
									<MenuDivider />
									<MenuItem>Your Servers</MenuItem>
									<MenuItem>Account Settings</MenuItem>
									<MenuItem>Logout</MenuItem>
								</MenuList>
							</Menu>
						</Stack> */}
						<Show below="md">
							<HamburgerMenu />
						</Show>
					</Flex>
				</Flex>
			</Box>
		</>
	);
};

export default Navbar;
