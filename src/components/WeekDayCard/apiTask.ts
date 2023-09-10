
export const fetchDataTask = async ({ nameDay }: { nameDay: string }): Promise<any> => {
    try {
        const res = await fetch(`https://64fe4853596493f7af7f039c.mockapi.io/${nameDay}`);
        if (!res.ok) {
            throw new Error(`Erro ao buscar dados: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Ocorreu um erro:', error);
        throw error;
    }
}
