// src/infrastructure/adapters/RecipeAPIRepository.ts
import type { Recipe } from '../../domain/entities/Recipe';
import type { User } from '../../domain/entities/User';
import type { AxiosInstance } from 'axios';
import type { UserServicePort } from '../../domain/ports/UserServicePort';


export class UserAPIRepository implements UserServicePort {

  private readonly baseUrl = '/users';
  private httpClient: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.httpClient = httpClient;
  }
  async getAllUsers(): Promise<User[]> {
    try {
      // 🚀 Llamada real a la API 🚀
      const response = await this.httpClient.get(this.baseUrl+"");
      console.log('API Response producto:', response);
      // En muchos casos, la respuesta necesita ser mapeada (adaptada) 
      // si la API usa un formato diferente al Product del dominio.
      return response.data.users as User[]; 
    } catch (error) {
      throw new Error("Failed to retrieve products from API.");
    }
  }

}