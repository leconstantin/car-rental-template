import Card from './card';

const images = [
  'images/img1.jpg',
  'images/img2.jpg',
  'images/img3.jpg',
  'images/img4.jpg',
  'images/img5.jpg',
];
export default function CardsHome() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="relative flex flex-col gap-[10vh] py-[10vh]">
        {images.map((img, idx) => (
          <Card imgUrl={`/${img}`} key={idx} />
        ))}
      </div>
    </main>
  );
}
