export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    // Любая цифра (от 0 до ....) с подчеркиванием и тире в начале и конце строки
    const validation1 = /^[^\d_-][\w-]*[^\d_-]$/.test(this.name);
    // Любая цифра 4 и более раз
    const validation2 = /\d{4,}/.test(this.name);
    return (validation1) && !(validation2);
  }
}
