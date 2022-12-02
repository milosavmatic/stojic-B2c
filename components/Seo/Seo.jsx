import Head from 'next/head'

const Seo = ({ title, description }) => {
  return (
    <Head>
      <title>Mobs | {String(title) ?? ''}</title>
      <meta name='description' content={description ?? 'Mobs web shop.'}></meta>

      <link rel='icon' type='image/x-icon' href='/favicon.jpg' />
    </Head>
  )
}

export default Seo
