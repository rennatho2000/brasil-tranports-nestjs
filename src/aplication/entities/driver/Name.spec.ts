import { Name } from './Name';

describe('Drive content', () => {
  it('Shoud be able to create a Driver Name', () => {
    const name = new Name('Driver criado');

    expect(name).toBeTruthy();
  });

  it('Should not be able to create a driver name with less than 10 characters', () => {
    expect(() => new Name('a'.repeat(9))).toThrow();
  });
});

it('should not be able to create a driver name with more than 36 characters', () => {
  expect(() => new Name('a'.repeat(36))).toThrow();
});
