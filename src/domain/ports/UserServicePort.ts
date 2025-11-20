// src/domain/ports/UserServicePort.ts
import type { User } from '../entities/User';

export interface UserServicePort  {
  getAllUsers(): Promise<User[]>;
} 