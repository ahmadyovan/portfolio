'use client'

import TextStrokeWrapper from "@/components/stroke-teks";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

import { HTML, CSS, JavaScript, PHPDark, ReactDark, NextJSDark, AngularDark, VueJSDark, TailwindCSSDark, LaravelDark } from '@fdorantesm/react-skill-icons';
import SkillIcon from "@/components/skill-icon";

const Home = () => {

	const { color } = useTheme();

	const variant = {
		initial: { x: -100, opacity: 1},
		animate: { x: 0, opacity: 1},
		exit: { x: 100, opacity: 1},
	}
	
	const skills = [
        {
            id: 1,
            name: 'Languages',
            skills: [
                { id: 1, name: 'HTML', icon: HTML, color: '#E44D26', progress: '80%' },
                { id: 2, name: 'CSS', icon: CSS, color: '#1572B6', progress: '70%' },
                { id: 3, name: 'JavaScript', icon: JavaScript, color: '#F7DF1E', progress: '60%' },
                { id: 4, name: 'PHP', icon: PHPDark, color: '#777BB4', progress: '60%' },
            ],
        },
        {
            id: 2,
            name: 'Front End',
            skills: [
                { id: 1, name: 'React', icon: ReactDark, color: '#61DAFB', progress: '60%' },
                { id: 2, name: 'Next js', icon: NextJSDark, color: '#000000', progress: '60%' },
                { id: 3, name: 'Angular js', icon: AngularDark, color: '#DD0031', progress: '60%' },
                { id: 4, name: 'Vue js', icon: VueJSDark, color: '#4FC08D', progress: '60%' },
                { id: 5, name: 'Tailwind', icon: TailwindCSSDark, color: '#06B6D4', progress: '60%' },
            ],
        },
        {
            id: 3,
            name: 'Back End',
            skills: [
                { id: 8, name: 'Laravel', icon: LaravelDark, color: '#FF2D20', progress: '60%' },
            ],
        },
    ];

	return (
		<div className={`h-full w-full flex items-center justify-center font-[family-name:var(--font-noticia-text)]`}>
			<div className="w-full absolute top-0 flex flex-col justify-center items-center pt-3">
				<ChevronUp color={`${color}`} size={24} />
				<ChevronUp className={`-translate-y-4`} color={`${color}`} size={24} />
			</div>
			<div className="h-full w-full flex flex-col items-center justify-center gap-5">
				<div className="w-full flex flex-col justify-center items-center gap-5">
					<div className="w-full flex flex-col justify-center items-center gap-2">
						<motion.div className="" variants={variant} initial='initial' animate='animate' exit='exit' transition={{type: "tween", duration: 0.6, ease: "easeOut"}}>
							<div className='text-2xl sm:text-3xl text-[#c5c5c5]'><TextStrokeWrapper strokeWidth={5}>ABOUT</TextStrokeWrapper></div>
						</motion.div>
						<motion.div className="w-full min-w-72 px-1 max-w-96 sm:min-w-72 sm:max-w-lg" variants={variant} initial='initial' animate='animate' exit='exit' transition={{type: "tween", duration: 0.6, ease: "easeOut"}}>
							<h2 className="text-sm sm:text-lg text-balance text-justify text-[#c5c5c5]"><TextStrokeWrapper strokeWidth={5}>I am a student just beginning my journey in programming, with a strong determination to continuously learn and grow. I am eager to explore more in-depth topics like web development, applications, and other technologies.</TextStrokeWrapper></h2>
						</motion.div>
					</div>
					
					<motion.div className="w-full flex flex-col gap-2 justify-center items-center text-[#c5c5c5] " variants={variant} initial='initial' animate='animate' exit='exit' transition={{ type: "tween", duration: 0.6, ease: "easeOut" }} >
						<h1 className="text-2xl sm:text-3xl text-center"><TextStrokeWrapper strokeWidth={5}>Skill & Tech</TextStrokeWrapper></h1>
						<div className="w-full min-w-72 px-1 max-w-96 sm:min-w-72 sm:max-w-lg flex flex-col items-center gap-3">
							{skills.map((category) => (
								<div key={category.id} className='w-full flex flex-col gap-1'>
									<h2 className="text-sm sm:text-lg"><TextStrokeWrapper strokeWidth={5}>{category.name}</TextStrokeWrapper></h2>
									<div className="w-full flex gap-3">
									{category.skills.map((skill) => (
                                        <SkillIcon key={skill.id} IconComponent={skill.icon} color={skill.color} />
                                    ))}
									</div>
								</div>
							))}
						</div>
					</motion.div>
				</div>
				
				<button className="px-6 py-2 bg-[#202020] rounded-lg">More</button>
			</div>
			<div className="w-full absolute bottom-0 flex flex-col justify-center items-center pb-3">
				<ChevronDown className={`translate-y-4`} color={`${color}`} size={24} />
				<ChevronDown color={`${color}`} size={24} />
			</div>
		</div>
	);
};

export default Home