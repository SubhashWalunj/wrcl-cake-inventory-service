import { ICakeInterface } from '../interfaces/cake.interface';
import LocalDataRepository from '../repositories/local-data.repository';

class CakeService {
    /**
     * Get all cakes stored in inventory
     * @returns Promise
     */
    public async getAllCakes(): Promise<ICakeInterface[]> {
        return await LocalDataRepository.getAllCakes();
    }

    /**
     * Get cake by id
     * @param id:number
     * @returns Promise
     */
    public async getCakeById(id: number): Promise<ICakeInterface | null> {
        return await LocalDataRepository.getCakeById(id);
    }

    public async addNewCake(newCake: ICakeInterface): Promise<ICakeInterface> {
        return await LocalDataRepository.addNewCake(newCake);
    }

    /**
     * Update cake with new details
     * @param newCakeDetails ICakeInterface
     * @returns Promise
     */
    public async updateCakeDetails(newCakeDetails: ICakeInterface): Promise<boolean> {
        return await LocalDataRepository.updateCakeDetails(newCakeDetails);
    }

    /**
     * Delete cake by id
     * @param id number
     * @returns Promise
     */
    public async deleteCake(id: number): Promise<boolean> {
        return LocalDataRepository.deleteCake(id);
    }

}

export default new CakeService;