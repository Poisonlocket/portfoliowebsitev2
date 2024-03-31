
import React, {Fragment} from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link';
import Globerender from "@/components/ui/globe";
import {AuroraBackground} from "@/components/ui/aurora-background";
import {CanvasRevealEffect} from "@/components/ui/canvas-reveal-effect";
import {TracingBeam} from "@/components/ui/tracing-beam";
import {CanvasRevealFood} from "@/components/ui/reveal_versions/canvas-reveal-food";
import {CanvasRevealSecurity} from "@/components/ui/reveal_versions/canvas-reveal-security";
import {CanvasRevealCoding} from "@/components/ui/reveal_versions/canvas-reveal-it";
import {TypewriterEffect} from "@/components/ui/typewriter";
import App from "next/app";

export default function page() {
    return (
        <div className="min-h-full bg-black">
            <Globerender></Globerender>
            <div className="h-96">

                <div className="mx-[8%]">
                <div className="text-[16em] font-semibold">
                    Hey
                </div>

                <div className="lg:text-[11em] md:text-[8em] bg-black flex w-screen">
                    I&apos;m @<TypewriterEffect words={[{text:"Test", className: "text-blue-500 text-[4.8em]"}]} cursorClassName="h-96]"></TypewriterEffect>
                </div>
                </div>
            <div className="h-96">

            </div>
            <div className="grid mx-[4%] lg:grid-cols-3 md:grid-cols-2">
                <CanvasRevealSecurity></CanvasRevealSecurity>
                <CanvasRevealCoding></CanvasRevealCoding>
                <CanvasRevealFood></CanvasRevealFood>

            </div>


            </div>
        </div>
    )
}