'use client';

// import gamedev from '@/public/game_dev.jpeg';
import courseScheduler from '@/public/course-schedule-app.png';
import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sunt facere unde nisi reprehenderit ullam esse laudantium voluptatibus asperiores qui saepe',
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
		<div className="h-full w-full flex flex-col justify-center items-center font-[family-name:var(--font-noticia-text)]">
			<AnimatePresence mode="wait">
				<motion.div key={currentIndex} className="h-full py-36 w-full gap-10 flex flex-col justify-center" initial="initial" animate="animate" exit="exit" variants={variant} transition={{ duration: 0.5 }}>
					<div className="text-2xl w-full md:text-4xl xl:text-3xl text-center text-[#c5c5c5]">
						<TextStrokeWrapper strokeWidth={5}>PROJECT</TextStrokeWrapper>
					</div>
					<div className='h-full max-w-96 lg:max-w-full lg:w-full flex justify-center items-end px-48 hidden-when-max-h-460'>
						<div className='w-full max-w-2xl flex flex-col gap-5 translate-x-20'>
							<Image className="h-auto w-full rounded-lg object-cover" src={projects[currentIndex].image} loading="lazy" alt={`logo ${projects[currentIndex].name}`}  />
							<div className="flex w-full justify-center pl-28 overflow-hidden">
								<button className="px-4 py-2 bg-[#191919] text-xs lg:text-lg rounded-lg">More</button>
							</div>							
						</div>
						
						<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="h-72 w-full -translate-x-20 xl:max-w-lg min-w-72 max-w-80 py-5 px-5 flex flex-col justify-center items-center gap-3 bg-[#191919] rounded-lg" >
							<div className="w-full flex items-center justify-between">
								<p className="text-xs lg:text-base">/{projects[currentIndex].category}</p>
								<div className="flex items-center gap-2">
									<button className='h-4/5 text-xs lg:text-base px-3 rounded-md'>soon</button>
									<SkillIcon IconComponent={GithubDark} color={color} />
								</div>
							</div>
							<div className='h-full flex flex-col gap-3'>
								<div className="w-full flex items-center justify-between">
									<button onClick={handlePrev}>
										<ChevronLeft size={25} />
									</button>
									<h1 className="text-center text-sm lg:text-base">{projects[currentIndex].name}</h1>
									<button onClick={handleNext}>
										<ChevronRight size={25} />
									</button>
								</div>
								<motion.div className="flex overflow-hidden px-5 hidden-when-max-h-480" initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5, delay: 0.4 }} variants={variant} >
									<p className="text-justify text-xs lg:text-sm xl:text-base">{projects[currentIndex].description}</p>
								</motion.div>
							</div>
							
							<div className="flex flex-col gap-2 items-center hidden-when-max-h-460">
								<h3 className="h-full text-xs lg:text-sm text-nowrap xl:text-base">Built with:</h3>
								<div className="px-2 flex gap-2 xl:gap-5  flex-wrap">
									{projects[currentIndex].buildwith.map((tech, index) => (
										<div key={index}>
											<SkillIcon  IconComponent={tech.icon} size='h-6 w-6 md:h-8 md:w-8 xl:h-8 xl:w-10' />
										</div>
									))}
								</div>
							</div>
						</div>	
					</div>										
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default Home;
