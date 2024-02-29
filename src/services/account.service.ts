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
    const data = await prisma.account.findUnique({
      select: {
        id: true,
      },
      where: {
        mail: requestBody.mail,
        pw: requestBody.pw,
      },
    });
    const result = {
      token: data.id.toString(),
    };
    //needTokenize
    return result;
  }

  public getAccount: (idx: number) => Promise<AccountEntity>; //use prisma
  // public logIn: (requestBody) => Promise<string>;
}

export default AccountService;
