const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'nportman',
    email: 'nportman@starwars.com',
    password: 'password123'
  },
  {
    username: 'hchristensen',
    email: 'hchristensen@starwars.com',
    password: 'password123'
  },
  {
    username: 'emcgregor',
    email: 'emcgregor@starwars.com',
    password: 'password123'
  },
  {
    username: 'hford',
    email: 'hford@starwars.com',
    password: 'password123'
  },
  {
    username: 'cfisher',
    email: 'USER @starwars.com',
    password: 'password123'
  },
  {
    username: 'mhamill',
    email: 'mhamill@starwars.com',
    password: 'password123'
  },
  {
    username: 'fjones',
    email: 'fjones@starwars.com',
    password: 'password123'
  },
  {
    username: 'atudyk',
    email: 'atudyk@starwars.com',
    password: 'password123'
  },
  {
    username: 'dluna',
    email: 'dluna@starwars.com',
    password: 'password123'
  },
  {
    username: 'ppascal',
    email: 'ppascal@starwars.com',
    password: 'password123'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
