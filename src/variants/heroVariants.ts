export const heroSectionContainerVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            staggerDirection: -1,
            staggerChildren: 0.2,
            delayChildren: 0.5,
        },
    },
};

export const textWraperVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            staggerDirection: -1,
            staggerChildren: 0.02,
        },
    },
};

export const letterVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 15,
        },
    },
};

export const imageVariants = {
    initial: { x: 200, opacity: 0 },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 15,
        },
    },
};

export const sentenceVariants = {
    initial: { y: 100, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 15,
            // duration: 2,
        },
    },
};