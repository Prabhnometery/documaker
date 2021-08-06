import Head from 'next/head';
import Container from '../components/Container';
import Header from '../components/Header';
import Section from '../components/Section';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Documaker</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Section />
      <Container />
    </div>
  );
}
