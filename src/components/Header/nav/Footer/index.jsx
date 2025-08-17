import styles from './style.module.scss';
import Magnetic from '../../common/Magnetic';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Magnetic>
        <a
          href="https://www.facebook.com/heyitsemanuel"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </Magnetic>
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
          LinkedIn
        </a>
      </Magnetic>
    </div>
  );
}
