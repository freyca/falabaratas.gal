import { animate as motionAnimate, stagger, inView } from "motion";

inView(
    ".scrolling-section",
    (element) => {
        motionAnimate(
            element,
            { opacity: [0, 1], y: [50, 0] },
            { ease: [0.39, 0.24, 0.3, 1], duration: 1 },
        );

        const cards = element.querySelectorAll(".card");
        if (cards.length > 0) {
            motionAnimate(
                cards,
                { opacity: [0, 1], y: [25, 0] },
                {
                    type: "spring",
                    delay: stagger(0.25, { startDelay: 0.25 }),
                },
            );
        }
    },
    { amount: 0.25 },
);
