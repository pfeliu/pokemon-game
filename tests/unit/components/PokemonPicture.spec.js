import PokemonPicture from '@/components/PokemonPicture.vue';
import { shallowMount } from '@vue/test-utils';

describe('Pokemon Picture', () => {
  test('should match with snapshot', () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 1,
        showPokemon: false,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should show hidden img and pokemon number 100', () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: false,
      },
    });

    const [img1, img2] = wrapper.findAll('img');

    expect(img1.exists()).toBeTruthy();
    expect(img2).toBe(undefined);

    expect(img1.classes('hidden-pokemon')).toBeTruthy();

    expect(img1.attributes('src')).toBe(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg'
    );
  });

  test('should show pokemon img if is showPokemon = true', () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: true,
      },
    });

    const img = wrapper.find('img');

    expect(img.exists()).toBe(true);

    expect(img.classes('fade-in')).toBe(true);
  });
});
