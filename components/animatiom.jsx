"use client";
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Animation = () => {
  useEffect(() => {
    gsap.to(".element", { rotationY: 360, duration: 5, repeat: -1, yoyo: true });
  }, []);

  return <div className="element"><h1 className="mb-0">Bem-vindo à Britech</h1></div>;
};

export default Animation;
