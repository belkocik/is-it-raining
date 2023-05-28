import styled from 'styled-components';
import { COMPOSITION_CONFIG } from '../../config';

export const Heading = styled.h1`
  color: ${COMPOSITION_CONFIG.TEXT.COLOR.REGULAR};
  font-size: ${COMPOSITION_CONFIG.TEXT.FONT_SIZE.LARGE};
  font-weight: bold;
  font-family: 'Comic Sans', cursive, sans-serif;
`;
