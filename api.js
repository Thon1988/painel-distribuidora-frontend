// [frontend/api.js] - Versão Final com saveToken e createProduto
const API_URL = "https://painel-distribuidora-backend.onrender.com/api";

export const api = {
    // 1. Buscar produtos
    getProdutos: async () => {
        try {
            const response = await fetch(`${API_URL}/produtos`);
            if (!response.ok) throw new Error('Erro ao buscar produtos');
            return await response.json();
        } catch (error) {
            console.error("❌ Erro ao buscar produtos:", error);
            return [];
        }
    },

    // 2. Criar produto (O que o seu index.html usa)
    createProduto: async (produto) => {
        try {
            const response = await fetch(`${API_URL}/produtos`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(produto)
            });
            if (!response.ok) throw new Error('Erro ao salvar produto');
            return await response.json();
        } catch (error) {
            console.error("❌ Erro ao salvar produto:", error);
            throw error;
        }
    },

    // 3. Salvar Token FCM (O que está dando erro no seu console agora)
    saveToken: async (userId, fcmToken) => {
        try {
            const response = await fetch(`${API_URL}/save-fcm-token`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, fcmToken })
            });
            return await response.json();
        } catch (error) {
            console.error("❌ Erro ao salvar token:", error);
        }
    }
};
};