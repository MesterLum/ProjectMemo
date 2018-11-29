import DB from '../models/connection'
import uuid4 from 'uuid/v4'
import fs from 'fs'

var pool = DB()

export const UploadResource = (req, res) => {
    const { idCurso, descripcion, titulo } = req.fields
    if (!idCurso || !descripcion || !titulo || !req.files.file)
        return res.status(400).send({ message: 'All params are required' })

    const { file } = req.files

    const extension = file.name.split('.').pop()
    const nameImage = uuid4() + '.' + extension
    const routImage = '/media/resources/' + nameImage
    fs.renameSync(file.path, __dirname + '/..' +routImage)
    
    pool.query('INSERT INTO recurso (id_curso, titulo, descripcion, fechaRegistro, ruta, estatus) VALUES (?,?,?,NOW(),?,?)',
        [
            Number(idCurso),
            titulo,
            descripcion,
            nameImage,
            'A'
        ], (err) => {
            if (err) return res.status(500).send({ message: 'Internal error, error in get rows', err })

            return res.status(201).send({ message: 'Se inserto el registro' })
        })


}

export const GetListResourcesForIdCourse = (req, res) => {

    const { id } = req.params

    if (!id)
        return res.status(400).send({ message: 'All params are required' })

    pool.query('SELECT * FROM recurso WHERE id_curso = ?', [id], (err, rows) => {
        if (err) return res.status(500).send({message: 'Internal error', err})
        return res.send(rows)
    })

}

export const DownloadResourceByNameResource = (req, res) => {
    const rout = req.query.rout
    if (!rout)
        return res.status(400).send({ message: 'All params are required ?rout=blabla' })

    res.download(__dirname + '/../media/resources/' + rout, err => {
        if (err) return res.status(404).send({message: 'Not found file'})
    })
}

