import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Search from '../components/utility/search/Search';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const { locale } = useRouter();

  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      <Image
        src="/popcorn-logo.png"
        alt="Popcorn Logo"
        width={272}
        height={92}
        priority
      />
      <Search />
      <p>
        Popcorn offered in:{' '}
        <Link
          href="/"
          className="underline text-blue-600"
          locale={locale === 'en' ? 'fr' : 'en'}
        >
          Français
        </Link>
      </p>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
