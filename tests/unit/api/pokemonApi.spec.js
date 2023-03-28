import pokemonApi from '@/api/pokemonApi';

describe('pokemonApi', () => {
  test('should Should check setting for poke api', () => {
    expect(pokemonApi.defaults.baseURL).toBe(
      'https://pokeapi.co/api/v2/pokemon'
    );
  });
});
