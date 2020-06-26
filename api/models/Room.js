/**
 * Room.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name:{
      // atributos
      type:'string',
      required: true,
      allowNull: false,
      unique:true
    },
    information:{
      collection: 'information',
      via: 'owner'
    },
    messages:{ //Uno a muchos
      collection: 'message',
      via: 'owner'
    },
    stickers:{
      collection:'sticker',
      via:'rooms'
    }
  },

};

