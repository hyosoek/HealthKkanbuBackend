import { NextFunction, Request, Response } from 'express';
import AccountService from '@services/account.service';
import { PostService } from '@services/post.service';

// @Injectable()
class AccountController {
  constructor(
    private readonly accountService: AccountService,
    private readonly postService: PostService
  ) {}

  public logIn = async (req: Request, res: Response, next: NextFunction) => {
    // id password
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
