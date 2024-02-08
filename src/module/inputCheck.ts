//그냥 validator를 써볼까
import validator from 'validator';
import regexPatterns from '../config/regex.js';
// import { BadRequestException } from '../module/customError';

class inputCheck {
  // unknown으로 입력을 처리하는 이유는, 애초에 제대로 입력이 왔는지 검증하기 위한 validator이
  input: any;
  constructor(input: any) {
    this.input = input;
  }

  isEmpty = () => {
    if (validator.isEmpty(this.input)) this.goError('Empty input');
    return this;
  };

  isNull = () => {
    if (this.input == null) this.goError(this.input + ' is Null input');
    return this;
  };

  isUndefined = () => {
    if (this.input == undefined)
      this.goError(this.input + ' is Undefined input');
    return this;
  };

  isByteLength = () => {
    return this;
  };

  isMinSize = (size: number) => {
    if (this.input.length < size)
      this.goError(this.input + ' is Too short input');
    return this;
  };

  isMaxSize = (size: number) => {
    if (this.input.length > size)
      this.goError(this.input + ' is Too Large input');

    return this;
  };

  isMail = () => {
    if (validator.isEmail(this.input) == false)
      this.goError(this.input + ' is NOT Mail type');

    return this;
  };

  isContact = () => {
    if (regexPatterns.contact.test(this.input) == false)
      this.goError(this.input + ' is NOT Contact type');

    return this;
  };

  isDate = () => {
    if (regexPatterns.date.test(this.input) == false)
      this.goError(this.input + ' is NOT Date type input');

    return this;
  };

  isIP = () => {
    if (validator.isIP(this.input) == false)
      this.goError(this.input + ' is Not IP type input');

    return this;
  };

  isEqual = (input2: any) => {
    if (validator.equals(this.input, input2))
      this.goError(this.input + ' is NOT same input');

    return this;
  };

  isInt = () => {
    if (validator.isInt(this.input))
      this.goError(this.input + ' is NOT Int TYPE Input');

    return this;
  };

  isFinite = () => {
    if (!Number.isFinite(this.input))
      this.goError(this.input + ' is NOT Finite TYPE Input');

    return this;
  };

  goError = (message: string) => {
    throw new Error(message);
  };
}

const isInputCheck = (input: any) => {
  return new inputCheck(input);
};

export default isInputCheck;
