import { mount } from '@vue/test-utils';
import { EOS_1K_FILLED, EOS_1K_OUTLINED, EOS_TYPING_ANIMATED, EOS_10MP } from '../lib/icons/index';

describe('Filled SVG test', () => {
  let wrapper = mount(EOS_1K_FILLED);
  // test that the svg is rendered
  it('should have the expected svg', async () => {
    expect(wrapper.find('svg').exists()).toBe(true);
  });

  it('should have the expected default props', async () => {
    const randomSize = Math.floor(Math.random()) + 1
    await wrapper.setProps({ size: `${randomSize}` })
    expect(wrapper.attributes('width')).toBe(`${randomSize}`);
    expect(wrapper.attributes('height')).toBe(`${randomSize}`);
  });

  // test the fill color of svg 
  it('should have the expected fill color', async () => {
    await wrapper.setProps({ color: '#fff' })
    expect(wrapper.find('svg').attributes('fill')).toBe('#fff');
  });

  // test the rotation of svg
  it('should have the expected rotation', async () => {
    const randomDegree = Math.floor(Math.random() * 360) + 1
    await wrapper.setProps({ rotate: `${randomDegree}` })
    expect(wrapper.find('svg').attributes('transform')).toBe(`rotate(${randomDegree}) translate(0, 0) scale(1, 1)`);
  });

  // test the horizontalFlip of svg
  it('should have the expected horizontalFlip', async () => {
    await wrapper.setProps({ horizontalFlip: true, verticalFlip: false, rotate: '0' })
    expect(wrapper.find('svg').attributes('transform')).toBe(`rotate(0) translate(0, 0) scale(-1, 1)`);
  });

  // test the verticalFlip of svg
  it('should have the expected verticalFlip', async () => {
    await wrapper.setProps({ verticalFlip: true, horizontalFlip: false, rotate: '0' })
    expect(wrapper.find('svg').attributes('transform')).toBe(`rotate(0) translate(0, 0) scale(1, -1)`);
  });
})

describe('Outlined SVG test', () => {
  let wrapper = mount(EOS_1K_OUTLINED);
  // test that the svg is rendered
  it('should have the expected svg', async () => {
    expect(wrapper.find('svg').exists()).toBe(true);
  });

  it('should have the expected default props', async () => {
    const randomSize = Math.floor(Math.random()) + 1
    await wrapper.setProps({ size: `${randomSize}` })
    expect(wrapper.attributes('width')).toBe(`${randomSize}`);
    expect(wrapper.attributes('height')).toBe(`${randomSize}`);
  });

  // test the fill color of svg 
  it('should have the expected fill color', async () => {
    await wrapper.setProps({ color: '#fff' })
    expect(wrapper.find('svg').attributes('fill')).toBe('#fff');
  });

  // test the rotation of svg
  it('should have the expected rotation', async () => {
    const randomDegree = Math.floor(Math.random() * 360) + 1
    await wrapper.setProps({ rotate: `${randomDegree}` })
    expect(wrapper.find('svg').attributes('transform')).toBe(`rotate(${randomDegree}) translate(0, 0) scale(1, 1)`);
  });

  // test the horizontalFlip of svg
  it('should have the expected horizontalFlip', async () => {
    await wrapper.setProps({ horizontalFlip: true, verticalFlip: false, rotate: '0' })
    expect(wrapper.find('svg').attributes('transform')).toBe(`rotate(0) translate(0, 0) scale(-1, 1)`);
  });

  // test the verticalFlip of svg
  it('should have the expected verticalFlip', async () => {
    await wrapper.setProps({ verticalFlip: true, horizontalFlip: false, rotate: '0' })
    expect(wrapper.find('svg').attributes('transform')).toBe(`rotate(0) translate(0, 0) scale(1, -1)`);
  });
})

describe('Animated SVG test', () => {
  let wrapper = mount(EOS_TYPING_ANIMATED);
  // test that the svg is rendered
  it('should have the expected svg', async () => {
    expect(wrapper.find('svg').exists()).toBe(true);
  });

  it('should have the expected default props', async () => {
    const randomSize = Math.floor(Math.random()) + 1
    await wrapper.setProps({ size: `${randomSize}` })
    expect(wrapper.attributes('width')).toBe(`${randomSize}`);
    expect(wrapper.attributes('height')).toBe(`${randomSize}`);
  });

  // test the fill color of svg 
  it('should have the expected fill color', async () => {
    await wrapper.setProps({ color: '#fff' })
    expect(wrapper.find('svg').attributes('fill')).toBe('#fff');
  });

  // test the rotation of svg
  it('should have the expected rotation', async () => {
    const randomDegree = Math.floor(Math.random() * 360) + 1
    await wrapper.setProps({ rotate: `${randomDegree}` })
    expect(wrapper.find('svg').attributes('transform')).toBe(`rotate(${randomDegree}) translate(0, 0) scale(1, 1)`);
  });

  // test the horizontalFlip of svg
  it('should have the expected horizontalFlip', async () => {
    await wrapper.setProps({ horizontalFlip: true, verticalFlip: false, rotate: '0' })
    expect(wrapper.find('svg').attributes('transform')).toBe(`rotate(0) translate(0, 0) scale(-1, 1)`);
  });

  // test the verticalFlip of svg
  it('should have the expected verticalFlip', async () => {
    await wrapper.setProps({ verticalFlip: true, horizontalFlip: false, rotate: '0' })
    expect(wrapper.find('svg').attributes('transform')).toBe(`rotate(0) translate(0, 0) scale(1, -1)`);
  });
})

describe('Common (outlined/filled) SVG test', () => {
  let wrapper = mount(EOS_10MP);

  /*Tests for Outlined SVG component*/

  // test that the svg is rendered
  it('should have the expected svg', async () => {
    await wrapper.setProps({ theme: `outlined` })
    expect(wrapper.find('svg').exists()).toBe(true);
  });

  // test the fill color of svg 
  it('should have the expected fill color', async () => {
    await wrapper.setProps({ theme: `outlined`, color: '#fff' })
    expect(wrapper.find('svg').attributes('fill')).toBe('#fff');
  });

  // test the rotation of svg
  it('should have the expected rotation', async () => {
    const randomDegree = Math.floor(Math.random() * 360) + 1
    await wrapper.setProps({ theme: `outlined`, rotate: `${randomDegree}` })
    expect(wrapper.find('svg').attributes('transform')).toBe(`rotate(${randomDegree}) translate(0, 0) scale(1, 1)`);
  });

  // test the horizontalFlip of svg
  it('should have the expected horizontalFlip', async () => {
    await wrapper.setProps({ theme: `outlined`, horizontalFlip: true, verticalFlip: false, rotate: '0' })
    expect(wrapper.find('svg').attributes('transform')).toBe(`rotate(0) translate(0, 0) scale(-1, 1)`);
  });

  // test the verticalFlip of svg
  it('should have the expected verticalFlip', async () => {
    await wrapper.setProps({ theme: `outlined`, verticalFlip: true, horizontalFlip: false, rotate: '0' })
    expect(wrapper.find('svg').attributes('transform')).toBe(`rotate(0) translate(0, 0) scale(1, -1)`);
  });

  /*Tests for filled SVG component*/

  // test that the svg is rendered
  it('should have the expected svg', async () => {
    await wrapper.setProps({ theme: `filled` })
    expect(wrapper.find('svg').exists()).toBe(true);
  });

  // test the fill color of svg 
  it('should have the expected fill color', async () => {
    await wrapper.setProps({ theme: `filled`, color: '#fff' })
    expect(wrapper.find('svg').attributes('fill')).toBe('#fff');
  });

  // test the rotation of svg
  it('should have the expected rotation', async () => {
    const randomDegree = Math.floor(Math.random() * 360) + 1
    await wrapper.setProps({ theme: `filled`, rotate: `${randomDegree}`, horizontalFlip: false, verticalFlip: false, })
    expect(wrapper.find('svg').attributes('transform')).toBe(`rotate(${randomDegree}) translate(0, 0) scale(1, 1)`);
  });

  // test the horizontalFlip of svg
  it('should have the expected horizontalFlip', async () => {
    await wrapper.setProps({ theme: `filled`, horizontalFlip: true, verticalFlip: false, rotate: '0' })
    expect(wrapper.find('svg').attributes('transform')).toBe(`rotate(0) translate(0, 0) scale(-1, 1)`);
  });

  // test the verticalFlip of svg
  it('should have the expected verticalFlip', async () => {
    await wrapper.setProps({ theme: `filled`, verticalFlip: true, horizontalFlip: false, rotate: '0' })
    expect(wrapper.find('svg').attributes('transform')).toBe(`rotate(0) translate(0, 0) scale(1, -1)`);
  });
})