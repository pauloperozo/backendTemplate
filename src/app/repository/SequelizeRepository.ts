////////////////////////////////////////////////////////////////////
import IRepository from './IRepository'
import {ModelCtor, Model } from 'sequelize'

////////////////////////////////////////////////////////////////////
class SequelizeRepository implements IRepository {

    private db 
    private model:Model
    
    constructor( db:any, model:Model ) {
        this.db  = db
        this.model = model
    }

    Init(): void {
        throw new Error("Method not implemented.");
    }
    
    getAll(): void {

        throw new Error("Method not implemented.");
    }
    
    Create(): void {
        throw new Error("Method not implemented.");
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


