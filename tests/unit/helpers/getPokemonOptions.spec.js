import getPokemonOptions, {
  getPokemons,
  getPokemonsNames,
} from '@/helpers/getPokemonOptions';

describe('getPokemonOptions', () => {
  test('should return a numbers array', () => {
    const pokemons = getPokemons();
    expect(pokemons.length).toBe(650);
    expect(pokemons[0]).toBe(1);
    expect(pokemons[649]).toBe(650);
  });

  test('should an element array by four', async () => {
    const pokemons = await getPokemonsNames([1, 2, 3, 4]);

    expect(pokemons).toStrictEqual([
      { name: 'bulbasaur', id: 1 },
      { name: 'ivysaur', id: 2 },
      { name: 'venusaur', id: 3 },
      { name: 'charmander', id: 4 },
    ]);
  });

  test('should return a mixed array', async () => {
    const pokemons = await getPokemonOptions();
    expect(pokemons.length).toBe(4);
    expect(pokemons).toStrictEqual([
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
    ]);
  });
});
