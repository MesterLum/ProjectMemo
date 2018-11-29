import { Router } from 'express'

// Sub Routers
import Resources from './resources'
import Tasks from './tasks'

const router = Router()

router.use('/resources', Resources)
router.use('/tasks', Tasks)


export default router