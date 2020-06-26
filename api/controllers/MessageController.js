/**
 * MessageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    list: async function(req,res){
        let room_id = req.params.room_id
        let message = {}

        //Obtener informacion
        let room = await Room.findOne({id: room_id})
            .populate('messages')

        messages = room.messages

        return res.json(messages)
    },
    
    store: async function(req,res){
        //logica
        let room_id = req.params.room_id
    
        let data = {
            text: req.body.text,
            user_id: req.body.user_id,
            //Foreign Key
            owner: room_id
        }
    
        await Message.create(data)

        //Comunicar cambios a todos los clientes
        sails.sockets.blast({room: room_id})

        return res.status(201).json({message: 'Elemento mensaje creado'})
      }

};

