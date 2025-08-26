import { APIS } from "../data/index.js";

export const getProducts = async (req, res) => {
	try {
		const minPrice = req.query.minPrice || "";
		const maxPrice = req.query.maxPrice || "";
		const page = req.query.page || 1;
		const size = req.query.size || 10;
		const search = req.query.search || "";
	
		const urls = Object.values(APIS);
		const result = {
			"content": [],
			"totalElements": 0,
			"number": 0,
			"size": 0,
			"totalPages": 0
		}
		
		for(const index in urls) {
			try {
				const url = urls[index];
				if(!url) continue;

				const pageToSend = url.includes("inversiones") ? page - 1 : page;
				const response = await fetch(`${url}/products?page=${pageToSend}&size=${size / 5}&minPrice=${minPrice}&maxPrice=${maxPrice}&search=${search}`);
				const products = await response.json();
				result.content = [...result.content, ...products.content];
				result.totalElements += products.totalElements;
				result.number = pageToSend;
				result.size = size;
				result.totalPages += products.totalPages;
			}catch(e) {
				console.error("From urls it", e);
			}
		}

		res.json(result);
	}catch(e) {
		console.error(e);
		res.status(500).json({ message: e.message })
	}
}

export const getProductsByStore = async (req, res) => {
	try {
		const store = req.params.storeName;
		if(!store) return res.status(400).json({ message: "El nombre de la tienda es requerido" });

		const url = APIS[store];
		if(!url) return res.status(400).json({ message: "La tienda no existe" });

		const response = await fetch(`${url}/products`);
		const categories = await response.json();

		res.json(categories);
	}catch(e) {
		console.error(e);
		res.status(500).json({ message: e.message });
	}
}

export const getProductsByCategory = async (req, res) => {
	try {
		const store = req.query.store;
		const categoryId = req.params.categoryId;
		if(!store) return res.status(400).json({ message: "El nombre de la tienda es requerido" });
		if(!categoryId) return res.status(400).json({ message: "El nombre de la tienda es requerido" });

		const url = APIS[store];
		if(!url) return res.status(400).json({ message: "La tienda no existe" });

		const response = await fetch(`${url}/products?category=${categoryId}`);
		const products = await response.json();

		res.json(products);
	}catch(e) {
		console.error(e);
		res.status(500).json({ message: e.message });
	};
}

export const getOneProduct = async (req, res) => {
	try {
		const store = req.query.store;
		const productId = req.params.id;
		if(!store) return res.status(400).json({ message: "El nombre de la tienda es requerido" });
		if(!productId) return res.status(400).json({ message: "El nombre de la tienda es requerido" });

		const url = APIS[store];
		if(!url) return res.status(400).json({ message: "La tienda no existe" });

		const response = await fetch(`${url}/products/${productId}`);
		const products = await response.json();

		res.json(products);
	}catch(e) {
		console.error(e);
		res.status(500).json({ message: e.message });
	};
}
