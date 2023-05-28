import styled from 'styled-components';
import { Typography, VideoBackground } from '../components';
import { COMPOSITION_CONFIG } from '../config';
import { Img } from 'remotion';
import { Images } from '../assets';
import { useTranslations } from '../hooks';

type Props = {};

export const Outro = (props: Props) => {
  const { VIDEO } = COMPOSITION_CONFIG;
  const T = useTranslations();
  return (
    <VideoBackground backgroundColor={VIDEO.OUTRO_BACKGROUND_COLOR}>
      <Border>
        <Container>
          <Codemask src={Images.Codemask} />
          <Section>
            <Typography.Regular>{T.outro.question}</Typography.Regular>
            <DiscordContainer>
              <Disord src={Images.Discord} />
            </DiscordContainer>
            <Typography.Regular>{T.outro.discord}</Typography.Regular>
            <Typography.Regular>Discord URL</Typography.Regular>
          </Section>
          <Typography.Note>{T.outro.note}</Typography.Note>
        </Container>
      </Border>
    </VideoBackground>
  );
};

const Container = styled.div`
  max-width: 630px;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 200px;
  margin-bottom: 200px;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

const Border = styled.div`
  position: absolute;
  border: 9px solid white;
  top: 70px;
  bottom: 70px;
  left: 70px;
  right: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Codemask = styled(Img)`
  width: 324px;
  height: 251px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const Disord = styled(Img)`
  width: 133px;
  height: 101px;
`;

const DiscordContainer = styled.div`
  height: 250px;
  display: flex;
  align-items: center;
`;
