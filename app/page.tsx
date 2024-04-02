"use client"
import Typewriter from 'typewriter-effect';
import React, {Fragment} from 'react'

import {NextUIProvider} from "@nextui-org/react";


import {CanvasRevealFood} from "@/components/ui/reveal_versions/canvas-reveal-food";
import {CanvasRevealSecurity} from "@/components/ui/reveal_versions/canvas-reveal-security";
import {CanvasRevealCoding} from "@/components/ui/reveal_versions/canvas-reveal-it";
import "./globals.css"
import {CardHoverEffectDemo} from "@/components/ui/card-hover-effect";
import {LayoutGrid, LayoutGridDemo} from "@/components/ui/layout-grid"
import {TracingBeam} from "@/components/ui/tracing-beam";
import {WavyBackground} from "@/components/ui/wavy-background";
import Navbarprod from "@/components/ui/navbar";



export default function page() {
    return (
        <NextUIProvider>
        <div className="min-h-full bg-black">
            <Navbarprod></Navbarprod>

            <WavyBackground>
                <div className="mx-[8%]">
                <div className="lg:text-[16em] md:text-[12em] sm:text-[8em] xs:text-[4em] font-semibold">
                    Hey
                </div>

                <div className="lg:text-[8em]  md:text-[4em] sm:text-[3em] xs:text-[2em] flex HoverEffect 3xl:mt-96  lg:mt-[1em]">
                    I&apos;m <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString(` <span style="
                background:linear-gradient(45deg, #1FD1F9, #B621FE);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                "
                >‎ A Full Stack Developer</span>`)
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
                >‎ @Lorenzo</span>`)
                            .start();
                    }}
                />
                </div>
                </div>
            </WavyBackground>

            <div className="grid mx-[4%] lg:grid-cols-3 md:grid-cols-2">
                <CanvasRevealSecurity></CanvasRevealSecurity>
                <CanvasRevealCoding></CanvasRevealCoding>
                <CanvasRevealFood></CanvasRevealFood>

            </div>
                <div className={"text-left mx-[8%] lg:text-[8em] md:text-[6em] sm:text-[4em] xs:text-[2em] font-semibold"}>
                    &lt; My Stack / &gt;
                </div>
                <CardHoverEffectDemo>

                </CardHoverEffectDemo>
                <LayoutGridDemo />
                <div className={"text-left mx-[8%] lg:text-[8em] md:text-[6em] sm:text-[4em] xs:text-[2em] font-semibold"}>
                    &lt; Engagement / &gt;
                </div>

                <TracingBeam>
                    <div></div>
                </TracingBeam>



        </div>
        </NextUIProvider>
    )
}