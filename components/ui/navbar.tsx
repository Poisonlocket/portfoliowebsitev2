import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo";
import { FaGithub } from "react-icons/fa";
import Head from 'next/head'
export default function Navbarprod() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Home",
        "Techstack",
        "Engagement",
        "Projects"
    ];
    const links = [
        "#Navwrapper",
        "#Techstack",
        "#Engagement",
        "#Projects"


    ]

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <Navbar  onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand as={Link} href="/">
                    <AcmeLogo />
                    <p className="font-bold text-inherit" id={"Top"}>Name Lastname</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#Techstack">
                        Techstack
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#Engagement" aria-current="page">
                        Engagement
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#Projects">
                        Projects
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="primary" href="https://github.com/Poisonlocket" className={" data-[hover=true]:bg-purple-600 "} variant="flat">
                        <FaGithub size={24} />
                        Github
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link  href={links[index]} passHref>
                            <div className="w-full">{item}</div>
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
