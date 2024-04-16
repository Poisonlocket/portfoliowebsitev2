"use client"



import Typewriter from 'typewriter-effect';
import React, {Fragment} from 'react'

import {NextUIProvider} from "@nextui-org/react";


import {CanvasRevealFood} from "@/components/ui/reveal_versions/canvas-reveal-food";
import {CanvasRevealSecurity} from "@/components/ui/reveal_versions/canvas-reveal-security";
import {CanvasRevealCoding} from "@/components/ui/reveal_versions/canvas-reveal-it";
import "./globals.css"
import {CardHoverEffectDemo} from "@/components/ui/card-hover-effect";

import {TracingBeam} from "@/components/ui/tracing-beam";
import {WavyBackground} from "@/components/ui/wavy-background";
import Navbarprod from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Home from "@/app/head";
import { IoGameController } from "react-icons/io5";
import {BentoGridDemo} from "@/components/ui/project-bento";
import { BsRocketTakeoffFill } from "react-icons/bs";
import { BsFillShieldLockFill } from "react-icons/bs";
import { IoAccessibility } from "react-icons/io5";



export default function page() {
    return(

        <NextUIProvider>
            <div className=" min-h-full scroll-smooth bg-black">
            <div id={"Navwrapper"}></div>
            <Navbarprod></Navbarprod>


            <WavyBackground className={"overflow-x-hidden"} >
                <div className="overflow-x-hidden mx-[8%]">
                <div className="lg:text-[16em] md:text-[12em] sm:text-[8em] xs:text-[4em] font-semibold">
                    Hey
                </div>

                <div className="lg:text-[8em]  md:text-[4em] sm:text-[3em] xs:text-[2em] flex HoverEffect">
                    I&apos;m <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString(` <span style="
                background:linear-gradient(45deg, #1FD1F9, #B621FE);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                "
                >‎ A Full Stack Dev</span>`)
                            .pauseFor(2500)
                            .deleteAll()
                        typewriter.typeString(`<span style="
                background:linear-gradient(45deg, #1FD1F9, #B621FE);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                "
                >‎ an IT-Student</span>`)
                            .pauseFor(2500)
                            .deleteAll()
                        typewriter.typeString(`<span style="
                background:linear-gradient(45deg, #1FD1F9, #B621FE);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                "
                >‎ @Tuxtrail
                </span>`)
                            .start();
                    }}
                />
                </div>
                </div>
            </WavyBackground>

            <div className="grid mx-[4%] mt-24 lg:grid-cols-3 md:grid-cols-2">
                <CanvasRevealSecurity></CanvasRevealSecurity>
                <CanvasRevealCoding></CanvasRevealCoding>
                <CanvasRevealFood></CanvasRevealFood>

            </div>
                <div id={"Techstack"} className={"text-left mx-[8%] mt-24 lg:text-[8em] md:text-[6em] sm:text-[4em] xs:text-[2em] font-semibold"}>
                    &lt; My Stack / &gt;
                </div>
                <CardHoverEffectDemo>

                </CardHoverEffectDemo>

                <div id={"Engagement"} className={"text-left mt-24 mx-[8%] lg:text-[6em] md:text-[4em] xl:text-[8rem] sm:text-[3em] xs:text-[2em] font-semibold"}>
                    &lt; Engagement / &gt;
                </div>
                <TracingBeam >
                    <div className={" lg:mx-0 md:mx-[8%] xs:mx-[12%]"}>
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                        <li>
                            <div className="timeline-middle">
                                <IoGameController size={28}  color={"red"}/>
                            </div>
                            <div className="timeline-start md:text-end mb-10">
                                <time className="font-mono italic">June 2023</time>
                                <div className="text-lg font-black justify-around">Swisshub-Community Developer Team</div>
                                The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse.
                            </div>
                            <hr/>
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <BsRocketTakeoffFill color={"yellow"} size={28} />
                            </div>
                            <div className="timeline-end lg:text-xl mb-10">
                                <time className="font-mono italic">September 2023</time>
                                <div className="text-lg font-black">Baselhack</div>
                                iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has been the primary part of Apple's consumer desktop offerings since its debut in August 1998, and has evolved through seven distinct forms
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <BsFillShieldLockFill color={"blue"} size={28} />
                            </div>
                            <div className="timeline-start md:text-end mb-10">
                                <time className="font-mono italic">February 2024</time>
                                <div className="text-lg font-black">Cyber Security Events</div>
                                The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple Inc. The first version was released on October 23, 2001, about 8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450 million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At over 20 years, the iPod brand is the oldest to be discontinued by Apple
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <IoAccessibility size={28} />
                            </div>
                            <div className="timeline-end mb-10">
                                <time className="font-mono italic">April 2024</time>
                                <div className="text-lg font-black">Accessibility Hack</div>
                                iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone accounts for 15.6% of global smartphone market share
                            </div>
                            <hr />
                        </li>
                        
                    </ul>
                    </div>
                </TracingBeam>


                <div id={"Projects"} className={"text-left mt-24 mx-[8%] lg:text-[6em] md:text-[4em] xl:text-[8rem] sm:text-[3em] xs:text-[2em] font-semibold"}>
                    &lt; Projects / &gt;
                </div>
            <BentoGridDemo />

            <div className="h-96"></div>

                <Footer></Footer>
            </div>

        </NextUIProvider>
    )
}