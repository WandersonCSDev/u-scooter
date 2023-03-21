const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/readme', (req, res, next) => {
  res.render('index', { title: 'U-SCooter' });
});

router.get('/home', (req, res, next) => {
  res.render('home', { title: 'U-SCooter - Pág. Inicial' });
});

router.get('/produtos', (req, res, next) => {
  res.render('produtos', { title: 'U-SCooter - Produtos' });
});

router.get('/sobre', (req, res, next) => {
  res.render('sobre', { title: 'U-SCooter - Quem somos' });
});

router.get('/cart', (req, res, next) => {
  res.render('shopingCart', { title: 'U-SCooter - Quem somos' });
});

router.get('/contatos', (req, res, next) => {
  res.render('contatos', { title: 'U-SCooter - Contatos' });
});

router.get('/login', (req, res, next) => {
  res.render('login', { title: 'U-SCooter - Login' });
});

router.get('/profile', (req, res, next) => {
  res.render('profile', { title: 'Perfil do usuário' });
});

router.get('/register', (req, res, next) => {
  res.render('cadUser', { title: 'U-SCooter - Cadastro' });
});

router.get('/admin', (req, res, next) => {
  res.render('adminPanel', { title: 'U-SCooter - Painel Adminstrativo' });
});

module.exports = router;
