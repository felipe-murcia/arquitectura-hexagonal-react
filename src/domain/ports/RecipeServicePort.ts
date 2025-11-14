// src/domain/ports/RecipeServicePort.ts
import type { Recipe } from '../entities/Recipe';

export interface RecipeServicePort  {
  getAllRecipes(): Promise<Recipe[]>;
} 