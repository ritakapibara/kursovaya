const {Item} = require('../models/models')
const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError')

class ItemController {
    async create(req,res,next) {
        try{
        const {name,price,desc} = req.body
        const {img} = req.files
        let filename = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname,'..','static',filename))

        const item = await Item.create({name, price, desc, img: filename})
        return res.json(item)
        }catch(e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req,res,next) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let items;
        items = await Item.findAndCountAll({limit,offset});
        return res.json(items);
        
    }

    async getOne(req,res) {
        const {id} = req.params
        const item = await Item.findOne(
            {
                where: {id},
            },
        )
        return res.json(item)
    
        
        
    }
}

module.exports = new ItemController()