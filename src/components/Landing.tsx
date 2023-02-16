import { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "@fontsource/material-icons-sharp";

gsap.registerPlugin(ScrollTrigger);

export default function Landing() {
  useEffect(() => {
    ScrollTrigger.create({
      animation: gsap.from("#brand", {
        y: "42.5vh",
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
        y: "43.5vh",
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
        "#products",
        { autoAlpha: 0, y: 50 },
        { duration: 0.8, autoAlpha: 1, y: 0 }
      ),
      trigger: "#products",
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
          className="invisible md:visible fixed left-1/2 -translate-x-1/2 mt-36 opacity-0 text-lg italic w-[70vw] text-center"
        >
          highly customizable floral-themed accessories.
        </p>
      </div>
      <section className="h-[85vh]"></section>
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
            <dt>Official launch of UNIQUAD's website!</dt>
            <dd>16/02/2023</dd>
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
          Uniquad is a JA company formed by students from Sha Tin Government
          Secondary School.
          <br />
          <br />
          We sell floral-themed accessories manufactured by ourselves and aims
          at providing the first-class quality goods to our customers with
          customization aspects.
          <br />
          <br />
          Our products are in a huge range of varieties, from keyrings to pin
          buckles, so we can assure you that there must be something special to
          satisfy your need.
        </p>
      </section>
      <section id="products">
        <h3>PRODUCTS</h3>
        <div className="flex flex-wrap justify-center w-[70vw] lg:w-[50vw]">
          {/* <div>
            <p>test</p>
          </div>
          <div>
            <p>test</p>
          </div>
          <div>
            <p>test</p>
          </div> */}
          <p>To be added...</p>
        </div>
      </section>
      <section id="faq">
        <h3>FAQ</h3>
        <div>
          <div className="item">
            <div
              className="row"
              onClick={() => {
                let ans = document.querySelector(".ans");

                if (ans?.classList.contains("h-0")) {
                  ans?.classList.remove("h-0");
                } else {
                  ans?.classList.add("h-0");
                }
              }}
            >
              <h4>When will the preorder be available?</h4>
              <span className="material-icons-sharp">expand_more</span>
            </div>
            <div className="ans overflow-hidden h-0">
              <p>Within this month. (Feburary 2023)</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
