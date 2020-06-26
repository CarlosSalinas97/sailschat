const global_items = [
  {id: 1, text: 'lampara', length: 7},
  {id: 2, text: 'tostador', length: 8},
  {id: 3, text: 'mermelada', length: 9}
]

module.exports = {


  friendlyName: 'List',


  description: 'List item.',


  inputs: {},


  exits: {
    success: {}
  },

  /**
   * 
   * @param {Object} inputs Entradas de aplicacion
   */
  fn: async function (inputs,exits) {
    //Obtener todos los elementos
    let items = global_items

    //Retornamos valores
    return exits.success(items)
  }


};
