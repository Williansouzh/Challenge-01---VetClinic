import { Router } from 'express';
import { TutorsControllers } from '../controllers/tutorsControllers';

const router = Router();

router.get('/tutors', TutorsControllers.getAll);

router.post('/tutor', TutorsControllers.create);

router.put('/tutor/:id', TutorsControllers.editTutor);

router.put('/:petId/tutor/:tutorId', TutorsControllers.editPet);

export default router;
