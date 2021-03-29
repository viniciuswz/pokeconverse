import React, {useEffect, useState} from 'react';

import {Container, TextTitle, List} from './styles';

import PokemonListItem from '../../components/PokemonListItem';

import api from '../../services/api';

export interface ApiResponse {
  id: number;
  name: string;
  types: Array<{
    slot: number;
    type: {
      name: string;
    };
  }>;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}

const Dashboard: React.FC = () => {
  const [allPokemon, setAllPokemon] = useState<ApiResponse[]>([]);

  useEffect(() => {
    setAllPokemon([]);
    async function getPokemons() {
      const limitPokemon = 150;

      for (let i = 1; i <= limitPokemon; i++) {
        const url = `pokemon/${i}`;
        console.log(url);
        try {
          await api.get<ApiResponse>(url).then(response => {
            setAllPokemon(value => {
              return [...value, response.data];
            });
          });
        } catch (error) {
          console.error(`callback error on /${url}: ${error}`);
        }
      }
    }

    getPokemons();
  }, []);

  return (
    <Container>
      <List
        ListHeaderComponent={<TextTitle>Pokeconverse</TextTitle>}
        data={allPokemon}
        keyExtractor={pokemon => pokemon.name}
        renderItem={({item: ApiResponse}) => {
          const {id, name, types, sprites} = ApiResponse;

          const image_url = sprites.other['official-artwork'].front_default;
          return (
            <PokemonListItem
              pokemonInfo={{
                id,
                name,
                types,
                image_url,
              }}
            />
          );
        }}
        numColumns={2}
      />
    </Container>
  );
};

export default Dashboard;
