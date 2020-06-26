/**
 * Message.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    text:{
      type: 'string',
      allowNull: false,
      required: true
    },
    user_id:{
      type: 'string',
      defaultsTo:'0'
    },
    owner:{ //Uno a muchos
      model: 'room'
    }
  },

};

