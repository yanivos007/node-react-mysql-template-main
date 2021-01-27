const router = require('express').Router();
const { json } = require('body-parser');
// const dbService = require('../utils/dbService');
const REPOSITORY = require('../utils/vacationsRepository');
const path = require('path')
const uuid = require('uuid').v4
const multer = require('multer')

const multerStorage = multer.diskStorage({
    destination: '../images',
    fileName: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        let newFileName = uuid();
        if (ext && ext.length > 0) {
            newFileName = newFileName + ext;
        }
        cb(null, newFileName)
    }
})
const upload = multer({
    storage: multerStorage,
    limits: {
        fileSize: 1024 * 1024 * 50
    }
}
)

router.get('/', async (req, res) => {
    try {
        const vacations = await REPOSITORY.getAll();
        res.send(vacations)
    } catch (err) {
        console.log(err)
    }
})

router.post('/post',  async (req, res) => {
    try {
        const newVacationData = req.body
        const newVacation = await REPOSITORY.addVacation(newVacationData)
        console.log(newVacation)
        if (!newVacation) {
            res.status(500).send({ error: ['something went wrong'] })
        } else {
            console.log(req.file)
            res.json({imageFileName: req.filfilenamee})
            res.status(200).send(newVacation + "newVacation from router")
            console.log(newVacation)
            return newVacation;
        }
    } catch (err) {
        res.status(401).send({error:['data is not exsist']})
    }
})


module.exports = router;