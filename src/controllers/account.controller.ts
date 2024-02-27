import { NextFunction, Request, Response } from 'express';
import AccountService from '@services/account.service';
import { PostService } from '@services/post.service';

// @Injectable()
class AccountController {
  public accountService = new AccountService();
  constructor() {
    console.log('컨트롤러 생성');
  } // private readonly postService: PostService // private readonly accountService: AccountService,

  // public logIn() {
  //   console.log('??');
  // }

  public logIn = async (req: Request, res: Response, next: NextFunction) => {
    console.log('??');
    const id = req.body.id;
    const pw = req.body.pw;
    try {
      this.accountService.login(id, pw);
      next();
    } catch (error) {
      next(error);
    }
  };

  public getAccountByIdx() {}

  public getPostByUserIdx() {}
}

export default AccountController;
