export interface Estoque {
    id: string;
    data: string;
    total_gasto: number;
    total_fraldas_utilizadas: number;
    relatorio: RelatorioEstoque[];
}

export interface RelatorioEstoque {
    tamanho: string;
    fraldas: RelatorioEstoqueFraldas;
}

export interface RelatorioEstoqueFraldas {
    estoque: string;
    utilizadas: string;
    restantes: string;
}
