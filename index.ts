
import IPerson from "./src/app/entity/IPerson"
import IProfile from "./src/app/entity/IProfile"

import MemoryRepository from "./src/app/repository/MemoryRepository"


async function main() {

  
        const person:IPerson = { idPerson:1 ,name:"Paulo"}
        //const profile:IProfile = { idProfile:1,name:"Administrador" }

        const repository = new MemoryRepository<IPerson>()
        repository.Create( person )
        repository.Create( person )
        repository.Create( person )
        repository.Create( person )
        repository.Create( person )


        const resp = repository.getAll()

        console.log( resp )
        //repository.Create( profile  )


    console.log("hola mundo")
}

main()