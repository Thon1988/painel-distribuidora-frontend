// [frontend/api.js]
const API_URL = "https://painel-distribuidora-backend.onrender.com/api";

export const api = {
    getProdutos: async () => {
        try {
            const response = await fetch(`${API_URL}/produtos`);
            if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
            return [];
        }
    },
    createProduto: async (produto) => {
        const response = await fetch(`${API_URL}/produtos`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(produto)
        });
        if (!response.ok) throw new Error('Erro ao salvar produto');
        return await response.json();
    }
};