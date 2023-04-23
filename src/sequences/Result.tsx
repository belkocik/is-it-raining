import { WeatherState } from '../common';
import {
  Cloud,
  Typography,
  VideoBackground,
  WeatherBaseImage,
} from '../components';
import { COMPOSITION_CONFIG } from '../config';
import { useTranslations } from '../hooks';
import { useWeatherStateName } from '../hooks/useWeatherStateName';
import styled from 'styled-components';

type ResultProps = {
  weatherState: WeatherState;
  temperature: number;
};

export const Result: React.FC<ResultProps> = ({
  weatherState,
  temperature,
}) => {
  const cloudPositions = [
    {
      scale: 0.7,
      translateX: -740,
      translateY: -1160,
    },
    {
      scale: 1.3,
      translateX: 450,
      translateY: -660,
    },
    {
      scale: 0.85,
      translateX: 0,
      translateY: -600,
    },
    {
      scale: 0.7,
      rotate: 150,
      translateX: -350,
      translateY: -1030,
    },
    {
      scale: 0.45,
      translateX: -1130,
      translateY: -270,
    },
    {
      scale: 0.45,
      translateX: -1200,
      translateY: 1020,
    },
  ];

  const { VIDEO } = COMPOSITION_CONFIG;
  const T = useTranslations();
  const stateName = useWeatherStateName(weatherState);
  return (
    <VideoBackground backgroundColor={VIDEO.BACKGROUND_COLOR}>
      <Container>
        <WeatherBaseImage weatherState={weatherState} />
        <TextContainer>
          <Typography.Heading>
            {temperature}
            {T.common.celsius}
          </Typography.Heading>
          <Typography.Heading>{stateName}</Typography.Heading>
        </TextContainer>
      </Container>
      {cloudPositions.map((position, index) => (
        <Cloud key={index} {...position} />
      ))}
    </VideoBackground>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 300px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;
