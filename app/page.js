'use client'
import Link from "next/link";
import PageHeader from "./components/PageHeader";
import ShinyText from "./components/ShinyText";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageWrapper from "./components/PageWrapper";
import Container from "./components/Container";

const SENTENCE_LOCK_MS = 700;
const TOUCH_THRESHOLD_PX = 30;

export default function Home() {
  const sentences = ['inclusion is essential', 'design matters', 'users won\'t wait', 'audience is everywhere']
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const locked = useRef(false);

  useEffect(() => {
    const advance = (direction) => {
      if (locked.current) return;
      locked.current = true;
      setSentenceIndex((i) => (i + direction + sentences.length) % sentences.length);
      setTimeout(() => {
        locked.current = false;
      }, SENTENCE_LOCK_MS);
    };

    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) < 10) return;
      advance(e.deltaY > 0 ? 1 : -1);
    };

    let touchStartY = null;
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e) => {
      if (touchStartY === null) return;
      const deltaY = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(deltaY) > TOUCH_THRESHOLD_PX) advance(deltaY > 0 ? 1 : -1);
      touchStartY = null;
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [sentences.length]);

  return (
    <PageWrapper>
        <Container classNames='flex flex-col flex-1 justify-between'>
          <PageHeader text="Hello,"/>
          <p className="copy-lead font-semibold max-w-[21ch]">I'm a {' '}
            <ShinyText text="codebuilder" /> and I believe that {' '}
            <AnimatePresence mode="wait">
              <motion.span
                key={sentenceIndex}
                className="text-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
              >
                {sentences[sentenceIndex]}
              </motion.span>
            </AnimatePresence>
          </p>
          <span className="copy-small font-normal">Currently at <Link href="https://v-a.studio/" rel="noopener noreferrer" target="_blank">@V-A Studio</Link></span>
        </Container>
    </PageWrapper>
  );
}

