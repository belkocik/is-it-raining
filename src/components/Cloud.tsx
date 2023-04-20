import { Img } from 'remotion';
import { Images } from '../assets/';
import styled from 'styled-components';

type CloudProps = {
  translateX?: number;
  translateY?: number;
  scale?: number;
  rotate?: number;
};

export const Cloud: React.FC<CloudProps> = ({
  translateX = 0,
  translateY = 0,
  scale = 1,
  rotate = 0,
}) => {
  return (
    <BaseCloud
      src={Images.Cloud}
      style={{
        transform: `scale(${scale}) rotate(${rotate}deg) translateX(${translateX}px) translateY(${translateY}px) `,
      }}
    />
  );
};

export const BaseCloud = styled(Img)`
  position: absolute;
  width: 457px;
  height: 295px;
`;
