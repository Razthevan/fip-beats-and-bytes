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
  const songTitleAndArtists = songInformation?.track
    ? `${songInformation?.track?.mainArtists} ${songInformation?.track?.title}`
    : false;
  null;
  console.log('songTitleAndArtists: ', songTitleAndArtists);

  return (
    <div>
      <iframe src={playerUrl} className="w-full rounded" />
      <div className="pt-5">
        <Snippet variant="flat" disableCopy={!songTitleAndArtists} size="lg">
          {songTitleAndArtists}
        </Snippet>
      </div>
    </div>
  );
};

export default CurrentlyPlayingInformation;
