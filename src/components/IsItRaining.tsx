import { Sequence, useVideoConfig } from 'remotion';
import { Intro, Result } from '../sequences';
import { WeatherState } from '../common';

export const IsItRaining = () => {
  const { fps } = useVideoConfig();
  return (
    <>
      <Sequence from={0} durationInFrames={3 * fps} name='Intro'>
        <Intro />
      </Sequence>
      <Sequence from={3 * fps} durationInFrames={4 * fps} name='Result'>
        <Result temperature={10} weatherState={WeatherState.Snowing} />
      </Sequence>
    </>
  );
};
