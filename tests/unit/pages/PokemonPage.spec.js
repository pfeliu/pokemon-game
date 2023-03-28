import PokemonPage from '@/pages/PokemonPage.vue';
import { mount, shallowMount } from '@vue/test-utils';
import { pokemons } from '../mocks/pokemons.mocks';
import { wrap } from 'module';

describe('Pokemon page', () => {
  let wrapper;
  //let mixPokemonArraySpy;

  beforeEach(() => {
    // mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray');
    wrapper = shallowMount(PokemonPage);
  });
  test('should match eith snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should call mixedPoekmon array on mounted', () => {
    const mixPokemonArraySpy = jest.spyOn(
      PokemonPage.methods,
      'mixPokemonArray'
    );
    const wrapper = shallowMount(PokemonPage);
    expect(mixPokemonArraySpy).toHaveBeenCalled();
  });

  test('should match with snapshot when load data', () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: '',
        };
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should show components Pokemon picture and options', () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: '',
        };
      },
    });

    const picture = wrapper.find('pokemon-picture-stub');
    const options = wrapper.find('pokemon-options-stub');

    expect(picture.exists()).toBeTruthy();
    expect(options.exists()).toBeTruthy();

    expect(picture.attributes('pokemonid')).toBe('11');

    expect(options.attributes('pokemons')).toBeTruthy();
  });

  test('should check answer method', async () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: '',
        };
      },
    });

    await wrapper.vm.checkAnswer(11);

    expect(wrapper.find('h2').exists()).toBeTruthy();

    expect(wrapper.vm.showPokemon).toBe(true);

    expect(wrapper.find('h2').text()).toBe(
      `Well done!!, it's ${pokemons[0].name}`
    );

    await wrapper.vm.checkAnswer(1);

    expect(wrapper.vm.message).toBe(`Ooops!!! no!!!, was ${pokemons[0].name}`);
  });
});
