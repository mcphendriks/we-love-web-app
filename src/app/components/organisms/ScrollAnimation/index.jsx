import styles from './ScrollAnimation.module.css'


export default function Animation() {
    return (
        <section className={styles.animationContainer}>
            <figure className={styles.animation1}></figure>
            <figure className={styles.animation2}></figure>
            <figure className={styles.animation3}></figure>
            <figure className={styles.animation4}></figure>
        </section>
    
    );
  }