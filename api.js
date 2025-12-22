const API_URL = "https://distribuidora-de-ovos-back-end.onrender.com";

export const api = {
    async getProdutos() {
        const res = await fetch(`${API_URL}/produtos`);
        return res.json();
    },
    async createProduto(data) {
        const res = await fetch(`${API_URL}/produtos`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return res.json();
    }
};