'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";

const Navigation = () => {
    const pathname = usePathname();
    const { color } = useTheme();
    
    const url = {
        landing: '/',
        about: '/about',
        project: '/project'
    };

    // Variasi untuk animasi link
    const linkVariants = {
        initial: { 
            width: '100%' // Mengatur lebar awal menjadi 60%
        },
        animate: (isActive: boolean) => ({
            width: isActive ? '200%' : '100%', // Lebar berubah menjadi 100% jika aktif, 60% jika tidak
            backgroundColor: isActive ? color : '#ABABAB',
            transition: {
                duration: 0.6,
                ease: [0.43, 0.13, 0.23, 0.96] // Easing function untuk animasi yang lebih smooth
            }
        }),
        hover: {
            backgroundColor: '#8A8A8A',
            transition: { duration: 0.2 }
        }
    };

    const links = [
        { href: url.landing, id: 'landing' },
        { href: url.about, id: 'about' },
        { href: url.project, id: 'project' }
    ];

    return (
        <AnimatePresence mode="wait">
            <div className="w-full flex flex-col gap-5 pl-24">
                {links.map((link) => (
                    <motion.div key={link.id} initial="initial" animate="animate" exit="exit" whileHover="hover" whileTap={{ }} className="h-3 lg:h-4 w-10 relative rounded-e-full">
                        <Link href={link.href} className="">
                            <motion.div variants={linkVariants} custom={pathname === link.href} className={`h-full w-full border-4 border-solid border-[#131313] rounded-full`}/>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </AnimatePresence>
    );
};

export default Navigation;
