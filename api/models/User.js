/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

let bcrypt = require('bcrypt')

module.exports = {

  attributes: {
    nickname:{
      type:'string',
      required:true,
      allowNull: false,
      unique:true,
    },
    email:{
      type:'string',
      required:true,
      allowNull: false,
      unique:true,
    },
    password:{
      type:'string',
      required:true,
      allowNull: false,
    }
  },

  //Para ocultar la informacion que enviamos
  customToJSON: function(){
    return _.omit(this,['password'])
  },

  //Encriptar contraseña
  //npm install -s bcrypt
  beforeCreate: function(user,cb){
    bcrypt.genSalt(10,function(err,salt){
      bcrypt.hash(user.password, salt, function(err,hash){
        if(err){
          console.log(err)
          cb(err)
        }else{
          user.password = hash
          cb()
        }
      })
    })
  }

};

