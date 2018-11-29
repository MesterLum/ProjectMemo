import { Router } from 'express'
import formidable from 'express-formidable'

// Controllers
import { GetListTask, UploadTask, DownloadResourceByNameTask} from '../controllers/tasks'

const router = Router()

router.post('/',formidable(), UploadTask)
router.get('/download', DownloadResourceByNameTask)
router.get('/:id', GetListTask)



export default router