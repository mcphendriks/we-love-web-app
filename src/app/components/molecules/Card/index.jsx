import Link from 'next/link';
import styles from './card.module.css';

export default function Card({ variant = 'primary' }) {
  const cardStyles = variant === 'secondary' ? styles.secondaryCard : styles.primaryCard;
  
  return (
    <Link href="/" className={`${styles.cardContainer} ${cardStyles}`}>
        <div className={styles.cardFlex}>
          <span className={styles.cardTitle}><h2>Design</h2><svg aria-hidden="true" width="56" height="56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M56 27.947l-1.386-1.28L28.054 0h-11.2l24 24H0v8h40.747L16.64 56h11.307l26.667-26.666L56 28.053v-.107z" fill="currentcolor"></path></svg></span>
          <span className={styles.cardImg}><img width="200" height="200" src="https://i.pinimg.com/564x/c2/4e/5f/c24e5f780c3ef0f3a03bf7c031ef0d21.jpg" alt="dynamic placeholder" /></span>
        </div>
    </Link>
  );
};
