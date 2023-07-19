/////////////////////////////////////
interface IRepository <T> {

    Init(): void
    
    getAll(): T[]
    /* Crud */
    Create( item : T ): boolean
    Read(): T
    Update(): boolean
    Delete(): boolean
    /* */
    Query(): T[]
}
/////////////////////////////////////
export default IRepository
/////////////////////////////////////