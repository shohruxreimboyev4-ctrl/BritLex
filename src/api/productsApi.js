import axios from 'axios'

const API_BASE = 'https://fakestoreapi.com'

export const fetchProducts = async ({ page = 1, limit = 6 }) => {
  // example using a public fake API; replace with your real endpoint
  const res = await axios.get(`${API_BASE}/products?limit=${limit}`)
  return res.data
}

export default { fetchProducts }
