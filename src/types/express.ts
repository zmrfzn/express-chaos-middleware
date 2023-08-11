// Add options in express Request
declare namespace Express {
  export interface Request {
    options: {
	    ignoreRoutes?: string[];
      maxDelay?: number;
      probability?: number;
      errCodes?: number[];
      rules?: Function[];
      rng: Function;
    };
  }
}