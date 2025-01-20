// HoverAnimation.jsx
"use client";
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

const HoverAnimation = () => {
  useEffect(() => {
    const element = document.querySelector(".hoverElement");
    element.addEventListener("mouseenter", () => {
      gsap.to(element, { scale: 1.2, duration: 0.3 });
    });
    element.addEventListener("mouseleave", () => {
      gsap.to(element, { scale: 1, duration: 0.3 });
    });
  }, []);

  return <div className="hoverElement">
    <Link
      href="/Contato"
      className="btn btn-lg btn-primary sm:btn-wide"
    >
      Fale com um especialista
    </Link>
  </div>;
};

export default HoverAnimation;
