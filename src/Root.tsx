import { Composition } from 'remotion';
import { IsItRaining } from './components';
import { VIDEO_CONFIG } from './config';
import './reset.css';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  const { FPS, VIDEO_DURATION_IN_FRAMES, VIDEO_HEIGHT, VIDEO_ID, VIDEO_WIDTH } =
    VIDEO_CONFIG;
  return (
    <>
      <Composition
        id={VIDEO_ID}
        component={IsItRaining}
        durationInFrames={VIDEO_DURATION_IN_FRAMES}
        fps={FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
      />
    </>
  );
};
