////////////////////////////////////////////////////////////////////
import IRepository from './IRepository'
import IPerson from '../entity/IPerson';
import IProfile from '../entity/IProfile';
//import { Model } from 'sequelize'

////////////////////////////////////////////////////////////////////
class SequelizeRepository implements IRepository {

    private db 
    //private model:Model
    
    constructor( db:any) {
        this.db  = db
        //this.model =  T
    }

    Init(): void {
        throw new Error("Method not implemented.");
    }
    
    getAll(): void {

        throw new Error("Method not implemented.");
    }
    
    Create( item : IPerson | IProfile   ): void {
       
        console.log( item )

    }
    
    Read(): void {
        throw new Error("Method not implemented.");
    }
    
    Update(): void {
        throw new Error("Method not implemented.");
    }
    
    Delete(): boolean {
        throw new Error("Method not implemented.");
    }

    Query(): void {
        throw new Error("Method not implemented.");
    }

}
////////////////////////////////////////////////////////////////////
export default SequelizeRepository
////////////////////////////////////////////////////////////////////


