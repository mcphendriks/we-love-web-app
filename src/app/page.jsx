import Image from 'next/image'
import styles from './page.module.css'
import Card from './components/molecules/Card';

export default function Home() {
  return (
    <section>
      <Card variant="secondary" />
      <Card/>
      <Card variant="secondary" />
      <Card/>
      <Card variant="secondary" />
      <Card/>
      <Card variant="secondary" />
      <Card/>
    </section>
  )
}
