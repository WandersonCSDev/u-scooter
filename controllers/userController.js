const sequelize = require('../src/db');
const User = require('../src/models/usersModel');
const bcrypt = require('bcrypt');

async function findAll(req, res) {
  try {
    const users = await User.findAll();
    if (!users) {
      res.status(200).json({ message: 'Não há registros' });
    }
    res.status(200).json({ users });
  } catch (error) {
    res.status(400).json({ error });
  }
}

async function findUser(req, res) {
  await User.findByPk(req.params.id).then((finale) => res.json(finale));
}

async function addUser(req, res) {
  try {
    const { firstname, lastname, email, password } = req.body;

    const pwdHash = await bcrypt.hash(password, 13);

    const user = await User.findOne({ where: { email } });

    if (user) {
      res.status(401).json({ message: 'Este e-mail já está cadastrado' });
    } else {
      User.create({
        firstname,
        lastname,
        email,
        password: pwdHash,
      }).then((finale) => res.json(finale));
    }
  } catch (error) {
    res.status(400).json({ error });
  }
}

async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const { firstname, lastname, email, password } = req.body;
    const pwdHash = await bcrypt.hash(password, 13);
    const user = await User.findOne({ where: { id } });
    if (!user) {
      res.status(401).json({ message: 'Este ID não está cadastrado' });
    } else {
      await User.update(
        {
          firstname,
          lastname,
          email,
          password: pwdHash,
        },
        { where: { id: req.params.id } }
      );
      await User.findByPk(req.params.id).then((finale) => res.json(finale));
    }
  } catch (error) {
    res.status(400).json({ error: 'Resultado inesperado' });
  }
}

async function deleteUser(req, res) {
  const { id } = req.params;
  const user = await User.findOne({ where: { id } });
  if (!user) {
    res.status(401).json({ message: 'Este ID não está cadastrado' });
  } else {
    await User.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: `Usuário de ID:[${id}] removido!` });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email, password } });
    if (user === null) {
      res.status(400).json({ error });
    } else {
      res.status(200);
    }
    if (
      !(await bcrypt.compare(
        req.body.password,
        user.findOne({ where: password })
      ))
    ) {
      res.status(400).json({ error });
    } else {
      res.status(200);
    }
  } catch (error) {
    res.status(400).json({ error });
  }
}

module.exports = { findAll, updateUser, findUser, addUser, deleteUser, login };
