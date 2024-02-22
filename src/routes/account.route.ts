import { Router } from 'express';
import AccountController from '@controllers/account.controller';
import { PrismaClient } from '@prisma/client';
import AccountService from '@services/account.service';
import { PostService } from '@services/post.service';

// @Injectable()
class AccountRoute {
  public path = '/account';
  public router = Router();

  constructor(private readonly accountController: AccountController) {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/log-in`, this.accountController.logIn);
    // this.router.post(`${this.path}/sign-up`, this.accountController.signUp);
  }
}

export default AccountRoute;
