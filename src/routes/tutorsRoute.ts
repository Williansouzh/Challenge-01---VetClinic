import { Router } from 'express'
import { TutorsControllers } from '../controllers/tutorsControllers'

const router = Router()

router.get('/tutors', TutorsControllers.getAll)

export default router
