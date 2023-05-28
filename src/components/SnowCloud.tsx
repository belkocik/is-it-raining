import { FC, Fragment } from 'react';
import { Cloud } from './Cloud';
import { Loop } from 'remotion';
import { Snow } from './Snow';

type SnowCloudProps = {
  translateX?: number;
  translateY?: number;
  scale?: number;
  rotate?: number;
};

export const SnowCloud: FC<SnowCloudProps> = ({
  translateX = 0,
  translateY = 0,
  scale = 1,
  rotate = 0,
}) => {
  const snowPosition = [
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
      <Loop durationInFrames={45} times={Infinity}>
        {snowPosition.map((position, index) => {
          return (
            <Fragment key={index}>
              <Snow bottom={position.bottom} left={position.left} opacity={1} />
              <Snow
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
