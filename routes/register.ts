import { getRepository } from 'typeorm';
import express from 'express';
import { User } from '../db/entities/User';

var router = express.Router();


router.post('/', async (req, res) => {
    const { username, password } = req.body;
  
    const userRepository = getRepository(User);
  
    const newUser = userRepository.create({
      username,
      password,
    });
  
    await userRepository.save(newUser);
  
    res.status(201).json({ message: 'User registered successfully' });
  });
  export default router;