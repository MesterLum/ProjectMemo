import { Router } from 'express'
import formidable from 'express-formidable'

// Controllers
import { UploadResource, GetListResourcesForIdCourse, DownloadResourceByNameResource } from '../controllers/resources'

const router = Router()

router.post('/',formidable(), UploadResource)
router.get('/download', DownloadResourceByNameResource)
router.get('/:id', GetListResourcesForIdCourse)


export default router