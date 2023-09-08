import React from "react";
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuItemOption,
	MenuGroup,
	MenuOptionGroup,
	MenuDivider,
	IconButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

const HamburgerMenu = () => {
	return (
		<Menu>
			<MenuButton
				as={IconButton}
				aria-label="Options"
				icon={<HamburgerIcon />}
				variant="outline"
			/>
			<MenuList>
				<MenuItem>
					<Link to="/">Home</Link>
				</MenuItem>
				<MenuItem>
					<Link to="/resume">Resume</Link>
				</MenuItem>
				<MenuItem>
					<Link to="/projects">Projects</Link>
				</MenuItem>
				<MenuItem>
					<Link to="/funfacts">Fun Facts</Link>
				</MenuItem>
				<MenuItem>
					<Link to="/contact">Contact</Link>
				</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default HamburgerMenu;
