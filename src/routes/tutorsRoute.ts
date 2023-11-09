import { Router } from 'express'
import { TutorsControllers } from '../controllers/tutorsControllers'

const router = Router()

router.get('/tutors', TutorsControllers.getAll)

router.post('/tutor', TutorsControllers.create)

export default router
