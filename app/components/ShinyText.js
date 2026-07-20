"use client";

import { useState } from "react";
import Image from "next/image";
import Photo from '@/public/photo.png'

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

const KEYFRAMES_ID = "shiny-text-keyframes";
const PHOTO_WIDTH = 130;
const PHOTO_HEIGHT = 150;
const CURSOR_GAP = 24;

export default function ShinyText({
  text,
  shineColor = "#FFFFFF",
  speed = 1.2,
  pause = 2.5,
  className = "",
}) {
  const total = speed + pause;
  const sweepPercent = (speed / total) * 100;

  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.6 });
  const y = useSpring(mouseY, { stiffness: 150, damping: 20, mass: 0.6 });
  const velocityX = useVelocity(x);
  const rotate = useTransform(velocityX, [-1200, 1200], [-20, 20], {
    clamp: true,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - PHOTO_WIDTH / 2);
    mouseY.set(e.clientY - rect.top - PHOTO_HEIGHT - CURSOR_GAP);
  };

  return (
    <span
      className={`shiny-text hover:cursor-default ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <style
        id={KEYFRAMES_ID}
        dangerouslySetInnerHTML={{
          __html: `@keyframes shinyTextSweep {
            0% { -webkit-mask-position: 200%; mask-position: 200%; }
            ${sweepPercent}% { -webkit-mask-position: -100%; mask-position: -100%; }
            100% { -webkit-mask-position: -100%; mask-position: -100%; }
          }`,
        }}
      />
      {text}
      <span
        className="shiny-text-shine"
        aria-hidden="true"
        style={{
          color: shineColor,
          animationName: "shinyTextSweep",
          animationDuration: `${total}s`,
        }}
      >
        {text}
      </span>
      <motion.span
        className="absolute top-0 left-0 pointer-events-none block opacity-0"
        style={{ x, y, rotate }}
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src={Photo}
          alt=""
          width={PHOTO_WIDTH}
          height={PHOTO_HEIGHT}
          className="rounded-2xl"
        />
      </motion.span>
    </span>
  );
}
