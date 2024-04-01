import { useRef, useState, useCallback, useEffect } from 'react';
import classNames from 'classnames';
import { Button, Snippet } from '@nextui-org/react';
import { NetworkStatus, useQuery } from '@apollo/client';

import { graphql } from '@/app/lib/graphql';
import { StationsEnum } from '@/app/lib/graphql/graphql';
import { useInterval } from '@/app/lib/hooks/useInterval';

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
  webRadioId: StationsEnum;
  playerUrl?: string | null;
};

const CurrentlyPlayingInformation = ({
  playerUrl,
  webRadioId,
}: CurrentlyPlayingInformationProps) => {
  const iFrameRef = useRef<HTMLIFrameElement>(null);
  const [isOutdated, setIsOutdated] = useState<Boolean>(false);

  const { data, loading, networkStatus, refetch } = useQuery(query, {
    variables: { station: webRadioId },
    skip: !playerUrl || !webRadioId,
  });

  const song = data?.live?.song;
  const songInformation = song?.track;
  const isLoading = loading || networkStatus === NetworkStatus.refetch;

  useInterval(
    () => {
      if (!song?.end) {
        return;
      }
      const currentTime = new Date().getTime();
      // Transform Epoch seconds to milliseconds
      const songEnd = new Date(song.end * 1000).getTime();
      const isEndInThePast = currentTime > songEnd;
      setIsOutdated(isEndInThePast);
    },
    !isOutdated ? 1000 : null
  );
  useEffect(() => {
    // If the user changes the player, reset the outdated status
    setIsOutdated(false);
  }, [playerUrl]);

  if (!playerUrl || !webRadioId) {
    return null;
  }

  const songTitleAndArtists = songInformation
    ? `${songInformation?.mainArtists} ${songInformation?.title}`
    : false;

  return (
    <div>
      <iframe ref={iFrameRef} src={playerUrl} className="w-full rounded" />
      <div className="py-5 max-w-96">
        <Snippet
          size="lg"
          variant="flat"
          className="w-full "
          classNames={{ pre: 'text-wrap' }}
          disableCopy={!songTitleAndArtists}
        >
          {songTitleAndArtists}
        </Snippet>
      </div>
      <Button
        size="lg"
        fullWidth
        variant="ghost"
        disabled={isLoading}
        onClick={() => {
          refetch().then(() => {
            setIsOutdated(false);
            if (iFrameRef.current) {
              iFrameRef.current.src = playerUrl as string;
            }
          });
        }}
        className={classNames(
          'mt-10 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg',
          {
            'animate-pulse': isOutdated,
          }
        )}
      >
        Update
      </Button>
    </div>
  );
};

export default CurrentlyPlayingInformation;
