const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'))

router.post('/animals', controllers.createAnimal);
router.get('/animals', controllers.getAllAnimal);

module.exports = router;
