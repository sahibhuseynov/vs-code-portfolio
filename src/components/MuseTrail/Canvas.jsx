import React, { useRef, useEffect } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let mouseX = 0;
    let mouseY = 0;
    const particles = [];

    const addParticle = (x, y) => {
      const particle = {
        x,
        y,
        vx: Math.random() * 1 - 0.5,
        vy: Math.random() * 1 - 0.5,
        radius: Math.random() * 20 + 10,
        opacity: 0.7,
        life: Math.floor(Math.random() * 60) + 40
      };
      particles.push(particle);
    };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = event.clientX - rect.left;
      mouseY = event.clientY - rect.top;
      for (let i = 0; i < 3; i++) {
        addParticle(mouseX, mouseY);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animateParticles = () => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        particle.x += particle.vx;
        particle.y += particle.vy;

        // apply some resistance to slow down particle velocity
        particle.vx *= 0.99;
        particle.vy *= 0.99;
    
        particle.opacity = particle.life / 100;
        particle.life--;
    
        if (particle.life <= 0) {
          particles.splice(i, 1);
          i--;
          continue;
        }
    
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius
        );
        gradient.addColorStop(0, `rgba(0, 0, 255, ${particle.opacity})`);
        gradient.addColorStop(1, `rgba(0, 0, 255, 0)`);
        ctx.fillStyle = gradient;
        ctx.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          2 * Math.PI,
          false
        );
        ctx.fill();
      }
    
      requestAnimationFrame(animateParticles);
    };
    
    animateParticles();
    
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
  <canvas
     ref={canvasRef}
     width={window.innerWidth}
     height={window.innerHeight}
   />
  );
  };
  
  export default Canvas;    