import { ICakeInterface } from "../interfaces/cake.interface";


class LocalDataRepository {
    private cakes: ICakeInterface[] = [];
    constructor() {
        this.cakes = [{
            id: 1,
            name: "Gateau",
            comment: "Chocolate, vanilla bean and boysenberry gateau. Gluten free, dairy free, refined sugar free",
            imageUrl: "https://res.cloudinary.com/dj8hpyysc/image/upload/v1626690335/box_615x0_cpimyf.jpg",
            yumFactor: 4
        },
        {
            id: 2,
            name: "Chocolate frosted",
            comment: "This rich, moist chocolate cake makes an impressive birthday centerpiece – especially if, like my children, you are of the opinion that a birthday cake must always feature chocolate, and plenty of it.",
            imageUrl: "https://res.cloudinary.com/dj8hpyysc/image/upload/v1626690281/chocolate-frosted-cake-89183-2_hghioz.jpg",
            yumFactor: 5
        },
        {
            id: 3,
            name: "Gems cake",
            comment: "Cute gems cake, delicious and attractive.",
            imageUrl: "https://res.cloudinary.com/dj8hpyysc/image/upload/v1626883307/sjdpdggvvk6b9nixtpxz.jpg",
            yumFactor: 4
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
        cake.id = newId + 1;
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