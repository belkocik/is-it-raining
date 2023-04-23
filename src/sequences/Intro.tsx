import { Cloud, VideoBackground, VideoTitleBox } from '../components';
import { COMPOSITION_CONFIG } from '../config';

type Props = {};

export const Intro: React.FC = (props: Props) => {
  const { VIDEO } = COMPOSITION_CONFIG;

  const cloudPositions = [
    {
      scale: 0.7,
      translateX: -440,
      translateY: -1160,
    },
    {
      scale: 1.3,
      translateX: 350,
      translateY: -660,
    },
    {
      scale: 0.45,
      translateX: 50,
      translateY: -1460,
    },
    {
      scale: 0.7,
      rotate: 150,
      translateX: 1000,
      translateY: -1030,
    },
    {
      scale: 0.45,
      translateX: -830,
      translateY: -270,
    },
    {
      scale: 0.45,
      translateX: -520,
      translateY: 1020,
    },
    {
      scale: 0.7,
      translateX: 770,
      translateY: 20,
    },
    {
      scale: 1.4,
      rotate: -10,
      translateX: -520,
      translateY: 340,
    },
    {
      scale: 1.3,
      translateX: 220,
      translateY: 680,
    },
    {
      scale: 0.45,
      translateX: 200,
      translateY: 740,
    },
    {
      scale: 1.3,
      translateX: 390,
      translateY: 300,
    },
  ];

  return (
    <VideoBackground backgroundColor={VIDEO.BACKGROUND_COLOR}>
      <VideoTitleBox />
      {cloudPositions.map((position, index) => (
        <Cloud key={index} {...position} />
      ))}
    </VideoBackground>
  );
};
