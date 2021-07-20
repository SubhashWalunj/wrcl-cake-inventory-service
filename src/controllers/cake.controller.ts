import express from 'express';
import { ISendResponse } from '../interfaces/send-response.interface';
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
            const response: ISendResponse = {
                ok: true,
                message: '',
                data: cakes
            };
            res.status(200).send(response);
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
                    const response: ISendResponse = {
                        ok: true,
                        message: '',
                        data: cake
                    };
                    res.status(200).send(response);
                } else {
                    const response: ISendResponse = {
                        ok: false,
                        message: `Cake with id ${req.params.id} is not found`,
                        data: null
                    };
                    res.status(400).send(response);
                }
            } else {
                const response: ISendResponse = {
                    ok: false,
                    message: `Invalid input supplied`,
                    data: null
                };
                res.status(400).send(response);
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
            if (req.body.cake) {
                const addResult = await CakeService.addNewCake(req.body.cake);
                const response: ISendResponse = {
                    ok: true,
                    message: '',
                    data: addResult
                };
                res.status(200).send(response);
            } else {
                const response: ISendResponse = {
                    ok: false,
                    message: 'Invalid input supplied',
                    data: null
                };
                res.status(400).send(response);
            }
        }
        catch (e) {
            const response: ISendResponse = {
                ok: false,
                message: 'Error while updating the cake details',
                data: null
            };
            res.status(500).send(response);
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
                    const response: ISendResponse = {
                        ok: true,
                        message: 'Details updated successfully',
                        data: null
                    };
                    res.status(200).send(response);
                } else {
                    const response: ISendResponse = {
                        ok: false,
                        message: 'Supplied cake id is not present to update',
                        data: null
                    };
                    res.status(400).send(response);
                }
            } else {
                const response: ISendResponse = {
                    ok: false,
                    message: 'Invalid input supplied',
                    data: null
                };
                res.status(400).send(response);
            }
        }
        catch (e) {
            const response: ISendResponse = {
                ok: false,
                message: 'Error while updating the cake details',
                data: null
            };
            res.status(500).send(response);
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
                    const response: ISendResponse = {
                        ok: true,
                        message: 'Deleted successfully',
                        data: null
                    };
                    res.status(200).send(response);
                } else {
                    const response: ISendResponse = {
                        ok: false,
                        message: 'Supplied cake id is not present to delete',
                        data: null
                    };
                    res.status(400).send(response);
                }
            } else {
                const response: ISendResponse = {
                    ok: false,
                    message: 'Invalid input supplied',
                    data: null
                };
                res.status(400).send(response);
            }
        }
        catch (e) {
            const response: ISendResponse = {
                ok: false,
                message: 'Error while updating the cake details',
                data: null
            };
            res.status(500).send(response);
        }
    }
}

export default new CakeController;