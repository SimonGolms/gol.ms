import { useViewHeightIosFix } from '../utils/useViewHeightIosFix';
import { Footer } from './Footer';
import { Header } from './Header';
import { TypeWriter } from './TypeWriter';

type Props = {
  meta: React.ReactNode;
};

export const Main: React.FC<Props> = ({ meta }) => {
  useViewHeightIosFix();

  return (
    <div className="flex flex-col items-center justify-between flex-grow flex-shrink w-screen h-screen min-h-screen antialiased bg-center bg-no-repeat bg-cover bg-hero-light dark:bg-hero-dark ">
      {meta}
      <Header />
      <div className="mx-5 md:mx-6 lg:mx-8 ">
        <h1 className="py-5 text-5xl text-black md:py-6 lg:py-8 lg:text-8xl md:text-6xl dark:text-white ">Hi, I am Simon</h1>
        <TypeWriter
          data={[
            'App & Website Developer',
            'Tekkie',
            'Fan of filter coffee',
            'Photographer',
            'Traveller',
            'Scooter driver',
            'Sportsman',
            'Beer Lover',
            '... and happy',
          ]}
        />
      </div>
      <Footer />
    </div>
  );
};
