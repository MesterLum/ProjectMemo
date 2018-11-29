* ** For running project use **

> npm run dev  <-- For development mode
> npm start <-- normal running


---

## ToDo's

###### Resources
- [x] Upload Resources
- [x] Get Resources LIST (id course)
- [x] Download resource

###### Tasks
- [x] Upload tasks
- [x] Get task for a course
- [x] Download tasks


###### News
- [] Upload files for new
- [] Get file

---
## End Points

#### Resources

####### Upload resource with params
* **POST** /api/resources/

payload: 

```json
    {
        "idCurso": int,
        "descripcion": String,
        "titulo": String,
        "file": File
    }
```

Responses:

**400** - All params are required

```json
    {
        "message": String
    }
```

**201** - Created


###### Get list resources from id course
* **GET** /api/resources/**id**

Responses:

All data

###### Download resource
* **GET** /api/resources/download**?rout='rout'**


#### Tasks

####### Upload tasks with params
* **POST** /api/tasks/

payload:

```json
    {
        "idAlumno": Int,
        "idCurso": Int,
        "tipoElemento": Int,
        "idElemento": Int,
        "file": File

    }
```

Responses:

**400** - All params are requerid

```json
    {
        "message": String
    }
```

**500** - Internal error


**201** - Created

* **GET** /api/tasks/**id**

Response:

**200** - All data


###### Download tasks
* **GET** /api/tasks/download**?rout='rout'**






