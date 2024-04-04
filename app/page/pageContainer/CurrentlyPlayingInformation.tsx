import { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';
import { NetworkStatus, useQuery } from '@apollo/client';
import { Button, Tooltip, Snippet } from '@nextui-org/react';

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
          className="w-full"
          classNames={{ pre: 'text-pretty	break-words' }}
          disableCopy={!songTitleAndArtists}
        >
          {songTitleAndArtists}
        </Snippet>
      </div>
      <Tooltip
        size="lg"
        closeDelay={0}
        placement="top-start"
        isOpen={!!isOutdated}
        content="Outdated info! Give me a click!"
        classNames={{ content: 'bg-neutral-800 text-warning font-bold' }}
        motionProps={{
          variants: {
            exit: {
              opacity: 0,
              transition: {
                duration: 0.1,
                ease: 'easeIn',
              },
            },
            enter: {
              opacity: 1,
              transition: {
                duration: 0.15,
                ease: 'easeOut',
              },
            },
          },
        }}
      >
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
          className={classNames('mt-10 text-white shadow-lg', {
            'animate-linear mb-20 bg-gradient-to-r from-dark via-pink-500 to-dark bg-[length:200%_auto]':
              isOutdated,
          })}
        >
          Update
        </Button>
      </Tooltip>
    </div>
  );
};

export default CurrentlyPlayingInformation;
