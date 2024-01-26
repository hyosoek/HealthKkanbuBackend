import path from 'path';

export const errorPass = (err: any, req: any, res: any) => {
  const result = {
    success: false,
    message: '',
  };
  try {
    if (!err.status) {
      //미지정 status = 예측불가 오류
      err.status = 500; // 에러 메시지를 보여주면 안 됨
    }
    if (!err.message) {
      err.message = 'Server Error!';
    }

    result.message = err.message; //status를 지정해서 발생하는 오류는 반드시 메시지를 적어서 보내줘야 합니다!
    console.error('Error' + err.status + ' : ' + err.message);
    res.status(err.status).send(result);
  } catch (newerr: any) {
    // 혹시 모르는 에러 발생
    console.log(newerr.message);
    res.send(result);
  }
};

export const error404Pass = (req: any, res: any, next: any) => {
  const result = {
    success: false,
    message: '404 NOT found!',
  };
  res.status(404).send(result);
};

module.exports = { errorPass, error404Pass };

// const path = require("path");

// const errorPass = (err,req,res) =>{
//     const result = {
//         "success" : false,
//         "message" : ""
//         }
//     try{
//         if(!err.status){//미지정 status = 예측불가 오류
//             err.status = 500 // 에러 메시지를 보여주면 안 됨
//         }
//         if(!err.message){
//             err.message = "Server Error!"
//         }

//         result.message = err.message; //status를 지정해서 발생하는 오류는 반드시 메시지를 적어서 보내줘야 합니다!
//         console.error("Error"+err.status +" : "+err.message);
//         res.status(err.status).send(result);
//     }
//     catch(newerr){ // 혹시 모르는 에러 발생
//         console.log(newerr.message)
//         res.send(result)
//     }
// }

// const error404Pass = (req, res, next)=>{
//     const result = {
//         "success" : false,
//         "message" : "404 NOT found!"
//     }
//     res.status(404).send(result);
// }

// module.exports = {errorPass,error404Pass}
