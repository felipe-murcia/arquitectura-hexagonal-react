// src/infrastructure/adapters/AuthAPIRepository.ts
//import { AuthServicePort, Credentials, AuthToken } from 'path/to/ports';
// Importar un cliente HTTP (axios, fetch, etc.)

import type { AuthToken } from "../../domain/entities/AuthToken";
import type { AuthServicePort, Credentials } from "../../domain/ports/AuthServicePort";

export class AuthAPIRepository implements AuthServicePort {
    async login(credentials: Credentials): Promise<AuthToken> {
        // Lógica para llamar a la API de login
 
        const response = await  fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...credentials,
                    expiresInMins: 30, // optional, defaults to 60
                }),
            //credentials: 'include' // Include cookies (e.g., accessToken) in the request
            });

        const data = await response.json();
        console.log('res login',data);
        const { token } = data; // Suponiendo que la API devuelve el token
        
        // **Configuración del Token:**
        localStorage.setItem('accessToken', token); // Guardar el token
        
        return { accessToken: token, refreshToken: '...' }; // Retornar el token
    }
    // ... implementación de logout
    logout(): Promise<void> {
        throw new Error("Method not implemented.");
    }
}