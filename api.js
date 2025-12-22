// [frontend/api.js]
const API_URL = "https://painel-distribuidora-backend.onrender.com/api";

export const api = {
    getProdutos: async () => {
        try {
            const response = await fetch(`${API_URL}/produtos`);
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
        if (!response.ok) throw new Error('Erro ao salvar');
        return await response.json();
    },
    saveToken: async (userId, fcmToken) => {
        try {
            await fetch(`${API_URL}/save-fcm-token`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, fcmToken })
            });
        } catch (error) {
            console.error("Erro ao salvar token:", error);
        }
    }
};