import { Router } from 'express'

// Sub Routers
import Resources from './resources'

const router = Router()

router.use('resources/', Resources)


export default router