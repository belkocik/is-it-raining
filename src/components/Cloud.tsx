import { Img, interpolate, useCurrentFrame } from 'remotion';
import { Images } from '../assets/';
import styled from 'styled-components';
import { ReactNode } from 'react';

type CloudProps = {
  translateX?: number;
  translateY?: number;
  scale?: number;
  rotate?: number;
  children?: ReactNode;
};

export const Cloud: React.FC<CloudProps> = ({
  translateX = 0,
  translateY = 0,
  scale = 1,
  rotate = 0,
  children,
}) => {
  const frame = useCurrentFrame();
  const animatedTranslateX = interpolate(
    frame,
    [0, 120],
    [translateX, translateX - 75]
  );

  return (
    <Container
      style={{
        transform: `scale(${scale}) rotate(${rotate}deg) translateX(${animatedTranslateX}px) translateY(${translateY}px) `,
      }}
    >
      <BaseCloud src={Images.Cloud} />
      {children}
    </Container>
  );
};

export const BaseCloud = styled(Img)`
  width: 457px;
  height: 295px;
`;

const Container = styled.div`
  position: absolute;
`;
