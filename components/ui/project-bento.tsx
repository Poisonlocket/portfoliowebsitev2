import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import { GiSwissArmyKnife } from "react-icons/gi";
import { PiChartLineUpBold } from "react-icons/pi";
import { RiMentalHealthFill } from "react-icons/ri";
import { FaRegChartBar } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaFlask } from "react-icons/fa";

export function BentoGridDemo() {
    // @ts-ignore
    // @ts-ignore
    return (
        <BentoGrid className="max-w-11xl lg:mx-[6rem] md:mx-[3rem] sm:mx-[4rem] xs:mx-[2rem]">
            {items.map((item, i) => (
                <BentoGridItem

                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    link={item.link}
                />
            ))}
        </BentoGrid>
    );
}
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
    {
        title: "Schweizer Bankgeheimnis - Webprojekt",
        description: "Explore the birth of groundbreaking ideas and inventions.",
        header: <div className={"w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-bl from-white via-blue-400 text-gray-900 to-blue-700 text-5xl md:text-4xl xs:text-5xl text-center justify-center content-center font-bold"}>Bank​geheimnis</div>,
        icon: <GiSwissArmyKnife className="h-4 w-4 text-neutral-500" />,
        link: "https://bankgeheimnis.vercel.app"
    },
    {
        title: "Portfolio Website - Personal Homepage",
        description: "Dive into the transformative power of technology.",
        header: <div className={"w-full h-full min-h-[6rem] xs:text-5xl md:text-4xl lg:text-5xl rounded-xl bg-gradient-to-bl from-gray-600 via-slate-750  to-slate-950  text-gray-300 text-center justify-center content-center font-bold hover:text-white transition ease-in-out"}>Portfolio-V2</div>,
        icon: <PiChartLineUpBold className="h-4 w-4 text-neutral-500" />,
        link: "https://bonomettil.ch"
    },
    {
        title: "H-A-Y - Fullstack Webapp",
        description: "Discover the beauty of thoughtful and functional design.",
        header: <div className={"w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-bl from-gray-700 via-slate-800 to-gray-950 text-7xl text-center justify-center content-center font-bold"}><div className={"bg-gradient-to-bl bg-clip-text text-transparent  from-pink-300  to-sky-800"}>H A Y</div></div>,
        icon: <RiMentalHealthFill className="h-4 w-4 text-neutral-500" />,
        link: "https://hay-baselhack.vercel.app"
    },
    {
        title: "Noteify - GO CLI TOOL",
        description:
            "Understand the impact of effective communication in our lives.",
        header: <div className={"w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-l from-slate-900 via-sky-900 to-slate-900 text-5xl text-center justify-center content-center font-bold"}><div className={"bg-gradient-to-l text-center content-center h-24 bg-clip-text text-transparent  from-fuchsia-800 via-sky-300 to-fuchsia-800"}>Noteify</div></div>,
        icon: <FaNoteSticky className="h-4 w-4 text-neutral-500" />,
        link: "https://github.com/Poisonlocket/Noteify"
    },
    {
        title: "Portfolio Website V1 - Initial Homepage",
        description: "Join the quest for understanding and enlightenment.",
        header: <div className={"w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-bl from-gray-300 via-slate-600 md:text-4xl  to-black text-5xl text-center justify-center content-center font-bold"}>Portfolio-V1</div>,
        icon: <FaRegChartBar className="h-4 w-4 text-neutral-500" />,
        link: "https://github.com/Poisonlocket/introduction-website"
    },
    {
        title: "Swisshub Discord Bot Suite",
        description: "Experience the thrill of bringing ideas to life.",
        header:  <div className={"w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-bl from-rose-700 via-rose-950 md:text-4xl lg:text-5xl xs:text-5xl  to-black text-5xl text-center justify-center content-center font-bold"}><div className={"bg-gradient-to-l bg-clip-text text-transparent  from-rose-400 via-rose-800 to-rose-400"}>Swisshub - Bots</div></div>,
        icon: <FaDiscord className="h-4 w-4 text-neutral-500" />,
        link: "https://github.com/SwissHub-Development/Readme"
    },
    {
        title: "Nitrogen Bot",
        description: "Embark on exciting journeys and thrilling discoveries.",
        header:  <div className={"w-full h-full min-h-[6rem] rounded-xl  bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-400 via-sky-700 to-slate-800  text-5xl text-center justify-center content-center font-bold"}><div className={"text-transparent  h-24 bg-clip-text bg-gradient-to-bl z-90 text-center content-center from-slate-800 to-gray-900"}>Nitrogen - Bot</div></div>,
        icon: <FaFlask className="h-4 w-4 text-neutral-500" />,
        link: "https://github.com/Poisonlocket/nitrogenbot"
    },
];
