import React, {useMemo} from 'react';
import {lighten, shade} from 'polished';

import {
  PokemonItem,
  PokemonItemTitle,
  PokemonItemId,
  PokemonStatus,
  PokemonStatusItem,
  PokemonItemTop,
  PokemonItemBottom,
  PokemonItemImage,
} from './styles';

import getPokemonTypeColor from '../../utils/getPokemonTypeColor';

// import TPokemon from '../../typescript/types/TPokemon';

interface PokemonPropsDTO {
  pokemonInfo: {
    name: string;
    id: number;
    types: Array<{
      slot: number;
      type: {
        name: string;
      };
    }>;
    image_url?: string;
  };
}

const PokemonListItem: React.FC<PokemonPropsDTO> = ({pokemonInfo}) => {
  const {id, image_url, name, types} = pokemonInfo;

  const parsedId = useMemo(() => {
    const toString = String(id);
    return `#${toString.padStart(3, '0')}`;
  }, [id]);

  const parsedPokemonColor = useMemo(() => {
    const pokemonTypes = pokemonInfo.types;
    const pokemonTypeParsed = pokemonTypes.length
      ? pokemonTypes[0].type.name
      : 'normal';

    const pokemonColor = getPokemonTypeColor(pokemonTypeParsed);
    const lightColor = lighten(0.09, pokemonColor);
    const mediumColor = shade(0.25, pokemonColor);

    const color = {
      default: pokemonColor,
      light: lightColor,
      medium: mediumColor,
    };

    return color;
  }, [pokemonInfo.types]);

  return (
    <PokemonItem color={parsedPokemonColor}>
      <PokemonItemTop>
        <PokemonItemTitle>{name}</PokemonItemTitle>
        <PokemonItemId color={parsedPokemonColor}>{parsedId}</PokemonItemId>
      </PokemonItemTop>
      <PokemonItemBottom>
        <PokemonStatus>
          {types.map(item => (
            <PokemonStatusItem
              key={`${id}-${name}-${item.type.name} `}
              color={parsedPokemonColor}>
              {item.type.name}
            </PokemonStatusItem>
          ))}
        </PokemonStatus>
        <PokemonItemImage
          source={{
            uri: image_url,
          }}
          resizeMode="contain"
        />
      </PokemonItemBottom>
    </PokemonItem>
  );
};

export default PokemonListItem;
