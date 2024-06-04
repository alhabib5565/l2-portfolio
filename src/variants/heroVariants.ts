export const heroSectionContainerVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            staggerDirection: -1,
            staggerChildren: 0.3,
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
            staggerChildren: 0.03,
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
            damping: 20,
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
            damping: 20,
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
            damping: 20,
            // duration: 2,
        },
    },
};