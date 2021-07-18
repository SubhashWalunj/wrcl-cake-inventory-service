import { ICakeInterface } from "../interfaces/cake.interface";


class LocalDataRepository {
    private cakes: ICakeInterface[] = [];
    constructor() {
        this.cakes = [{
            id: 1,
            name: "cake1",
            comment: "This is 1st cake",
            imageUrl: "http://waracle-cake/cake1.jpg",
            yumFactor: 4
        },
        {
            id: 2,
            name: "cake2",
            comment: "This is 2nd cake",
            imageUrl: "http://waracle-cake/cake2.jpg",
            yumFactor: 5
        }];
    }

    /**
     * Get list of all cakes
     * @returns ICakeInterface[]
     */
    public async getAllCakes(): Promise<ICakeInterface[]> {
        return this.cakes;
    }

    /**
     * Get cake by id
     * @param id:number
     * @returns ICakeInterface or null
     */
    public async getCakeById(id: number): Promise<ICakeInterface | null> {
        const matchedCake: ICakeInterface | undefined = this.cakes.find((cake) => {
            return cake.id === id;
        });
        return matchedCake || null;
    }

    /**
     * Add new cake in store
     * @param cake ICakeInterface
     * @returns ICakeInterface
     */
    public async addNewCake(cake: ICakeInterface): Promise<ICakeInterface> {
        let newId = 1;
        if (this.cakes.length) {
            newId = this.cakes[this.cakes.length - 1].id;
        }
        cake.id = newId;
        this.cakes.push(cake);
        return cake;
    }

    /**
     * Update cake with new details by id
     * @param newCakeDetails ICakeInterface
     * @returns boolean
     */
    public async updateCakeDetails(newCakeDetails: ICakeInterface): Promise<boolean> {
        const matchedCakeIndex: number = this.cakes.findIndex((cake) => {
            return cake.id === newCakeDetails.id;
        });

        if (matchedCakeIndex > -1) {
            this.cakes.splice(matchedCakeIndex, 1, newCakeDetails);
            return true;
        }
        return false;
    }

    /**
     * Delete cake by id
     * @param id number
     * @returns boolean
     */
    public async deleteCake(id: number): Promise<boolean> {
        const matchedCakeIndex: number = this.cakes.findIndex((cake) => {
            return cake.id === id;
        });

        if (matchedCakeIndex > -1) {
            this.cakes.splice(matchedCakeIndex, 1);
            return true;
        }
        return false;
    }
}

export default new LocalDataRepository;