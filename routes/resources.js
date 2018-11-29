import { Router } from 'express'
import formidable from 'express-formidable'

// Controllers
import { UploadResource, GetListResourcesForIdCourse } from '../controllers/resources'

const router = Router()

router.post('/',formidable(), UploadResource)
router.get('/:id', GetListResourcesForIdCourse)

export default router