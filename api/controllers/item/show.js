const global_items = [
  {id: 1, text: 'lampara', length: 7},
  {id: 2, text: 'tostador', length: 8},
  {id: 3, text: 'mermelada', length: 9}
]

module.exports = {


  friendlyName: 'Show',


  description: 'Show item.',


  inputs: {
    id:{
      type:'number',
      required: true
    }
  },


  exits: {
    success: {},
    error: {
      responseType: 'notFound'
    }
  },


  fn: async function (inputs,exits) {
    // Obtener ID  /words/ID
    let id = inputs.id

    //Obtener el elemento
    let item = global_items.filter(item => parseInt(item.id) === parseInt(id))
    
    if (item.length > 0){
        return exits.success(item)
    }else{
        return exits.error()
    }
  }


};
