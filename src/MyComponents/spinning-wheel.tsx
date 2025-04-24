"use client";

import {useTranslations} from 'next-intl';
import { useEffect } from 'react';
import * as THREE from 'three';

export default function wheel() {
  const t = useTranslations('HomePage');
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#bg') as HTMLCanvasElement,
    })
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);
  

    const geometry = new THREE.TorusGeometry(5, 2, 8, 50);
    const material = new THREE.MeshBasicMaterial({ color: 0xFF6347, wireframe: true })
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);
    let direction = 1
    const maxZ = 5
    const minZ = -5

    let speed = 0.2
    const maxX = 50
    const minX = -50

    let velocityY = 0.2
    let gravity = -0.02
    let floorY = -5

    let coloring = 0

    function animate() {
      requestAnimationFrame(animate);
      // torus.rotation.x += 0.005;
      // torus.rotation.y += 0.002;
      torus.rotation.z += 0.01;
      coloring += 1
      if (coloring > 360) coloring = 0;
      torus.material.color.setHSL(coloring / 360, 1, 0.5)
      // torus.scale.setY(0.1);
      torus.translateX(0.01);
      // torus.translateX(0.02 * direction);
      // if (torus.position.x >= maxX || torus.position.x <= minX) {
      //   direction *= -1
      // }
      // torus.translateX(speed)
      // if (torus.position.x > maxX) {
      //   torus.position.x = minX
      // }

      // Apply Gravity
      velocityY += gravity

      torus.position.y += velocityY
      if (torus.position.y <= floorY) {
        velocityY *= -1
      }
      
      
      renderer.render(scene, camera);
    }

    animate();
  }, [])

  return (
    <> 
      <canvas id='bg'></canvas>
    </>
  );
}
