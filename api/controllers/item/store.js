const global_items = [
  {id: 1, text: 'lampara', length: 7},
  {id: 2, text: 'tostador', length: 8},
  {id: 3, text: 'mermelada', length: 9}
]

module.exports = {


  friendlyName: 'Store',


  description: 'Store item.',


  inputs: {
    text:{
      type: 'string',
      require: true
    }
  },


  exits: {
    success: {},
    error: {
      requestType: 'notFound'
    }
  },


  fn: async function (inputs,exits) {
    //Obtener los datos de la peticion
    let item = {
      id: parseInt(Math.random() * 10000),
      text: inputs.text,
      length: inputs.text.length
    }
    //Insertar datos en una lista
    global_items.push(item) //Sustituir por el ORM

    //Retornar objeto con status 201
    return exits.success(item)

  }


};
