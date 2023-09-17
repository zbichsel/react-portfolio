const db = require('./connection');
const { User } = require('../models');

db.once('open', async () => {
    await User.create({
        firstName: 'Zackrey',
        lastName: 'Bichsel',
        email: 'biksel09@test.com',
        password: 'password12345',
    });

    await User.create({
        firstName: 'Jeremy',
        lastName: 'Brevik',
        email: 'cuck@cuckold.com',
        password: 'cuckold123',
    });

    console.log('Users seeded! 🌱😏');

    process.exit();
});