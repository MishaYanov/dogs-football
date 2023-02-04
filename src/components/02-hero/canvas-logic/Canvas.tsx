import React, { useEffect } from 'react';
import '../../../styles/components/hero.scss';
import * as THREE from 'three';

function Canvas() {
    useEffect(() => {
        const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        const constsizes = {
          width: canvas.getBoundingClientRect().width / 1.1,
          height: canvas.getBoundingClientRect().width / 1.1 
        };
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, constsizes.width / constsizes.width, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
        scene.background = new THREE.Color( "#f1f1f1" );

        renderer.setSize(constsizes.width, constsizes.height);
        renderer.setPixelRatio(window.devicePixelRatio);
        // document.body.appendChild(renderer.domElement);
        const light = new THREE.AmbientLight(0x404040, 2);
        scene.add(light);
        const light2 = new THREE.SpotLight(0xffffff, 1);
        light2.position.set(0, 100, 0);
        scene.add(light2);

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        camera.position.z = 5;
        const animate = () => {
          requestAnimationFrame(animate);
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;
          renderer.render(scene, camera);
        }
        animate();

    }, []);
  return (
    <canvas id='canvas'></canvas>
  )
}

export default Canvas

