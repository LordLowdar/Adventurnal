const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {

  await User.deleteMany();

  await User.create({

    email: 'terran@testmail.com',
    password: 'password12345',
  });

  await User.create({
    email: 'kris@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
