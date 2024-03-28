import { useQuery } from '@apollo/client';
import { Button, Spacer } from '@nextui-org/react';

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
      <Button
        size="lg"
        fullWidth
        variant="ghost"
        className="mt-10 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        onPress={() => {
          navigator.clipboard.writeText(
            `${songInformation?.track?.mainArtists} ${songInformation?.track?.title}`
          );
        }}
        disabled={!songInformation?.track?.mainArtists}
      >
        Copy song information
      </Button>
    </div>
  );
};

export default CurrentlyPlayingInformation;
