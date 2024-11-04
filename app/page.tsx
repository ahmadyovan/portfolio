'use client'

import TextStrokeWrapper from "@/components/stroke-teks";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTheme } from "./context/ThemeContext";

const Home = () => {

	const { color } = useTheme();
	const gradienBackground = `linear-gradient(to bottom, #FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF`;

	const variant = {
		initial: { x: -100, opacity: 1},
		animate: { x: 0, opacity: 1},
		exit: { x: 100, opacity: 1},
	}

	return (
		<div className={`h-full w-full flex items-center justify-center custom-hidden`}>
			<div className="w-full absolute top-0 flex flex-col justify-center items-center pt-3">
				<ChevronUp className="" color={`${color}`} size={24} />
				<ChevronUp className={`-translate-y-3`} color={`${color}`} size={24} />
			</div>
			<div className="w-full flex flex-col gap-5 items-center justify-center font-[family-name:var(--font-noticia-text)]">
				<motion.div variants={variant} initial='initial' animate='animate' exit='exit' transition={{type: "tween", duration: 0.6, ease: "easeOut"}}>
					<div className='text-4xl sm:text-5xl md:text-6xl text-[#c5c5c5] leading-3 xl:leading-none'><TextStrokeWrapper strokeWidth={1}><h1 className={`bg-clip-text text-transparent`} style={{backgroundImage: gradienBackground}}>AHMAD YOVAN</h1></TextStrokeWrapper></div>
				</motion.div>
				<motion.div variants={variant} initial='initial' animate='animate' exit='exit' transition={{type: "tween", duration: 0.6, ease: "easeOut"}}>
					<div className="text-lg sm:text-2xl md:text-3xl leading-none text-white"><TextStrokeWrapper strokeWidth={1}><h2 >Aspiring Developer</h2></TextStrokeWrapper></div>
				</motion.div>
			</div>
			<div className="w-full absolute bottom-0 flex flex-col justify-center items-center py-4">
				<ChevronDown className={`translate-y-3`} color={`${color}`} size={24} />
				<ChevronDown color={`${color}`} size={24} />
			</div>
		</div>
	);
};

export default Home