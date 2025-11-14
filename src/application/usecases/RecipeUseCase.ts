// src/application/usecases/GetAllProductsUseCase.ts
import type { RecipeServicePort } from '../../domain/ports/RecipeServicePort';

export class RecipeUseCase {

  private recipeService: RecipeServicePort;

  constructor(recipeService: RecipeServicePort) {
    this.recipeService = recipeService;
  }
  async execute(): Promise<any> {
    // Llama al Adaptador (a través del Puerto)
    const res = await this.recipeService.getAllRecipes();
    return res;
  }
}

export default RecipeUseCase;