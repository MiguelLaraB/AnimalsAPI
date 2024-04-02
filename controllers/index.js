const models = require("../database/models");

const createAnimal = async (req, res) => {
	try {
		const animals = await models.Animal.create(req.body);
		return res.status(201).json({
			animals
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

const getAllAnimal = async (req, res) => {
	console.log('getting animals');
	try {
		const animals = await models.Animal.findAll({
			include: [
			]
		});
		return res.status(200).json({ animals });
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

module.exports = {
	createAnimal,
	getAllAnimal
};

