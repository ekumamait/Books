import express from 'express';
import BookController from '../controllers/bookController';
import AuthController from '../controllers/userController';
import { Authenticate } from '../middleware/middleware';

// defining middleware routes
const router = express.Router();

// Users routes
router.post('/api/auth/signup', AuthController.signup);
router.post('/api/auth/login', AuthController.login);

// Books routes
router.post('/api/auth/book/', Authenticate, BookController.addBook);
router.get('/api/auth/books/', Authenticate, BookController.getAllBooks);
router.get('/api/auth/book/:id', Authenticate, BookController.getOneBook); 
router.put('/api/auth/book/:id', Authenticate, BookController.updateBook);
router.delete('/api/auth/book/:id', Authenticate, BookController.deleteBook);

export default router;
