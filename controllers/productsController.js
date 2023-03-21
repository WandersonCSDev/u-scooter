const Scooter = require('../src/models/scooterModel');

async function findAll(req, res) {
  //A função espera até que
  const products = await Scooter.findAll(); // select * from
  res.json(products); // receba informações de "products" em json
}

async function addScooter(req, res) {
  Scooter.create({
    model: req.body.model,
    year: req.body.year,
    motor_pow: req.body.motor_pow,
    batery_pow: req.body.batery_pow,
    batery_type: req.body.batery_type,
    weight: req.body.weight,
    max_velocity: req.body.max_velocity,
    autonomy: req.body.autonomy,
    charge_time: req.body.charge_time,
  }).then((finale) => res.json(finale));
}

async function findScooter(req, res) {
  await Scooter.findByPk(req.params.id).then((finale) => res.json(finale));
}

async function updateScooter(req, res) {
  await Scooter.update(
    {
      model: req.body.model,
      year: req.body.year,
      motor_pow: req.body.motor_pow,
      batery_pow: req.body.batery_pow,
      batery_type: req.body.batery_type,
      weight: req.body.weight,
      max_velocity: req.body.max_velocity,
      autonomy: req.body.autonomy,
      charge_time: req.body.charge_time,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  await Scooter.findByPk(req.params.id).then((finale) => res.json(finale));
}

async function deleteScooter(req, res) {
  await Scooter.destroy({
    where: {
      id: req.params.id,
    },
  });
  await Scooter.findAll().then((finale) => res.json(finale));
}

module.exports = {
  findAll,
  addScooter,
  findScooter,
  updateScooter,
  deleteScooter,
};
