import PageContainer from './page/PageContainer';

import getClient from './lib/apolloClient';
import { graphql } from './lib/graphql';
import { WebRadio } from './lib/graphql/graphql';

const query = graphql(/* GraphQL */ `
  query GetWebRadios {
    brand(id: FIP) {
      id
      title
      baseline
      description
      websiteUrl
      liveStream
      playerUrl
      webRadios {
        id
        title
        description
        playerUrl
      }
    }
  }
`);

const Home = async () => {
  const { data } = await getClient().query({ query });
  const webRadios = data.brand?.webRadios;
  if (!webRadios) {
    return null;
  }
  return (
    <main className="flex min-h-screen flex-col items-center py-24 lg:px-80 px-10 bg-neutral-800 text-white dark">
      <PageContainer webRadios={webRadios as WebRadio[]} />
    </main>
  );
};

export default Home;
