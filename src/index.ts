import express from 'express';
import CakeController from './controllers/cake.controller';

const app = express();

app.get('/cake/list', CakeController.getAllCakes);
app.get('/cake/:id', CakeController.getCakeById);
app.get('/cake/add', CakeController.addNewCake);
app.put('/cake/update', CakeController.updateById);
app.delete('/cake/delete/:id', CakeController.deleteById);

const port = process.env.PORT || 3100;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});