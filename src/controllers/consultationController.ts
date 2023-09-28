// src/controllers/consultationController.ts

import { Request, Response } from 'express';

interface Consultation {
    id: number;
    patientName: string;
    date: string;
    doctor: string;
    diagnosis: string;
    prescription: string;
}

const consultations: Consultation[] = [
    {
        id: 1,
        patientName: 'João',
        date: '2023-10-10',
        doctor: 'Dr. Silva',
        diagnosis: 'Gripe',
        prescription: 'Repouso e medicamentos',
    },
    {
        id: 2,
        patientName: 'Maria',
        date: '2023-10-15',
        doctor: 'Dr. Santos',
        diagnosis: 'Dor de garganta',
        prescription: 'Gargarejos e antibióticos',
    },
];

export const getConsultations = (req: Request, res: Response) => {
    res.json({ consultations });
};

export const createConsultation = (req: Request, res: Response) => {
    const { patientName, date, doctor, diagnosis, prescription } = req.body;

    if (!patientName || !date || !doctor || !diagnosis || !prescription) {
        return res
            .status(400)
            .json({ error: 'Todos os campos devem ser preenchidos' });
    }

    const newConsultation: Consultation = {
        id: consultations.length + 1,
        patientName,
        date,
        doctor,
        diagnosis,
        prescription,
    };

    consultations.push(newConsultation);
    res.status(201).json({ consultation: newConsultation });
};


export const updateConsultation = (req: Request, res: Response) => {
    const { id } = req.params;
    const { patientName, date, doctor, diagnosis, prescription } = req.body;

    const updatedConsultationIndex = consultations.findIndex(
        (c) => c.id === parseInt(id, 10)
    );

    if (updatedConsultationIndex === -1) {
        return res.status(404).json({ error: 'Consulta não encontrada' });
    }

    if (!patientName || !date || !doctor || !diagnosis || !prescription) {
        return res
            .status(400)
            .json({ error: 'Todos os campos devem ser preenchidos' });
    }

    consultations[updatedConsultationIndex] = {
        id: parseInt(id, 10),
        patientName,
        date,
        doctor,
        diagnosis,
        prescription,
    };

    res.json({ consultation: consultations[updatedConsultationIndex] });
};


export const deleteConsultation = (req: Request, res: Response) => {
    const { id } = req.params;
    const consultationIndex = consultations.findIndex(
        (c) => c.id === parseInt(id, 10)
    );

    if (consultationIndex === -1) {
        return res.status(404).json({ error: 'Consulta não encontrada' });
    }

    consultations.splice(consultationIndex, 1);
    res.json({ message: 'Consulta excluída com sucesso' });
};

