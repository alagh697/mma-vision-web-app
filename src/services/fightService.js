import axios from 'axios';

// Configurer une instance Axios avec l'URL de base
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // URL de base pour l'API
  timeout: 5000, // Temps limite pour la requête
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Récupère la liste des fights
 * @returns {Promise<Object[]>} Liste des fights
 */
export const getFights = async () => {
  try {
    const response = await apiClient.get('/fights');
    return response.data; // Retourne les données des fights
  } catch (error) {
    console.error('Erreur lors de la récupération des fights:', error);
    throw error; // Propager l'erreur pour gestion ultérieure
  }
};

/**
 * Récupère un fight par son ID
 * @param {string} fightId - L'ID du fight
 * @returns {Promise<Object>} Le fight correspondant
 */
export const getFightById = async (fightId) => {
  try {
    const response = await apiClient.get(`/fights/${fightId}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la récupération du fight avec ID ${fightId}:`, error);
    throw error;
  }
};
