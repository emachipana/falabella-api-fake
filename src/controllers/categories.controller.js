import { APIS } from "../data/index.js";

export const getCategoriesByStore = async (req, res) => {
  try {
    const store = req.query.store;
    if(!store) return res.status(400).json({ message: "El nombre de la tienda es obligatorio" });
    const url = APIS[store];
    if(!url) return res.status(400).json({ message: "La tienda no existe" });

    const response = await fetch(`${url}/categories`);
    const categories = await response.json();
    
    res.json(categories);
  }catch(e) {
    console.error(e);
    res.status(500).json({ message: e.message })
  }
}
