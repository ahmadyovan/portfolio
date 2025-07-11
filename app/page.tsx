'use client'

import TextStrokeWrapper from "@/components/stroke-teks";
import { motion } from "framer-motion";
import { inter } from "@/components/font";

const Home = () => {

	
	const gradienBackground = `linear-gradient(to bottom, #FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF`;

	const variant = {
		initial: { x: -100, opacity: 1},
		animate: { x: 0, opacity: 1},
		exit: { x: 100, opacity: 1},
	}

	return (
		<div className={`h-full w-full flex items-center justify-center custom-hidden`}>
			
			<div className={`w-full flex flex-col items-center justify-center ${inter.className}`}>
				<motion.div variants={variant} initial='initial' animate='animate' exit='exit' transition={{type: "tween", duration: 0.6, ease: "easeOut"}}>
					<div className='text-4xl sm:text-5xl md:text-6xl text-[#c5c5c5] leading-3 xl:leading-none'><TextStrokeWrapper strokeWidth={0}><h1 className={`bg-clip-text text-transparent`} style={{backgroundImage: gradienBackground}}>AHMAD YOVAN</h1></TextStrokeWrapper></div>
				</motion.div>
				<motion.div variants={variant} initial='initial' animate='animate' exit='exit' transition={{type: "tween", duration: 0.6, ease: "easeOut"}}>
					<div className="text-lg sm:text-2xl md:text-3xl flex flex-row w-full leading-none text-white">
						<TextStrokeWrapper strokeWidth={0}><h2 >Newbie </h2></TextStrokeWrapper>
						<TextStrokeWrapper strokeWidth={5}><h2 className="text-[#008CFF]">Developer</h2></TextStrokeWrapper>
					</div>
				</motion.div>
			</div>
			
		</div>
	);
};

export default Home