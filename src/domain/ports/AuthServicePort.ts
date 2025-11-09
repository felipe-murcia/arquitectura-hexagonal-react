import type { AuthToken } from "../entities/AuthToken";

export interface Credentials {
  username: string;
  password: string;
}

//Define el contrato de lo que el servicio debe hacer
export interface AuthServicePort {
  login(credentials: Credentials): Promise<AuthToken>;
  logout(): Promise<void>;
  // ... otros métodos de autenticación
}