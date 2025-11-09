// src/infrastructure/adapters/ProductAPIRepository.ts
import type { Product } from '../../domain/entities/Product';
import type { ProductServicePort } from '../../domain/ports/ProductServicePort';
import type { AxiosInstance } from 'axios';


export class ProductAPIRepository implements ProductServicePort {

  private readonly baseUrl = '/products';
  private httpClient: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.httpClient = httpClient;
  }

  async getAllProducts(): Promise<Product[]> {
    try {
      // 🚀 Llamada real a la API 🚀
      const response = await this.httpClient.get(this.baseUrl);
      console.log('API Response producto:', response);
      // En muchos casos, la respuesta necesita ser mapeada (adaptada) 
      // si la API usa un formato diferente al Product del dominio.
      return response.data.products as Product[]; 
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Failed to retrieve products from API.");
    }
  }

}