
import Card from './components/molecules/Card';
import ScrollAnimation from './components/organisms/ScrollAnimation';


export default function Home() {
  return (
    <section>
      <ScrollAnimation />
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
