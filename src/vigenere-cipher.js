const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.machineType = type;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    };

    const messageUpperCase = message.toUpperCase();
    const keyUpperCase = key.toUpperCase();

    const lengthMessage = messageUpperCase.length;
    const keyLengthSize = keyUpperCase.padEnd(lengthMessage, keyUpperCase);
    const arrOfIndexKey = keyLengthSize
        .split('')
        .map((el) => Number(this.alphabet.indexOf(el) + 1));

    const arrOfMessage = messageUpperCase
        .split('');
    
    const encryptedMessage = [];

    let i = 0;
    arrOfMessage.forEach((el) => {
      const indexEl = this.alphabet.indexOf(el);
      if (indexEl === -1) {
        encryptedMessage.push(el);
      } else {
        const index = (indexEl + arrOfIndexKey[i] - 1) % this.alphabet.length;
        encryptedMessage.push(this.alphabet[index]);
        i += 1;
      }
    })

    return this.machineType ? encryptedMessage.join('') : encryptedMessage.reverse().join('');
  }
  decrypt(encryptMessage, key) {
    if (!encryptMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    const encryptMessageUpperCase = encryptMessage.toUpperCase();
    const keyUpperCase = key.toUpperCase();

    const lengthMessage = encryptMessageUpperCase.length;
    const keyLengthSize = keyUpperCase.padEnd(lengthMessage, keyUpperCase);
    const arrOfIndexKey = keyLengthSize
        .split('')
        .map((el) => Number(this.alphabet.indexOf(el) + 1));

    const arrOfMessage = encryptMessageUpperCase
        .split('');
    
    const decryptedMessage = [];

    let i = 0;
    arrOfMessage.forEach((el) => {
      const indexEl = this.alphabet.indexOf(el);
      if (indexEl === -1) {
        decryptedMessage.push(el);
      } else {
        const index = (indexEl + this.alphabet.length - arrOfIndexKey[i] + 1) % this.alphabet.length;
        decryptedMessage.push(this.alphabet[index]);
        i += 1;
      }
    })

    return this.machineType ? decryptedMessage.join('') : decryptedMessage.reverse().join('');
  }
};

module.exports = {
  VigenereCipheringMachine
};
