import Head from 'next/head';

const Seo = ({ title, description }) => {
  return (
    <Head>
      <title>Stojić Elektrik | {String(title) ?? ''}</title>
      <meta name="description" content={description ?? 'Mobs web shop.'}></meta>

      <link rel="icon" type="image/x-icon" href="/favicon.png" />
    </Head>
  );
};

export default Seo;
