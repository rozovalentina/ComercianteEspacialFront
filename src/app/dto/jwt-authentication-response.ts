export class JwtAuthenticationResponse {
    constructor(public token: string, public nombre: string, public rol: string) { }
}
