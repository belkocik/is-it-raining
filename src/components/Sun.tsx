import { FC } from 'react';
import { Img, useCurrentFrame, interpolate } from 'remotion';
import { Images } from '../assets';
import styled from 'styled-components';

type SunProps = {
  translateX?: number;
  translateY?: number;
  scale: number;
  className?: string;
};

export const Sun: FC<SunProps> = ({
  scale = 1,
  className,
  translateX = 0,
  translateY = 0,
}) => {
  const frame = useCurrentFrame();
  const animatedRotation = interpolate(frame, [0, 120], [0, 45]);
  return (
    <Container
      style={{
        transform: `translateX(${translateX}px) translateY(${translateY}px)`,
      }}
      className={className}
    >
      <BaseSun
        src={Images.Sun}
        style={{
          transform: `scale(${scale}) rotate(${animatedRotation}deg)`,
        }}
      />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
`;

const BaseSun = styled(Img)`
  width: 374px;
  height: 374px;
`;
