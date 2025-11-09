// src/domain/ports/ProductServicePort.ts
import type { Product } from '../entities/Product';

export interface ProductServicePort  {
  getAllProducts(): Promise<Product[]>;
}

// export interface RecoverUserService {
//   validateRecoverUser: (params: UserIdentifier) => Promise<string>;
//   validateRequestUser: (params: UserIdentifier) => Promise<string>;
//   sendRecoverEmail: (params: EmailIdentifier) => Promise<any>;
// }