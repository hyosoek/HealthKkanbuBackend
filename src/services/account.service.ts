import inputCheck from 'modules/inputCheck';
import prisma from '../../prisma/context';
import { AccountEntity } from 'entity/AccountEntity';
import { PrismaClient } from '@prisma/client';

class AccountService {
  constructor(private readonly prisma: PrismaClient) {}

  public getAccount: (idx: number) => Promise<AccountEntity>; //use prisma

  public login: (id: string, pw: string) => Promise<string>;
}

export default AccountService;
