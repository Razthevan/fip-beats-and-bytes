import { useQuery } from '@apollo/client';
import { Snippet } from '@nextui-org/react';

import { graphql } from '@/app/lib/graphql';
import { StationsEnum } from '@/app/lib/graphql/graphql';

const query = graphql(/* GraphQL */ `
  query GetTrack($station: StationsEnum!) {
    live(station: $station) {
      song {
        start
        end
        track {
          title
          mainArtists
        }
      }
    }
  }
`);
type CurrentlyPlayingInformationProps = {
  playerUrl?: string | null;
  webRadioId: StationsEnum;
};

const CurrentlyPlayingInformation = ({
  playerUrl,
  webRadioId,
}: CurrentlyPlayingInformationProps) => {
  const { data, startPolling, stopPolling } = useQuery(query, {
    variables: { station: webRadioId },
    skip: !playerUrl || !webRadioId,
  });

  if (!playerUrl || !webRadioId) {
    return null;
  }

  const songInformation = data?.live?.song;

  return (
    <div>
      <iframe src={playerUrl} className="w-full rounded" />
      <Snippet>{`${songInformation?.track?.mainArtists} ${songInformation?.track?.title}`}</Snippet>
    </div>
  );
};

export default CurrentlyPlayingInformation;
