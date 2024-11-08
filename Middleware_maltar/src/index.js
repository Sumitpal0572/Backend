require('dotenv').config();
const express = require("express")
const multer = require('multer')
const path = require('path')
const { v2: cloudinary } = require('cloudinary') //Import data from cloudinary file as key value pair
const { error } = require('console')


const app = express()

const PORT = 5000;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../uploads'),
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage })

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/upload', upload.single('file'), async (req, res) => {

    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file found' })
        }

        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'uploads',
        })

        res.status(200).json({
            message: "file upload successfully",
            imageUrl: result.secure_url
        })

    } catch (e) {
        console.log(`Error in uploading file:${e}`);
        res.status(500).json({
            message: "internal server error", error: e.message
        })
    }
})

app.listen(PORT, () => {
    console.log(`server started at : http://localhost:${PORT}/`);
})