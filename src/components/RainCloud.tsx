import { FC, Fragment } from 'react';
import { Cloud } from './Cloud';
import { Rain } from './Rain';
import { Loop } from 'remotion';
import { Thunder } from './Thunder';

type RainCloudProps = {
  translateX?: number;
  translateY?: number;
  scale?: number;
  rotate?: number;
  withThunder?: boolean;
};

export const RainCloud: FC<RainCloudProps> = ({
  translateX = 0,
  translateY = 0,
  scale = 1,
  rotate = 0,
  withThunder = false,
}) => {
  console.log('🚀 ~ file: RainCloud.tsx:22 ~ withThunder:', withThunder);
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
      {withThunder && (
        <Loop durationInFrames={60} times={Infinity}>
          <Thunder bottom={-150} left={200} />
          <Thunder bottom={-120} left={70} scale={0.8} />
        </Loop>
      )}
    </Cloud>
  );
};
