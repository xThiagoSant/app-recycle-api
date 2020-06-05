import {Request, Response} from 'express'
import knex from '../database/connection'

class ItemsController {
    async index (req: Request, res: Response) {
        const items = await knex('items').select('*')
    
        //coloquei na url da imagem o ip do expo para aula 4
        // lembrar de colocar o url das imagens hospedadas
        const serializedItems = items.map(item =>{
            return {
                id: item.id,
                title: item.title,
                image_url: `http://192.168.1.15:3333/uploads/${item.image}`,
            }
        })
        return res.json(serializedItems)
    }
}

export default ItemsController