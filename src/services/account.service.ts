import inputCheck from 'modules/inputCheck';
import prisma from '../../prisma/context';
import { AccountEntity } from 'entity/AccountEntity';
import { PrismaClient } from '@prisma/client';

class AccountService {
  // private readonly prisma: PrismaClient
  constructor() {
    console.log('서비스 생성');
  }

  public getAccount: (idx: number) => Promise<AccountEntity>; //use prisma

  public login: (id: string, pw: string) => Promise<string>;
}

export default AccountService;
