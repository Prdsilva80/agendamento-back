// src/routes/consultationRoutes.ts

import express from 'express';
import {
    getConsultations,
    createConsultation,
    updateConsultation,
    deleteConsultation,
} from '../controllers/consultationController';

const router = express.Router();

router.get('/consultations', getConsultations);
router.post('/consultations', createConsultation);
router.put('/consultations/:id', updateConsultation);
router.delete('/consultations/:id', deleteConsultation);

export default router;
