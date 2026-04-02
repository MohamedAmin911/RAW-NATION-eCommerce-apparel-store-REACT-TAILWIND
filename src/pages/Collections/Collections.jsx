import Marquee from '../../components/Marquee';
import { collections } from '../../data/products';
import CollectionsArchiveSection from './CollectionsArchiveSection';
import CollectionsGallery from './CollectionsGallery';
import CollectionsHero from './CollectionsHero';

const archiveFeedItems = [
  'New drop available now',
  'Limited quantities',
  'Global shipping',
  'No refunds on archive pieces',
];

export default function Collections() {
  return (
    <>
      <CollectionsHero />

      <Marquee items={archiveFeedItems} />

      <CollectionsGallery collections={collections} />
      <CollectionsArchiveSection />
    </>
  );
}
