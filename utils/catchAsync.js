// import {Request, Response, NextFunction} from 'express';

// const catchAsync = (fn: Function) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     fn(req, res, next).catch((err: Error) => next(err));
//   };
// };

// export {catchAsync};

const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => next(err));
  };
};

module.exports = catchAsync;
