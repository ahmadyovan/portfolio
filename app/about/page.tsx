'use client'

import TextStrokeWrapper from "@/components/stroke-teks";
import { motion } from "framer-motion";

import { HTML, CSS, JavaScript, PHPDark, ReactDark, NextJSDark, AngularDark, VueJSDark, TailwindCSSDark, LaravelDark } from '@fdorantesm/react-skill-icons';
import SkillIcon from "@/components/skill-icon";

const Home = () => {

	const variant = {
		initial: { x: -100, opacity: 1},
		animate: { x: 0, opacity: 1},
		exit: { x: 100, opacity: 1},
	}
	
	const skills = [
        { id: 1, name: 'HTML', icon: HTML, color: '#E44D26', progress: '80%' },
        { id: 2, name: 'CSS', icon: CSS, color: '#1572B6', progress: '70%' },
        { id: 3, name: 'JavaScript', icon: JavaScript, color: '#F7DF1E', progress: '60%' },
        { id: 4, name: 'PHP', icon: PHPDark, color: '#777BB4', progress: '60%' },
		{ id: 5, name: 'React', icon: ReactDark, color: '#61DAFB', progress: '60%' },
        { id: 6, name: 'Next js', icon: NextJSDark, color: '#000000', progress: '60%' },
        { id: 7, name: 'Angular js', icon: AngularDark, color: '#DD0031', progress: '60%' },
        { id: 8, name: 'Vue js', icon: VueJSDark, color: '#4FC08D', progress: '60%' },
        { id: 9, name: 'Tailwind', icon: TailwindCSSDark, color: '#06B6D4', progress: '60%' },
		{ id: 10, name: 'Laravel', icon: LaravelDark, color: '#FF2D20', progress: '60%' },
    ];

	return (
		<div className={`h-full w-full flex items-center justify-center font-[family-name:var(--font-noticia-text)] custom-hidden`}>
			<div className="h-full w-fullh-full w-full flex flex-col items-center justify-center">
				<div className="relative min-h-10 h-full w-full flex my-36 flex-col items-center justify-center gap-5">
					<div className="w-fit h-fit p-5 px-10 flex min-h-10 flex-col justify-center items-center gap-3">
						<div className="w-full flex flex-col justify-center items-center gap-2">
							<motion.div className="" variants={variant} initial='initial' animate='animate' exit='exit' transition={{type: "tween", duration: 0.6, ease: "easeOut"}}>
								<div className='text-2xl sm:text-3xl lg:text-3xl lg:py-5 text-[#f7f6f6]'><TextStrokeWrapper strokeWidth={0}>ABOUT</TextStrokeWrapper></div>
							</motion.div>
							<motion.div className="w-full min-w-72 max-w-96 sm:max-w-lg lg:max-w-xl xl:max-w-3xl" variants={variant} initial='initial' animate='animate' exit='exit' transition={{type: "tween", duration: 0.6, ease: "easeOut"}}>
								<h2 className="text-xs sm:text-lg lg:text-lg text-justify text-[#f7f6f6]"><TextStrokeWrapper strokeWidth={0}>I am a student just beginning my journey in programming, with a strong determination to continuously learn and grow. I am eager to explore more in-depth topics like web development, applications, and other technologies.</TextStrokeWrapper></h2>
							</motion.div>
						</div>
						
						<motion.div className="w-full flex flex-col gap-2 justify-center items-center text-[#f7f6f6] " variants={variant} initial='initial' animate='animate' exit='exit' transition={{ type: "tween", duration: 0.6, ease: "easeOut" }} >
							<h1 className="text-2xl sm:text-3xl lg:text-3xl text-center hidden-when-max-h-390 lg:py-5"><TextStrokeWrapper strokeWidth={0}>Skill & Tech</TextStrokeWrapper></h1>
							<div className="w-full min-w-72 px-1 max-w-96 sm:min-w-72 sm:max-w-lg lg:max-w-xl xl:max-w-3xl flex justify-center items-center gap-3 lg:gap-5">
								{skills.map((category, index) => (
									<SkillIcon key={index} IconComponent={category.icon} size="h-6 w-6 md:h-6 md:w-8 xl:h-8 xl:w-8 " color={category.color} />
								))}
							</div>
						</motion.div>

						<button className="px-4 py-2 text-lg text-[#f7f6f6] bg-[#191919] rounded-lg">More</button>
					</div>
					
					
				</div>
			</div>
		</div>
	);
};

export default Home