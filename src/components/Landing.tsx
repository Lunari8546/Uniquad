import { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "@fontsource/material-icons-sharp";

gsap.registerPlugin(ScrollTrigger);

export default function Landing() {
  useEffect(() => {
    ScrollTrigger.create({
      animation: gsap.from("#brand", {
        y: "45vh",
        yPercent: -50,
        scale: 3.5,
      }),
      scrub: true,
      trigger: "#content",
      start: "top bottom",
      endTrigger: "#content",
      end: "center center",
    });

    ScrollTrigger.create({
      animation: gsap.from("#subtitle", {
        y: "46vh",
        yPercent: -50,
        opacity: 1,
      }),
      scrub: true,
      trigger: "#content",
      start: "top bottom",
      endTrigger: "#content",
      end: "center center",
    });

    ScrollTrigger.create({
      animation: gsap.fromTo(
        "#info",
        { autoAlpha: 0, y: 50 },
        { duration: 0.8, autoAlpha: 1, y: 0 }
      ),
      trigger: "#info",
      start: "top center",
      once: true,
    });

    ScrollTrigger.create({
      animation: gsap.fromTo(
        "#about",
        { autoAlpha: 0, y: 50 },
        { duration: 0.8, autoAlpha: 1, y: 0 }
      ),
      trigger: "#about",
      start: "top center",
      once: true,
    });

    ScrollTrigger.create({
      animation: gsap.fromTo(
        "#faq",
        { autoAlpha: 0, y: 50 },
        { duration: 0.8, autoAlpha: 1, y: 0 }
      ),
      trigger: "#faq",
      start: "top center",
      once: true,
    });
  });

  return (
    <main>
      <div id="hero">
        <h1
          id="brand"
          className="fixed left-1/2 -translate-x-1/2 mt-12 text-2xl md:text-3xl lg:text-4xl font-bold z-50 select-none"
        >
          uniquad
        </h1>
        <p
          id="subtitle"
          className="invisible md:visible fixed left-1/2 -translate-x-1/2 mt-36 opacity-0 text-lg italic"
        >
          unveil yourself and shineth like a nova.
        </p>
      </div>
      <section className="h-[90vh]"></section>
      <div id="content" className="relative">
        <img
          className="h-[100vh] object-cover w-screen p-0 lg:px-14 pb-14"
          src="images/hero.jpg"
          alt="heroImg"
        ></img>
      </div>
      <section id="info">
        <h3>INFO</h3>
        <div>
          <dl>
            <dt>Example announcement</dt>
            <dd>20/01/2023</dd>
          </dl>
          <dl>
            <dt>...</dt>
            <dd>...</dd>
          </dl>
          <dl>
            <dt>...</dt>
            <dd>...</dd>
          </dl>
          <dl>
            <dt>...</dt>
            <dd>...</dd>
          </dl>
        </div>
      </section>
      <section id="about">
        <h3>ABOUT US</h3>
        <p className="w-[70vw] lg:w-1/2 text-center text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum ea
          repudiandae tempora quia laudantium, pariatur similique nam tempore
          aut consectetur veniam provident aliquam quisquam ducimus minima amet
          vero ipsa? Repellat.
        </p>
      </section>
      <section id="faq">
        <h3>FAQ</h3>
        <div>
          <div className="row">
            <h4>Example question</h4>
            <span className="material-icons-sharp">expand_more</span>
          </div>
        </div>
      </section>
    </main>
  );
}
