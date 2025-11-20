// src/application/usecases/GetAllProductsUseCase.ts
import type { UserServicePort } from '../../../domain/ports/UserServicePort';

export class GetAllUsersUseCase {

  private userService: UserServicePort;

  constructor(userService: UserServicePort) {
    this.userService = userService;
  }
  async execute(): Promise<any> {
    
    // Llama al Adaptador (a través del Puerto)
    const res = await this.userService.getAllUsers();
    console.log('Fetched users: -----', res);
    return res; 
  }
}

export default GetAllUsersUseCase;