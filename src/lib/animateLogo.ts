import { animate, svg } from "animejs";

animate(svg.createDrawable("#logo"), {
    draw: "0 1",
    ease: "linear",
    duration: 4000,
    loop: false,
});
