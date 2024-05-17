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

import { IoGameController } from "react-icons/io5";
import {BentoGridDemo} from "@/components/ui/project-bento";
import { BsRocketTakeoffFill } from "react-icons/bs";
import { BsFillShieldLockFill } from "react-icons/bs";
import { IoAccessibility } from "react-icons/io5";

import {Code} from "@nextui-org/react";


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
                        typewriter.typeString(` <span class='ml-10' style="
                background:linear-gradient(45deg, #1FD1F9, #B621FE);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                "
                >A Full Stack Dev</span>`)
                            .pauseFor(2500)
                            .deleteAll()
                        typewriter.typeString(`<span class='ml-10' style="
                background:linear-gradient(45deg, #1FD1F9, #B621FE);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                "
                >an IT-Student</span>`)
                            .pauseFor(2500)
                            .deleteAll()
                        typewriter.typeString(`<span class='ml-10' style="
                background:linear-gradient(45deg, #1FD1F9, #B621FE);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                "
                >@Lorenzo
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
                            <div className="timeline-start lg:text-xl md:text-end mb-10">
                                <time className="font-mono italic">June 2023</time>
                                <div className="text-lg font-black justify-around">Swisshub-Community Developer Team</div>
                                In June 2023, I started developing on the largest Swiss online Discord server. To this day, I program Discord bot solutions for the entire community and staff team. It's been truly an experience. After the former leading developer left and took over the codebase, I had to step in and take on that role. It definitely wasn&apos;t easy; however, I learned a lot, and now I manage the repositories and deployments.                            </div>
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
                                BaselHack was one of the first events I attended in the tech field, and looking back, I showed up with barely any experience. I got accepted into a great team called ”H-A-Y” and got the chance to meet amazing developers with whom I'd spend the next two days building a full-stack application. Baselhack gave me a lot of memories, which I enjoy looking back on from time to time.                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <BsFillShieldLockFill color={"blue"} size={28} />
                            </div>
                            <div className="timeline-start lg:text-xl md:text-end mb-10">
                                <time className="font-mono italic">February 2024</time>
                                <div className="text-lg font-black">Cyber Security Events</div>
                                As a cyber security enthusiast, I am often attending conventions and events to meet like-minded people and learn new things. Recently, I attended the Swiss Hacking Challenge qualifiers for 2024. This was my first CTF, and sadly, I wasn&apos;t able to complete that much. However, I still fought for some points and, in the end, made quite a few new connections in the Swiss-Hacking-Challenge Discord                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <IoAccessibility size={28} />
                            </div>
                            <div className="timeline-end lg:text-xl mb-10">
                                <time className="font-mono italic">April 2024</time>
                                <div className="text-lg font-black">Accessibility Hack</div>
                                The latest event I attended was the accessibility hack 2024 in Zurich. With fellow developers from my school, we went to find and develop new innovative solutions for visually impaired and blind people. It was a very interesting event, and I learned a lot about how people with disabilities use technology that we take for granted and what challenges they face. In the end, we developed a new concept that should assist such people with analyzing complex charts on webpages, be able to summarize, and make the charts interactive and accessible. Sadly, due to a lack of time, we weren't able to implement it.                            </div>
                            <hr />
                        </li>
                        
                    </ul>
                    </div>
                    <div className={"h-24"}></div>
                </TracingBeam>


                <div id={"Projects"} className={"text-left mt-24 mx-[8%] lg:text-[6em] md:text-[4em] xl:text-[8rem] sm:text-[3em] xs:text-[2em] font-semibold"}>
                    &lt; Projects / &gt;
                </div>
            <BentoGridDemo />

            <div className="h-96 flex items-center justify-center content-center"><Code className={"bg-zinc-900 justify-center mx-[5%] flex items-center sm:text-2xl xs:text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl 3xl:text-7xl content-center h-48 text-wrap w-[96%] text-center"}>&ldquo;Take that Risk and go switch up the Game&rdquo;</Code></div>

                <Footer></Footer>
            </div>

        </NextUIProvider>
    )
}