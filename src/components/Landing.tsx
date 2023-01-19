import { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Landing() {
  useEffect(() => {
    ScrollTrigger.create({
      animation: gsap.from("#brand", {
        y: "45vh",
        yPercent: -50,
        scale: 6,
      }),
      scrub: true,
      trigger: "#content",
      start: "top bottom",
      endTrigger: "#content",
      end: "center center",
    });
  });

  return (
    <main>
      <div className="select-none">
        <h1
          id="brand"
          className="fixed top-0 left-1/2 -translate-x-1/2 mt-12 text-3xl font-bold z-50"
        >
          uniquad.
        </h1>
      </div>
      <section></section>
      <div id="content" className="relative">
        <img
          className="h-[100vh] object-cover w-screen px-14 pb-14"
          src="images/hero.jpg"
          alt="heroImg"
        ></img>
      </div>
      <section className="flex items-center justify-center">
        <p>Placeholder text...</p>
      </section>
    </main>
  );
}
