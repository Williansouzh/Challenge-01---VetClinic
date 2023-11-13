import { Router } from 'express';
import { PetControllers } from '../controllers/petController';

const router = Router();

router.post('/pet/:tutorId', PetControllers.createPet);

router.put('/:petId/tutor/:tutorId', PetControllers.editPet);

router.delete('/pet/:petId/tutor/:tutorId', PetControllers.deletePet);
export default router;
