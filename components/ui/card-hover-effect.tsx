import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
                                items,
                                className,
                            }: {
    items: {
        title: string;
        description: string;
        link: string;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
                className
            )}
        >
            {items.map((item, idx) => (
                <Link
                    href={item?.link}
                    key={item?.link}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-white block  rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                    </Card>
                </Link>
            ))}
        </div>
    );
};

export const Card = ({
                         className,
                         children,
                     }: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-white/[0.3] relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({
                              className,
                              children,
                          }: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = ({
                                    className,
                                    children,
                                }: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
                className
            )}
        >
            {children}
        </p>
    );
};



export function CardHoverEffectDemo() {
    return (
        <div className="w-[92%] mx-auto">
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "Python",
        description:
            "Python was my first programming language and i use it for a lot of things, automation, discord bots, cyber security and pretty much anything imaginable.",
        link: "https://python.org",
    },
    {
        title: "Typescript",
        description:
            "Not that long ago i switched to typescript considering the much better developer experience in my opinion and the improved debugging. I even used it for this Project",
        link: "https://typescriptlang.org/",
    },
    {
        title: "React / Nextjs",
        description:
            "React is the most popular choice as a beginner javascript framework, so i mostly just went with that to get the hang of it, if i decide to change my mind i can easily just framework-hop later. Also, fun-fact this page is built in Nextjs",
        link: "https://nextjs.org/",
    },
    {
    title: "HTML & CSS [TAILWINDCSS]",
        description:
            "Tailwind was generally the first web-framework i picked up and showed me how enjoyable css can actually be. I really cant go without it anymore at this point considering the speed and freedom it gives me.",
        link: "https://tailwindcss.com/",
    },
    {
        title: "GO",
        description:
            "Go is the newest addition to my stack and i build TUI / CLI applications with the charmbracelet-bubbletea framework with it. I enjoy the speed and simplicity of go, although im just getting started with it.",
        link: "https://go.dev/",
    },
    {
        title: "GIT",
        description:
            "Git might not be a programming language but i cant imagine my life as a programmer without it, its probably the thing i use the most in my stack and in my opinion every programmer should know how to use this work of art.",
        link: "https://git-scm.com/",
    },
];
