'use client';

import Image from 'next/image';
// import gamedev from '@/public/game_dev.jpeg';
import courseScheduler from '@/public/course-schedule-app.png';
import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react';
import TextStrokeWrapper from '@/components/stroke-teks';
import { useTheme } from '../context/ThemeContext';
import { ActixDark, GithubDark, NextJSDark, Rust, SupabaseDark, TailwindCSSDark, TypeScript } from '@fdorantesm/react-skill-icons';
import SkillIcon from '@/components/skill-icon';

const Home = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isHovering, setIsHovering] = useState(false);
	const projects = useMemo(() => [
		{
			name: 'Course-Schedule-App',
			image: courseScheduler,
			category: 'Web',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sunt facere unde nisi reprehenderit ullam esse laudantium voluptatibus asperiores qui saepe vero consectetur consequuntur nobis fugit quaerat, incidunt quia quasi!',
			buildwith: [
				{ name: 'Next Js', icon: NextJSDark },
				{ name: 'Typescript', icon: TypeScript },
				{ name: 'Tailwind Css', icon: TailwindCSSDark },
				{ name: 'Supabase', icon: SupabaseDark },
				{ name: 'Actix Web', icon: ActixDark },
				{ name: 'Rust', icon: Rust },
			],
		},
		
	], []);

	const { color } = useTheme();

	useEffect(() => {
		const id = setInterval(() => {
			if (!isHovering) {
				setCurrentIndex((currentIndex + 1) % projects.length);
			}
		}, 5000);
		return () => clearInterval(id);
	}, [currentIndex, isHovering, projects.length]);

	const handlePrev = () => {
		setCurrentIndex((currentIndex - 1 + projects.length) % projects.length);
	};

	const handleNext = () => {
		setCurrentIndex((currentIndex + 1) % projects.length);
	};

	const handleMouseEnter = () => setIsHovering(true);
	const handleMouseLeave = () => setIsHovering(false);

	const variant = {
		initial: { x: 50, opacity: 0 },
		animate: { x: 0, opacity: 1 },
		exit: { x: -50, opacity: 0 },
	};

	return (
		<div className="h-full w-full flex justify-center items-center font-[family-name:var(--font-noticia-text)]">
			<div className="w-full absolute top-0 flex flex-col justify-center items-center pt-3">
				<ChevronUp color={`${color}`} size={24} />
				<ChevronUp className={`-translate-y-4`} color={`${color}`} size={24} />
			</div>
			<div className="h-full w-full flex flex-col items-center justify-center">
				

				<AnimatePresence mode="wait">
					<motion.div key={currentIndex} className="h-3/4 w-full flex flex-col items-center justify-center" initial="initial" animate="animate" exit="exit" variants={variant} transition={{ duration: 0.5 }} >
						
						<div className="translate-y-0 flex flex-col justify-center items-center w-screen">
							<div className="text-2xl w-full text-center text-[#c5c5c5]">
								<TextStrokeWrapper strokeWidth={5}>PROJECT</TextStrokeWrapper>
							</div>
							<Image
								src={projects[currentIndex].image}
								loading="lazy"
								alt={`logo ${projects[currentIndex].name}`}
								className="h-full max-h-64 w-full max-w-xl sm:rounded-lg object-cover"
							/>
						</div>

						<div className="h-full w-full flex flex-col items-center gap-3 -translate-y-10">
							<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="h-full w-full min-w-72 px-5 max-w-96 sm:min-w-72 sm:max-w-lg flex flex-col justify-center gap-3 py-3 bg-[#191919] rounded-lg" >
								<div className="flex items-center justify-between">
									<p className="text-lg">/{projects[currentIndex].category}</p>
									<div className="flex items-center gap-2">
										<button className='h-4/5 px-3 rounded-md'>live demo</button>
										<SkillIcon IconComponent={GithubDark} color={color} />
									</div>
								</div>

								<div className="w-full flex items-center justify-between">
									<button onClick={handlePrev}>
										<ChevronLeft size={40} />
									</button>
									<h1 className="text-center">{projects[currentIndex].name}</h1>
									<button onClick={handleNext}>
										<ChevronRight size={40} />
									</button>
								</div>

								<motion.div
									className="w-full flex flex-col gap-2"
									initial="initial"
									animate="animate"
									exit="exit"
									transition={{ duration: 0.5, delay: 0.4 }}
									variants={variant}
								>
									<p className="text-sm">{projects[currentIndex].description}</p>
								</motion.div>

								<div className="w-full flex flex-col gap-2 items-center">
									<h3 className="h-full text-sm text-nowrap">Built with:</h3>
									<div className="px-2 flex gap-2  flex-wrap">
										{projects[currentIndex].buildwith.map((tech, index) => (
											<div key={index}>
												<SkillIcon  IconComponent={tech.icon} size='h-6 w-6' />
											</div>
											
										))}
									</div>
								</div>
							</div>

							<div className="flex justify-center">
								<button className="px-4 py-1 bg-[#191919] rounded-lg">More</button>
							</div>
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
			<div className="absolute w-full flex flex-col items-center bottom-0 pb-4">
				<ChevronDown className="translate-y-4" color={color} size={24} />
				<ChevronDown color={color} size={24} />
			</div>
		</div>
	);
};

export default Home;
