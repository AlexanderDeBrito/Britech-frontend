// HoverAnimation.jsx
"use client";
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

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

  return <div className="hoverElement">Hover Me</div>;
};

export default HoverAnimation;
