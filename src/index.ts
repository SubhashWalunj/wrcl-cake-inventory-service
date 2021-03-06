import express from 'express';
import CakeController from './controllers/cake.controller';
const cloudinary = require('cloudinary');
require('dotenv').config();
import cors from 'cors';
const formData = require('express-form-data');

const app = express();

app.use(cors());
app.use(formData.parse());
app.use(express.json());

if (!process.env.CLOUD_NAME || !process.env.API_KEY || !process.env.API_SECRET) {
    console.log(`cloudinary config is not set`);
} else {
    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET
    });

    app.get('/', (req, res) => {
        res.set('Content-Type', 'text/html');
        res.send(Buffer.from(`
        <b>Available APIs</b><br>
        GET /cake/list :: Get list of all cakes<br>
        GET /cake/:id' :: Get cake by it's ID<br>        
        POST /cake/add :: Create a new cake<br>        
        PUT /cake/update :: update an existing cake<br>        
        DELETE /cake/delete/:id :: Delete a cake<br>        
        POST /image-upload :: to upload a image to cloudinary`));
    });

    app.get('/cake/list', CakeController.getAllCakes);
    app.get('/cake/:id', CakeController.getCakeById);
    app.post('/cake/add', CakeController.addNewCake);
    app.put('/cake/update', CakeController.updateById);
    app.delete('/cake/delete/:id', CakeController.deleteById);

    app.post('/image-upload', async (req: any, res: express.Response) => {

        const values = Object.values(req.files);
        const promises = values.map((image: any) => cloudinary.uploader.upload(image.path));

        Promise
            .all(promises)
            .then(results => res.json(results));
    });

    const port = process.env.PORT || 3100;

    app.listen(port, () => {
        console.log(`App listening on port ${port}`);
    });
}