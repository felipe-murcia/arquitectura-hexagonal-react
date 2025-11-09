// src/application/usecases/GetAllProductsUseCase.ts
import type { ProductServicePort } from '../../domain/ports/ProductServicePort';

export class ProductUseCase {

  private productService: ProductServicePort;

  constructor(productService: ProductServicePort) {
    this.productService = productService;
  }
  async execute(): Promise<any> {
    
    // Llama al Adaptador (a través del Puerto)
    const res = await this.productService.getAllProducts();
    console.log('Fetched products: -----', res);
    return res; 
  }
}

export default ProductUseCase;