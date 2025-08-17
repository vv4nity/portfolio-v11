import { useRef } from 'react';
import { useScroll, useTransform, motion, useAnimationFrame } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';

const slider1 = [
  { color: "#e3e5e7", src: "c2.jpg" },
  { color: "#d6d7dc", src: "decimal.jpg" },
  { color: "#e3e3e3", src: "funny.jpg" },
  { color: "#21242b", src: "google.jpg" }
];

const slider2 = [
  { color: "#d4e3ec", src: "maven.jpg" },
  { color: "#e5e0e1", src: "panda.jpg" },
  { color: "#d7d4cf", src: "powell.jpg" },
  { color: "#e1dad6", src: "wix.jpg" }
];

// Duplicate arrays for infinite loop
const loopedSlider1 = [...slider1, ...slider1];
const loopedSlider2 = [...slider2, ...slider2];

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  // Speed influenced by scroll
  const speed1 = useTransform(scrollYProgress, [0, 1], [0.3, 1.2]);
  const speed2 = useTransform(scrollYProgress, [0, 1], [0.5, 1.5]);

  return (
    <div ref={container} className={styles.slidingImages}>
      {/* First row */}
      <motion.div
        className={`${styles.slider} ${styles.leftToRight}`}
        style={{ "--speed": speed1 }}
      >
        {loopedSlider1.map((project, index) => (
          <div
            key={index}
            className={styles.project}
            style={{ backgroundColor: project.color }}
          >
            <div className={styles.imageContainer}>
              <Image fill alt="image" src={`/images/${project.src}`} />
            </div>
          </div>
        ))}
      </motion.div>

      {/* Second row */}
      <motion.div
        className={`${styles.slider} ${styles.rightToLeft}`}
        style={{ "--speed": speed2 }}
      >
        {loopedSlider2.map((project, index) => (
          <div
            key={index}
            className={styles.project}
            style={{ backgroundColor: project.color }}
          >
            <div className={styles.imageContainer}>
              <Image fill alt="image" src={`/images/${project.src}`} />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
