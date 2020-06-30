/* eslint-disable no-underscore-dangle */
const express = require('express');

const router = express.Router();
const controller = require('../controllers/user-controller');
const auth = require('../middlewares/authentication');

// eslint-disable-next-line new-cap
const _ctrl = new controller();

router.post('/register', _ctrl.post);
router.post('/authenticate', _ctrl.authenticate);
router.put('/completeRegister', auth, _ctrl.completeRegister);
router.get('/', auth, _ctrl.get);
router.put('/:id', auth, _ctrl.put);
router.delete('/:id', auth, _ctrl.delete);

module.exports = router;
