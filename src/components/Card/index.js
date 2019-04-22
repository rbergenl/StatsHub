import { Dimensions } from 'react-native';
import styled from 'styled-components';
const { width, height } = Dimensions.get('window')

const Card = styled.View`
  width: ${width - 40}
  margin: 20px
  padding: 10px
  shadowColor: #000000
  shadowOpacity: 0.5
  shadowRadius: 3px
  shadowOffset: 10px 10px
  /* elevation should be used for android */
  elevation: 3
  borderRadius: 4px
  alignItems: center
  justifyContent: center
  flex: 1
  backgroundColor: #ffffff
  overflow: visible
`;

export default Card
