/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let bcrypt = require('bcrypt')

module.exports = {
  
    login: async function(req,res){
        //Buscar usuario
        let user = await User.findOne({where:{email: req.body.email}})
        if (user){
            //Generar token
            bcrypt.compare(req.body.password, user.password,function(err,result){
                if (result){
                    return res.status(200).json({
                        user: user,
                        token: jwToken.sign(user)
                    })
                }else{
                    return res.status(401).json({message: 'Password incorrecta'})
                }
            })
        }else{
            return res.status(404).json({message: 'Usuario no encontrado'})
        }
    },

    check: async function(req,res){
        return res.json(req.user)
    },
    signup: async function(req,res){
        let user = {
            nickname: req.body.nickname,
            email: req.body.email,
            password: req.body.password
        }

        await User.create(user)
        return res.status(201).json({message: 'Usuario registrado'})
    },

};

