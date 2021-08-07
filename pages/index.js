import Head from 'next/head';
import Container from '../components/Container';
import Header from '../components/Header';
import Section from '../components/Section';
import { useSession, getSession } from 'next-auth/client';
import Login from '../components/Login';

export default function Home() {
  const [session] = useSession();

  if (!session) {
    return <Login />;
  }

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

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
