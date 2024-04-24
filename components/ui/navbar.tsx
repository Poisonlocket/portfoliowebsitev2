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
        <Navbar className={"w-full"}  onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand as={Link} href="/">

                    <svg  version="1.1"  viewBox="0 0 800 400"><path d="M288.340828591932 98.65473790874398C276.2332058095427 131.39016449362353 212.4066016021859 264.4245476316444 215.69509189759606 295.0672974180213C218.9835821930062 325.7100472043983 264.1255830271533 316.1435239703488 308.07177036439293 282.5112366270057C352.0179577016325 248.8789492836626 458.14650791322106 92.9746180763872 479.37221592103356 93.27357335796273C500.59792392884606 93.57252863953826 422.86996779277837 258.5949527016313 435.42601841126793 284.3049683164588C447.9820690297575 310.0149839312863 544.6935711049529 264.8729792824419 554.7085196319711 247.53366704692758C564.7234681589892 230.19435481141326 493.4230276886117 204.03591136048553 495.5157095733773 180.2690949033729C497.60839145814293 156.50227844626028 555.3064607127002 117.48882273743864 567.2646109405648 104.9327683042518 " fill="none" strokeWidth="25" stroke="url(&quot;#SvgjsLinearGradient1000&quot;)" strokeLinecap="round" strokeDasharray="0 0" transform="matrix(0.5133420832795047,0,0,0.5133420832795047,190.4869279938312,99.0031035836943)"></path><defs><linearGradient id="SvgjsLinearGradient1000"><stop stopColor="hsl(0, 0%, 100%)" offset="0"></stop><stop stopColor="hsl(0, 0%, 100%)" offset="1"></stop></linearGradient></defs></svg>
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
                        <Link  href={links[index]}>
                            <div className="w-full">{item}</div>
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
