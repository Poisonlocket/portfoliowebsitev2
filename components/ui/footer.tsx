import {black, white} from "next/dist/lib/picocolors";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
export default function Footer() {
    return (
        <div>
            <div className="custom-shape-divider-bottom-1712213419">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        opacity=".25" className="shape-fill"></path>
                    <path
                        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                        opacity=".5" className="shape-fill"></path>
                    <path
                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                        className="shape-fill"></path>
                </svg>
            </div>
        <footer className="footer footer-center text-black p-10 bg-footer-gray text-primary-content">
            <aside className={"text-black"}>
                <svg fill={"black"}   version="1.1"  viewBox="0 0 800 400"><path  d="M288.340828591932 98.65473790874398C276.2332058095427 131.39016449362353 212.4066016021859 264.4245476316444 215.69509189759606 295.0672974180213C218.9835821930062 325.7100472043983 264.1255830271533 316.1435239703488 308.07177036439293 282.5112366270057C352.0179577016325 248.8789492836626 458.14650791322106 92.9746180763872 479.37221592103356 93.27357335796273C500.59792392884606 93.57252863953826 422.86996779277837 258.5949527016313 435.42601841126793 284.3049683164588C447.9820690297575 310.0149839312863 544.6935711049529 264.8729792824419 554.7085196319711 247.53366704692758C564.7234681589892 230.19435481141326 493.4230276886117 204.03591136048553 495.5157095733773 180.2690949033729C497.60839145814293 156.50227844626028 555.3064607127002 117.48882273743864 567.2646109405648 104.9327683042518 " fill="none" strokeWidth="25" stroke="url(&quot;#SvgjsLinearGradient999&quot;)" strokeLinecap="round" strokeDasharray="0 0"></path><defs><linearGradient id="SvgjsLinearGradient999"><stop stopColor="hsl(0, 0%, 0%)" offset="0"></stop><stop stopColor="hsl(0, 0%, 0%)" offset="1"></stop></linearGradient></defs></svg>
                <p className="font-bold">
                    Lorenzo Bonometti <br/>- Built in 2024 -
                </p>
                <p>Copyright © 2024 - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="mailto:lorenzo@bonomettil.ch"><MdMarkEmailRead size={28} /></a>
                    <a href={"https://github.com"}><FaGithub size={28} /></a>
                    <a href="https://discordapp.com/users/683267055973433363"><FaDiscord size={28} /></a>
                </div>
            </nav>
        </footer>
        </div>
    )
};