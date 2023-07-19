////////////////////////////////////////////////////////////////////
import IRepository from './IRepository'
////////////////////////////////////////////////////////////////////
class MemoryRepository <T> implements  IRepository <T> {

    private items: T[] = []

    constructor( ) {
        
    }

    public Init(): void {
        throw new Error("Method not implemented.");
    }
    
    public getAll(): T[] {

        return this.items
    }
    
    public Create( item : T ) : boolean {
        this.items.push( item )
        return true
    }
    
    public Read(): T {
        throw new Error("Method not implemented.");
    }
    
    public Update(): boolean {
        throw new Error("Method not implemented.");
    }
    
    public Delete(): boolean {
        throw new Error("Method not implemented.");
    }

    public Query(): T[] {
        throw new Error("Method not implemented.");
    }

}
////////////////////////////////////////////////////////////////////
export default MemoryRepository
////////////////////////////////////////////////////////////////////


