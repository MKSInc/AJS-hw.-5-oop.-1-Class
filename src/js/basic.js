/* eslint-disable max-classes-per-file */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-console */
export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) throw new Error('Имя должно быть не меньше 2 и не больше 10 символов');
    else this.name = name;

    class CharacterType {
      constructor(characterType, attack, defence) {
        this.characterType = characterType;
        this.attack = attack;
        this.defence = defence;
      }
    }

    const characterTypes = [];
    characterTypes.push(new CharacterType('Bowerman', 25, 25));
    characterTypes.push(new CharacterType('Swordsman', 40, 10));
    characterTypes.push(new CharacterType('Magician', 10, 40));
    characterTypes.push(new CharacterType('Daemon', 10, 40));
    characterTypes.push(new CharacterType('Undead', 25, 25));
    characterTypes.push(new CharacterType('Zombie', 40, 10));

    const characterType = characterTypes.find((el) => el.characterType === type);
    if (!characterType) throw new Error('Неверный тип персонажа');
    else {
      this.type = type;
      this.attack = characterType.attack;
      this.defence = characterType.defence;
    }

    this.health = 100;
    this.level = 1;
  }
}
