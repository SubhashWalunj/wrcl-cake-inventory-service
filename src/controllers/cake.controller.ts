import express from 'express';
import CakeService from "../services/cake.service";

class CakeController {

    /**
     * Controller function to get list of cakes
     * @param req 
     * @param res
     */
    public async getAllCakes(req: express.Request, res: express.Response): Promise<void> {
        try {
            const cakes = await CakeService.getAllCakes();
            res.status(200).send(cakes);
        }
        catch (e) {
            res.status(500).send(`Error while fetching the list of cakes`);
        }
    }

    /**
     * Controller function get a cake by id
     * @param req 
     * @param res 
     */
    public async getCakeById(req: express.Request, res: express.Response): Promise<void> {
        try {
            if (req.params.id) {
                const cakeId = parseInt(req.params.id);
                const cake = await CakeService.getCakeById(cakeId);
                if (cake) {
                    res.status(200).send(cake);
                } else {
                    res.status(400).send(`Cake with id ${req.params.id} is not found`);
                }
            } else {
                res.status(400).send('Invalid input supplied');
            }
        }
        catch (e) {
            res.status(500).send(`Error while fetching the cake by id=${req.params.id}`);
        }
    }

    /**
     * Controller function to add a new cake
     * @param req 
     * @param res 
     */
    public async addNewCake(req: express.Request, res: express.Response): Promise<void> {
        try {
            if (req.body.newCakeDetails) {
                const addResult = await CakeService.addNewCake(req.body.newCakeDetails);
                res.status(200).send(addResult);
            } else {
                res.status(400).send('Invalid input supplied');
            }
        }
        catch (e) {
            res.status(500).send(`Error while updating the cake details`);
        }
    }

    /**
     * Controller function to update cake details
     * @param req 
     * @param res 
     */
    public async updateById(req: express.Request, res: express.Response): Promise<void> {
        try {
            if (req.body.newCakeDetails) {
                const updateResult = await CakeService.updateCakeDetails(req.body.newCakeDetails);
                if (updateResult) {
                    res.status(200).send('Details updated successfully');
                } else {
                    res.status(400).send('Supplied cake id is not present to update');
                }
            } else {
                res.status(400).send('Invalid input supplied');
            }
        }
        catch (e) {
            res.status(500).send(`Error while updating the cake details`);
        }
    }

    /**
     * Controller function to delete a cake
     * @param req 
     * @param res 
     */
    public async deleteById(req: express.Request, res: express.Response) {
        try {
            if (req.params.id) {
                const cakeId = parseInt(req.params.id);
                const deleteResult = await CakeService.deleteCake(cakeId);
                if (deleteResult) {
                    res.status(200).send('Deleted successfully');
                } else {
                    res.status(400).send('Supplied cake id is not present to delete');
                }
            } else {
                res.status(400).send('Invalid input supplied');
            }
        }
        catch (e) {
            res.status(500).send(`Error while updating the cake details`);
        }
    }
}

export default new CakeController;