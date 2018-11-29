* ** For running project use **

> npm run dev  <-- For development mode
> npm start <-- normal running


---

## ToDo's

###### Resources
- [x] Upload Resources
- [x] Get Resources LIST (id course)
- [] Download resource

###### Tasks
- [] Upload tasks
- [] Get task for a course


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

**200** - Created


###### Get list resources from id course
* **GET** /api/resources/**id**

Responses:

All data

###### Download resource
* **GET** /api/resources/download**?rout='rout'**





