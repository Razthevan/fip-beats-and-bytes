import { useRef } from 'react';
import { useQuery } from '@apollo/client';
import { Button, Snippet } from '@nextui-org/react';

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
  const iFrameRef = useRef<HTMLIFrameElement>(null);
  const { data, refetch } = useQuery(query, {
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

  return (
    <div>
      <iframe ref={iFrameRef} src={playerUrl} className="w-full rounded" />
      <div className="py-5">
        <Snippet
          className="w-full"
          variant="flat"
          disableCopy={!songTitleAndArtists}
          size="lg"
        >
          {songTitleAndArtists}
        </Snippet>
      </div>
      <Button
        size="lg"
        fullWidth
        variant="ghost"
        className="mt-10 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        onClick={() => {
          if (iFrameRef.current) {
            refetch();
            iFrameRef.current.src = playerUrl;
          }
        }}
      >
        Update
      </Button>
    </div>
  );
};

export default CurrentlyPlayingInformation;
