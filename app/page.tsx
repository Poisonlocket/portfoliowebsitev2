import React, {Fragment} from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link';
import {Globe} from "@/components/ui/globe";
import {AuroraBackground} from "@/components/ui/aurora-background";
import {CanvasRevealEffect} from "@/components/ui/canvas-reveal-effect";
import {TracingBeam} from "@/components/ui/tracing-beam";
import {CanvasRevealFood} from "@/components/ui/reveal_versions/canvas-reveal-food";
import {CanvasRevealSecurity} from "@/components/ui/reveal_versions/canvas-reveal-security";
import {CanvasRevealCoding} from "@/components/ui/reveal_versions/canvas-reveal-it";
import {TypewriterEffect} from "@/components/ui/typewriter";
export default function page() {
    return (
        <div className="min-h-full">
            <div className="h-96">
                <div className="mx-[8%]">
                <div className="text-[16em] font-semibold">
                    Hey
                </div>
                <div className="text-[11em] flex">
                    I&apos;m @<TypewriterEffect words={[{text:"Lori", className: "text-blue-500 text-[4.8em]"}]} cursorClassName="h-full"></TypewriterEffect>
                </div>
                </div>
            <div className="h-96">

            </div>
            <div className="grid mx-[4%] lg:grid-cols-3 md:grid-cols-2">
                <CanvasRevealSecurity></CanvasRevealSecurity>
                <CanvasRevealCoding></CanvasRevealCoding>
                <CanvasRevealFood></CanvasRevealFood>

            </div>

            <TracingBeam className={""}>

            </TracingBeam>
            </div>
        </div>
    )
}