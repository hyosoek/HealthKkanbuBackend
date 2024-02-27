import { Router } from 'express';
import AccountController from '@controllers/account.controller';
// import { Injectable } from '@nestjs/common';

// @Injectable()
class AccountRoute {
  public path = '/account';
  public router = Router();
  public accountController = new AccountController();

  // private readonly accountController: AccountController;
  constructor() {
    console.log('라우트 생성');
    this.initializeRoutes();
  }

  private initializeRoutes() {
    console.log(`${this.path}/log-in`);
    this.router.post(
      `${this.path}/log-in`,
      this.accountController.logIn.bind(this.accountController)
    );
    // this.router.post(`${this.path}/log-in`, (req, res, next) =>
    //   this.accountController.logIn(req, res, next)
    // );
    // this.router.post(`${this.path}/sign-up`, this.accountController.signUp);
  }
}

export default new AccountRoute();
