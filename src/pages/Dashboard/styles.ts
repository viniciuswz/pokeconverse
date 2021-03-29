import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {ApiResponse} from './index';

export const Container = styled.View``;

export const TextTitle = styled.Text`
  font-size: 30px;
  color: #2d353d;
  font-weight: bold;
  margin: 16px 0;
`;

export const List = styled(FlatList as new () => FlatList<ApiResponse>)`
  padding: 0 16px;
  /* flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
   */
`;
