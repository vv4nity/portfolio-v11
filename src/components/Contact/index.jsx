import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import Magnetic from '../../common/Magnetic';

export default function Index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    });

    const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

    return (
        <motion.div style={{ y }} ref={container} className={styles.contact}>
            <div className={styles.body}>
                {/* Title */}
                <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image 
                                fill={true}
                                alt="image"
                                src={`/images/background.jpg`}
                            />
                        </div>
                        <h2>Let's work</h2>
                    </span>
                    <h2>together</h2>

                    {/* CTA Button */}
                    <motion.div style={{ x }} className={styles.buttonContainer}>
                        <Rounded backgroundColor={"#334BD3"} className={styles.button}>
                            <p>Get in touch</p>
                        </Rounded>
                    </motion.div>

                    {/* Arrow Icon */}
                    <motion.svg 
                        style={{ rotate, scale: 2 }} 
                        width="9" 
                        height="9" 
                        viewBox="0 0 9 9" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" 
                            fill="white"
                        />
                    </motion.svg>
                </div>

                {/* Contact Info */}
                <div className={styles.nav}>
                    <Rounded>
                        <p>emanueljabon18@gmail.com</p>
                    </Rounded>
                    <Rounded>
                        <p>+63 961 9082 462</p>
                    </Rounded>
                </div>

                {/* Footer Info + Socials */}
                <div className={styles.info}>
                    <div>
                        <span>
                            <h3>Version</h3>
                            <p>2025 © Edition</p>
                        </span>
                        <span>
                            <h3>Made by</h3>
                            <p>Emanuel Jabon</p>
                        </span>
                    </div>

                    {/* Social Links */}
                    <div>
                        <span>
                            <h3>socials</h3>
                            <Magnetic>
                                <a 
                                    href="https://www.facebook.com/heyitsemanuel" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    Facebook
                                </a>
                            </Magnetic>
                        </span>
                        <Magnetic>
                            <a 
                                href="https://www.instagram.com/vv4nity" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Instagram
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a 
                                href="https://linkedin.com/in/emanuel-jabon-573a0a264" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Linkedin
                            </a>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
