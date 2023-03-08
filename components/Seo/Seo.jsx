import Head from 'next/head';

const Seo = ({ title, description }) => {
  return (
    <Head>
      <title>{String(title) ?? ''} | Stojić Elektrik</title>
      <meta name="description" content={description ?? 'Stojić web shop.'}></meta>

      <link rel="icon" type="image/x-icon" href="/favicon.png" />
    </Head>
  );
};

export default Seo;
