import CollectionSpotlight from '../../components/CollectionSpotlight';

export default function CollectionsGallery({ collections }) {
  return (
    <section className="grid gap-px bg-black md:grid-cols-2">
      {collections.map((collection) => (
        <CollectionSpotlight key={collection.slug} collection={collection} />
      ))}
    </section>
  );
}
