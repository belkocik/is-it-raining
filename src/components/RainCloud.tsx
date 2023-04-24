import { FC, Fragment } from 'react';
import { Cloud } from './Cloud';
import { Rain } from './Rain';
import { Loop } from 'remotion';

type RainCloudProps = {
  translateX?: number;
  translateY?: number;
  scale?: number;
  rotate?: number;
};

export const RainCloud: FC<RainCloudProps> = ({
  translateX = 0,
  translateY = 0,
  scale = 1,
  rotate = 0,
}) => {
  const rainPosition = [
    {
      bottom: -60,
      left: 90,
    },
    {
      bottom: -60,
      left: 190,
    },
    {
      bottom: -60,
      left: 290,
    },
    {
      bottom: -120,
      left: 140,
    },
    {
      bottom: -120,
      left: 240,
    },
    {
      bottom: -120,
      left: 340,
    },
    {
      bottom: -180,
      left: 200,
    },
    {
      bottom: -180,
      left: 300,
    },
  ];

  return (
    <Cloud
      translateX={translateX}
      translateY={translateY}
      scale={scale}
      rotate={rotate}
    >
      <Loop durationInFrames={30} times={Infinity}>
        {rainPosition.map((position, index) => {
          return (
            <Fragment key={index}>
              <Rain bottom={position.bottom} left={position.left} opacity={1} />
              <Rain
                slower
                bottom={position.bottom - 30}
                left={position.left - 65}
                opacity={0.7}
              />
            </Fragment>
          );
        })}
      </Loop>
    </Cloud>
  );
};
