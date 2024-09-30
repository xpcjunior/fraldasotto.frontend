export interface Estoque {
    id: string;
    data: string;
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
