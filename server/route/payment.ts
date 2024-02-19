import express from 'express';
import { makePayment } from '../controllers/stripe';

const router = express.Router();
router.post('/checkout', makePayment);

export default router;
