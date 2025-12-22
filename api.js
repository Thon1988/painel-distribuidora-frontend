// [frontend/api.js] - Conexão com o Backend do Render

const API_URL = "https://painel-distribuidora-backend.onrender.com/api";

export const api = {
    // 1. Buscar todos os produtos
    getProdutos: async () => {
        try {
            const response = await fetch(`${API_URL}/produtos`);
            if (!response.ok) throw new Error('Erro ao buscar produtos');
            return await response.json();
        } catch (error) {
            console.error("❌ Erro na API (getProdutos):", error);
            return [];
        }
    },

    // 2. Salvar Token FCM para Notificações
    saveToken: async (userId, fcmToken) => {
        try {
            const response = await fetch(`${API_URL}/save-fcm-token`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, fcmToken })
            });
            return await response.json();
        } catch (error) {
            console.error("❌ Erro na API (saveToken):", error);
        }
    },

    // 3. Adicionar novo produto
    addProduto: async (produto) => {
        try {
            const response = await fetch(`${API_URL}/produtos`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(produto)
            });
            return await response.json();
        } catch (error) {
            console.error("❌ Erro na API (addProduto):", error);
        }
    }
};