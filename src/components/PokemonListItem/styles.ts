import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

interface PokemonTypeProps {
  color: {
    default: string;
    light: string;
    medium: string;
  };
}

export const PokemonItem = styled.View<PokemonTypeProps>`
  width: ${Dimensions.get('window').width / 2 - 24}px;
  height: 128px;
  background-color: ${props => props.color.default};
  border-radius: 16px;
  padding: 16px;
  margin: 0 4px;
  margin-bottom: 8px;
`;
export const PokemonItemTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const PokemonItemBottom = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`;

export const PokemonItemTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
  line-height: 19px;
  color: #fff;
  margin-bottom: 5px;
  text-transform: capitalize;
  margin-top: 16px;
`;

export const PokemonItemId = styled.Text<PokemonTypeProps>`
  font-size: 15px;
  font-weight: 700;
  line-height: 16px;
  color: ${props => props.color.medium};
`;

export const PokemonStatus = styled.View``;

export const PokemonStatusItem = styled.Text<PokemonTypeProps>`
  background-color: ${props => props.color.light};
  font-size: 13px;
  align-self: flex-start;
  padding: 3px 10px;
  border-radius: 10px;
  color: #fff;
  margin-top: 4px;
  text-transform: capitalize;
`;

export const PokemonItemImage = styled.Image`
  width: 63px;
  height: 63px;
`;
