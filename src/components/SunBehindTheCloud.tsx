import { FC } from 'react';
import { Img } from 'remotion';
import { Sun } from './Sun';
import styled from 'styled-components';
import { Cloud } from './Cloud';

type SunBehindTheCloudProps = {
  translateX: number;
  translateY: number;
};

export const SunBehindTheCloud: FC<SunBehindTheCloudProps> = ({
  translateX,
  translateY,
}) => {
  return (
    <Cloud translateX={translateX} translateY={translateY}>
      <PositionedSun scale={0.8} />
    </Cloud>
  );
};

const PositionedSun = styled(Sun)`
  right: -90px;
  bottom: 8px;
  z-index: -1;
`;
