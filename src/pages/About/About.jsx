import Marquee from '../../components/Marquee';
import AboutHardware from './AboutHardware';
import AboutHero from './AboutHero';
import AboutPhilosophy from './AboutPhilosophy';
import AboutPrinciples from './AboutPrinciples';

const manifestoItems = [
  'Made in hell',
  'Industrial minimalism',
  'Raw materials only',
  'Heavyweight cotton 500GSM',
];

export default function About() {
  return (
    <>
      <AboutHero />
      <Marquee items={manifestoItems} />
      <AboutPhilosophy />
      <AboutPrinciples />
      <AboutHardware />
    </>
  );
}
