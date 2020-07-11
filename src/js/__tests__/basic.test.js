/* eslint-disable no-unused-vars */
import Character from '../basic';

test('To be name', () => {
  const result = new Character('Player', 'Bowerman');
  expect(result).toHaveProperty('name', 'Player');
});

test('To be Throw \'Имя должно быть не меньше 2 и не больше 10 символов\'', () => {
  expect(() => { const player = new Character('P', 'Bowerman'); }).toThrowError('Имя должно быть не меньше 2 и не больше 10 символов');
  expect(() => { const player = new Character('12345678901', 'Bowerman'); }).toThrowError('Имя должно быть не меньше 2 и не больше 10 символов');
});

test('To be Throw \'Неверный тип персонажа\'', () => {
  expect(() => { const player = new Character('Player', 'iii'); }).toThrowError('Неверный тип персонажа');
});

test('To be health = 100', () => {
  const result = new Character('Player', 'Bowerman');
  expect(result).toHaveProperty('health', 100);
});

test('To be level = 1', () => {
  const result = new Character('Player', 'Bowerman');
  expect(result).toHaveProperty('level', 1);
});

test.each([
  ['Bowerman', { type: 'Bowerman', attack: 25, defence: 25 }],
  ['Swordsman', { type: 'Swordsman', attack: 40, defence: 10 }],
  ['Magician', { type: 'Magician', attack: 10, defence: 40 }],
  ['Daemon', { type: 'Daemon', attack: 10, defence: 40 }],
  ['Undead', { type: 'Undead', attack: 25, defence: 25 }],
  ['Zombie', { type: 'Zombie', attack: 40, defence: 10 }],
])(
  ('Sould be the correct type and properties'),
  (characterType, expected) => {
    const result = new Character('Player', characterType);
    expect({ type: result.type, attack: result.attack, defence: result.defence }).toEqual(expected);
  },
);
