import { WeatherState } from '../common';
import { Img } from 'remotion';
import { Images } from '../assets';
import styled from 'styled-components';

type WeatherBaseImageProps = {
  weatherState: WeatherState;
};

export const WeatherBaseImage: React.FC<WeatherBaseImageProps> = ({
  weatherState,
}) => {
  switch (weatherState) {
    case WeatherState.Raining:
      return <Umbrella src={Images.Umbrella} />;
    case WeatherState.Thunderstorm:
      return <Umbrella src={Images.Umbrella} />;
    case WeatherState.Snowing:
      return <ChristmasTree src={Images.ChristmasTree} />;
    case WeatherState.Sunny:
    case WeatherState.Cloudy:
      return <Sunbeds src={Images.Sunbeds} />;
    default:
      return null;
  }
};

const Umbrella = styled(Img)`
  width: 656px;
  height: 496px;
`;

const ChristmasTree = styled(Img)`
  width: 409px;
  height: 627px;
`;
const Sunbeds = styled(Img)`
  width: 814px;
  height: 465px;
`;
