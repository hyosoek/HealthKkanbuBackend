import inputCheck from 'modules/inputCheck';
import prisma from '../../prisma/context';
import { AccountEntity } from 'entity/AccountEntity';

class AccountService {
  // private readonly prisma: PrismaClient
  constructor() {}
  public async logIn(requestBody: {
    mail: string;
    pw: string;
    temp: number;
  }): Promise<{
    token: string;
  }> {
    console.log(requestBody.mail);
    console.log(requestBody.pw);

    const data = await prisma.account.findMany({
      where: {
        mail: {
          lt: requestBody.mail,
        },
        pw: {
          lt: requestBody.pw,
        },
      },
      select: {
        id: true,
      },
    });
    const result = {
      token: data.toString(),
    };
    console.log(data);
    //needTokenize
    return result;
  }

  public getAccount: (idx: number) => Promise<AccountEntity>; //use prisma

  // public logIn: (requestBody) => Promise<string>;
}

export default AccountService;
