import DB from '../models/connection'
import uuid4 from 'uuid/v4'
import fs from 'fs'

var pool = DB()

export const UploadTask = (req, res) => {
    const { idAlumno, idCurso, tipoElemento, idElemento } = req.fields
    const { file } = req.files

    if (!idAlumno || !idCurso || !tipoElemento || !idElemento || !file)
        return res.status(400).send({ message: 'All params are requerid' })

    const extension = file.name.split('.').pop()
    const nameImage = uuid4() + '.' + extension
    const routImage = '/media/task/' + nameImage
    fs.renameSync(file.path, __dirname + '/..' + routImage)

    pool.query(`INSERT INTO detalleAlumno (id_alumno, id_curso, tipoElemento, idElemento, ponderacion, ruta, fechaRegistro)
                 VALUES (?,?,?,?,0,?, NOW())`,
        [
            Number(idAlumno),
            Number(idCurso),
            Number(tipoElemento),
            Number(idElemento),
            nameImage
        ],
        (err) => {
            if (err) return res.status(500).send({ message: 'Internal error', err })
            return res.status(201).send({ message: 'Inserted!' })
        })
}

export const GetListTask = (req, res) => {
    const { id } = req.params
    pool.query('SELECT * FROM detalleAlumno WHERE id_curso = ? AND tipoElemento = 2',[id], (err, rows) => {
        if (err) return res.status(500).send({ message: 'Internal error', err })

        return res.send(rows)
    })
}

export const DownloadResourceByNameTask = (req, res) => {
    const rout = req.query.rout
    if (!rout)
        return res.status(400).send({ message: 'All params are required ?rout=blabla' })

    res.download(__dirname + '/../media/task/' + rout, err => {
        if (err) return res.status(404).send({message: 'Not found file'})
    })
}