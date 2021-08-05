import {
    createApp
} from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

import {
    gsap
} from "gsap";
import {
    ScrollToPlugin
} from "gsap/ScrollToPlugin";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

var tl = gsap.timeline({
    defaults: {
        duration: 1,
        opacity: 0,
    }
});
tl.from(".page-menu", {
    y: -200,
    opacity: 1
});

tl.addLabel("menu");

tl.from(".banner-title", {
    y: 50,
});

tl.from(".banner-desc, .banner-desc-sub, .banner-button", {
    y: 50,
    stagger: 0.5,
});
tl.addLabel("title");

tl.from(".sup-text .number", {
    x: -50,
});
tl.fromTo(".sup-text", {
    backgroundSize: "0%",
    opacity: 1
}, {
    backgroundSize: "100%",
    opacity: 1
}, "-=0.1");
tl.from(".sup-text span:not(.number)", {
    y: 20,
    duration: 1,
    stagger: 0.5,
}, "-=0.5");
tl.addLabel("percent");

tl.from(".not-service-text", {
    y: 20,
});
tl.from(".not-service-icon", {
    y: 20,
    x: -20,
}, "-=0.5");

tl.addLabel("arrow");

tl.from(".banner-icon.left", {
    x: -1000,
    duration: 2,
    stagger: { 
        each: 0.1,
        from: "center",
        grid: "auto",
        ease: "power2.inOut",

    }
}, ">");
tl.from(".banner-icon.right", {
    x: 1000,
    duration: 2,
    stagger: {
        each: 0.1,
        from: "center",
        grid: "auto",
        ease: "power2.inOut",
    }
}, "<");
tl.addLabel("icons");

/* tl.to("#about", {
    y: -500,
    opacity: 0,
}); */
tl.addLabel("scroll");

tl.to(window, {duration: 1, scrollTo:"#staff"}, ">");

tl.from(".staff-title, .staff-description", {
    y: 100,
    stagger: 0.5,
}, "-=0.5");
tl.addLabel("staff");
