// src/infrastructure/adapters/RecipeAPIRepository.ts
import type { Recipe } from '../../domain/entities/Recipe';
import type { RecipeServicePort } from '../../domain/ports/RecipeServicePort';
import type { AxiosInstance } from 'axios';


export class RecipeAPIRepository implements RecipeServicePort {

  private readonly baseUrl = '/recipes';
  private httpClient: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.httpClient = httpClient;
  }

  async getAllRecipes(): Promise<Recipe[]> {
    try {
      // 🚀 Llamada real a la API 🚀
      const response = await this.httpClient.get(this.baseUrl+"?limit=100");
      console.log('API Response producto:', response);
      // En muchos casos, la respuesta necesita ser mapeada (adaptada) 
      // si la API usa un formato diferente al Product del dominio.
      return response.data.recipes as Recipe[]; 
    } catch (error) {
      throw new Error("Failed to retrieve products from API.");
    }
  }

}