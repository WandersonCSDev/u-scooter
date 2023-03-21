const { check, validationResult } = require('express-validator');

const validateUserRegister = [
  check('firstname')
    .escape()
    .not()
    .notEmpty()
    .withMessage('Este campo não pode ser vazio')
    .isLength({ min: 2 })
    .withMessage('O nome deve ter pelo menos 2 caracteres')
    .bail(),
  check('lastname')
    .escape()
    .not()
    .notEmpty()
    .withMessage('Este campo não pode ser vazio')
    .isLength({ min: 2 })
    .withMessage('O último nome deve ter pelo menos 2 caracteres')
    .bail(),
  check('email')
    .escape()
    .not()
    .notEmpty()
    .withMessage('Este campo não pode ser vazio')
    .isEmail()
    .withMessage('Insira um e-mail válido')
    .bail(),
  check('password')
    .not()
    .notEmpty()
    .withMessage('Este campo não pode ser vazio')
    .contains('password_set')
    .isLength({ min: 6 })
    .withMessage('Senha com no mínimo 6 caracteres')
    .withMessage('Os valores devem ser iguais')
    .custom((value, { req, loc, path }) => {
      if (value !== req.body.confirm_password) {
        throw new Error('Passwords diferentes');
      } else {
        return value;
      }
    }),
  (req, res) => {
    var errors = validationResult(req).array();
    if (errors) {
      req.session.errors = errors;
      req.session.success = false;
      res.redirect('/user');
    } else {
      req.session.success = true;
      res.redirect('/user');
    }
  },
];
