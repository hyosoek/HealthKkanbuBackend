//그냥 validator를 써볼까
import validator from 'validator';
import regexPatterns from '../config/regex.js';
// import { BadRequestException } from '../module/customError';

class InputCheck {
  // unknown으로 입력을 처리하는 이유는, 애초에 제대로 입력이 왔는지 검증하기 위한 validator이
  input: unknown;
  constructor(input: unknown) {
    this.input = input;
  }

  isEmpty = () => {
    if (this.input === '') this.goError(' is empty input');
    return this;
  };

  isNull = () => {
    if (this.input === null) this.goError(this.input + ' is null input');
    return this;
  };

  isUndefined = () => {
    if (this.input === undefined)
      this.goError(this.input + ' is undefined input');
    return this;
  };

  isMinSize = (size: number) => {
    if (typeof this.input === 'string' && this.input.length < size) return this;
    else this.goError(this.input + ' is too short input or not string');
  };

  isMaxSize = (size: number) => {
    if (typeof this.input === 'string' && this.input.length > size) return this;
    else this.goError(this.input + ' is too long input or not string');
  };

  isMail = () => {
    if (typeof this.input === 'string' && validator.isEmail(this.input))
      return this;
    else this.goError(this.input + ' is not Mail type');
  };

  // isContact = () => {
  //   if (regexPatterns.contact.test(this.input) == false)
  //     this.goError(this.input + ' is NOT Contact type');

  //   return this;
  // };

  // isDate = () => {
  //   if (regexPatterns.date.test(this.input) == false)
  //     this.goError(this.input + ' is NOT Date type input');

  //   return this;
  // };

  // isIP = () => {
  //   if (validator.isIP(this.input) == false)
  //     this.goError(this.input + ' is Not IP type input');

  //   return this;
  // };

  // isEqual = (input2: any) => {
  //   if (validator.equals(this.input, input2))
  //     this.goError(this.input + ' is NOT same input');

  //   return this;
  // };

  // isInt = () => {
  //   if (validator.isInt(this.input))
  //     this.goError(this.input + ' is NOT Int TYPE Input');

  //   return this;
  // };

  // isFinite = () => {
  //   if (!Number.isFinite(this.input))
  //     this.goError(this.input + ' is NOT Finite TYPE Input');

  //   return this;
  // };

  goError = (message: string) => {
    throw new Error(message);
  };
}

const inputCheck = (input: any) => {
  return new InputCheck(input);
};

export default inputCheck;
