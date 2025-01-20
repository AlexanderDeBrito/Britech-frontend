"use client";
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const ThreeScene = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x1e3a8a); // Fundo azul escuro (bg-blue-900)
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        const geometry = new THREE.PlaneGeometry(5, 5, 32, 32);
        const material = new THREE.ShaderMaterial({
            uniforms: {
                u_time: { value: 1.0 },
                u_mouse: { value: new THREE.Vector2(0, 0) }
            },
            vertexShader: `
                uniform float u_time;
                uniform vec2 u_mouse;
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    vec3 pos = position;
                    pos.z += sin(u_time + pos.x * 2.0 + pos.y * 2.0) * 0.5;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                }
            `,
            fragmentShader: `
                uniform vec2 u_mouse;
                varying vec2 vUv;
                void main() {
                    vec3 color = vec3(vUv, 0.5 + sin(u_mouse.x * vUv.y) * 0.5);
                    gl_FragColor = vec4(color, 1.0);
                }
            `,
            wireframe: true
        });

        const plane = new THREE.Mesh(geometry, material);
        scene.add(plane);
        camera.position.z = 5;

        const controls = new OrbitControls(camera, renderer.domElement);

        window.addEventListener('mousemove', (event) => {
            material.uniforms.u_mouse.value.x = (event.clientX / window.innerWidth) * 2 - 1;
            material.uniforms.u_mouse.value.y = -(event.clientY / window.innerHeight) * 2 + 1;
        });

        const animate = () => {
            requestAnimationFrame(animate);
            material.uniforms.u_time.value += 0.05;
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}></div>
    );
};

export default ThreeScene;
