export interface Page {
    content: any[]; // Lista de elementos en la página actual
    number: number; // Número de la página actual (0-based)
    totalPages: number; // Total de páginas disponibles
    first: boolean; // Indica si es la primera página
    last: boolean; // Indica si es la última página
}
