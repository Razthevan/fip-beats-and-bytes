import PageContainer from './page/PageContainer';
import FallbackScreen from './page/pageContainer/FallbackScreen';

import { graphql } from './lib/graphql';
import getClient from './lib/apolloClient';
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
  const { data, error } = await getClient().query({ query });
  if (error) {
    return <FallbackScreen />;
  }
  const webRadios = data.brand?.webRadios;
  if (!webRadios) {
    return null;
  }
  return <PageContainer webRadios={webRadios as WebRadio[]} />;
};

export default Home;
