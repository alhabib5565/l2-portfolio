export const aboutMeSectionContainerVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export const avaterContainerVariants = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            staggerDirection: -1,
            staggerChildren: 0.02,
        },
    },
}

export const bottomToTop = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 15,
        },
    },
};


export const leftToRightVariants = {
    initial: { x: -100, opacity: 0 },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 15,
            // duration: 2,
        },
    },
};