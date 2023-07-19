/////////////////////////////////////
interface IRepository {

    Init(): void
    
    getAll(): void
    /* Crud */
    Create(): void
    Read(): void
    Update(): void
    Delete(): boolean
    /* */
    Query(): void
}
/////////////////////////////////////
export default IRepository
/////////////////////////////////////