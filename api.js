// [frontend/api.js] - Versão Inteligente de Conexão
const API_URL = "https://painel-distribuidora-backend.onrender.com";

export const api = {
    async getProdutos() {
        try {
            // Tenta primeiro SEM o /api
            let res = await fetch(`${API_URL}/produtos`);
            if (!res.ok) {
                // Se der erro, tenta COM o /api
                res = await fetch(`${API_URL}/api/produtos`);
            }
            return await res.json();
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
            return [];
        }
    },

    async createProduto(produto) {
        try {
            // Tenta salvar primeiro no caminho direto
            let res = await fetch(`${API_URL}/produtos`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(produto)
            });

            if (!res.ok) {
                // Se der erro, tenta no caminho /api/produtos
                res = await fetch(`${API_URL}/api/produtos`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(produto)
                });
            }
            return await res.json();
        } catch (error) {
            console.error("Erro ao salvar produto:", error);
            throw error;
        }
    }
};