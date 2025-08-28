import { allCars } from 'content-collections';
import { PageContainer } from '@/components/custom/page-container';
import CarCard from './car-card';
export default function CarCards() {
  return (
    <PageContainer>
      <div className="w-full">
        <div className="grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3 2xl:grid-cols-4">
          {allCars.map((car) => (
            <CarCard car={car} key={car.slug} />
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
