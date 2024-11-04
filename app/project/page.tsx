'use client';

// import gamedev from '@/public/game_dev.jpeg';
import courseScheduler from '@/public/course-schedule-app.png';
import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react';
import TextStrokeWrapper from '@/components/stroke-teks';
import { useTheme } from '../context/ThemeContext';
import { ActixDark, NextJSDark, Rust, GithubDark, SupabaseDark, TailwindCSSDark, TypeScript } from '@fdorantesm/react-skill-icons';
import SkillIcon from '@/components/skill-icon';
import Image from 'next/image'

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
			<div className="w-full absolute top-0 flex z-10 flex-col justify-center items-center pt-3">
				<ChevronUp color={`${color}`} size={24} />
				<ChevronUp className={`-translate-y-4`} color={`${color}`} size={24} />
			</div>
			<div className="h-full w-full flex flex-col items-center justify-center text-[#c5c5c5]">
				<AnimatePresence mode="wait">
					<motion.div key={currentIndex} className="relative h-full min-h-10 max-h-96 w-full md:max-w-2xl xl:max-w-4xl 2xl:max-w-5xl my-36 xl:my-16 flex items-start justify-center xl:justify-start" initial="initial" animate="animate" exit="exit" variants={variant} transition={{ duration: 0.5 }} >
						
						<div className='h-auto w-full flex items-center translate-y-8 lg:-translate-y-10 justify-center'>
							<div className="h-full w-full min-h-0 -translate-y-24 flex flex-col justify-center items-center gap-3 md:gap-8 ">
								<div className="text-2xl w-full md:text-4xl xl:text-5xl text-center text-[#c5c5c5]">
									<TextStrokeWrapper strokeWidth={5}>PROJECT</TextStrokeWrapper>
								</div>
								<div className='w-screen max-w-96 lg:max-w-full lg:w-full flex justify-center hidden-when-max-h-460'>
									<div className='w-full lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl'>
										<Image className="h-auto w-full rounded-lg object-cover" src={projects[currentIndex].image} loading="lazy" alt={`logo ${projects[currentIndex].name}`}  />
									</div>
								</div>
							</div>
						</div>

						<div className="absolute w-full h-full flex items-center translate-y-8 lg:translate-y-0 justify-center gap-3">
							<div className='w-full h-full translate-y-20 xl:translate-y-36 flex flex-col items-center justify-center lg:items-end lg:justify-end gap-3 xl:gap-10 reset-when-max-h-460'>
								<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="h-full w-full min-h-28 lg:h-auto xl:max-w-lg max-h-fit min-w-72 max-w-80 px-5 flex flex-col justify-center items-center gap-2 py-3 bg-[#191919] rounded-lg" >
									<div className="w-full flex items-center justify-between">
										<p className="text-xs lg:text-xl">/{projects[currentIndex].category}</p>
										<div className="flex items-center gap-2">
											<button className='h-4/5 text-xs lg:text-xl px-3 rounded-md'>soon</button>
											<SkillIcon IconComponent={GithubDark} color={color} />
										</div>
									</div>

									<div className='h-full min-h-10 max-h-fit w-full flex justify-centeritems-center'>
										<div className="w-full flex items-center justify-between">
											<button onClick={handlePrev}>
												<ChevronLeft size={40} />
											</button>
											<h1 className="text-center text-sm  lg:text-xl">{projects[currentIndex].name}</h1>
											<button onClick={handleNext}>
												<ChevronRight size={40} />
											</button>
										</div>
									</div>

									<motion.div className="flex flex-col gap-2 overflow-hidden hidden-when-max-h-480" initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5, delay: 0.4 }} variants={variant} >
										<p className="text-justify text-xs lg:text-sm xl:text-lg">{projects[currentIndex].description}</p>
									</motion.div>

									<div className="flex flex-col gap-2 items-center hidden-when-max-h-460">
										<h3 className="h-full text-xs lg:text-sm text-nowrap xl:text-lg">Built with:</h3>
										<div className="px-2 flex gap-2 xl:gap-5  flex-wrap">
											{projects[currentIndex].buildwith.map((tech, index) => (
												<div key={index}>
													<SkillIcon  IconComponent={tech.icon} size='h-6 w-6 md:h-8 md:w-8 xl:h-10 xl:w-10' />
												</div>
											))}
										</div>
									</div>
								</div>

								<div className="flex w-full justify-center overflow-hidden">
									<button className="px-4 py-2 bg-[#191919] text-xs lg:text-lg rounded-lg">More</button>
								</div>

							</div>
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
			<div className="absolute w-full flex flex-col items-center bottom-0 pb-3">
				<ChevronDown className="translate-y-4" color={color} size={24} />
				<ChevronDown color={color} size={24} />
			</div>
		</div>
	);
};

export default Home;
