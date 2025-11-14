// src/domain/ports/ProductServicePort.ts
import type { Product } from '../entities/Product';

export interface ProductServicePort  {
  getAllProducts(): Promise<Product[]>;
}