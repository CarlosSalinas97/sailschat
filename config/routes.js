/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/
  // <GET/PUT/POST/DELETE/PATCH> <url>/:<param>
  // ALL agregado de forma implicita
  '/': { 
    view: 'pages/homepage' 
  },

  /*'GET /items': 'item/list',
  'GET /items/:id': 'item/show',
  'POST /items': 'item/store',

  'GET /words': 'WordController.list',
  'GET /words/:id': 'WordController.show',
  'POST /words': 'WordController.store',*/

  //Vista
  'GET /': 'ViewController.login',
  'GET /home': 'ViewController.home',
  'GET /signup': 'ViewController.signup',

  //API Auth
  'POST /auth/login': 'AuthController.login',
  'GET /auth/check': 'AuthController.check',
  'POST /auth/signup': 'AuthController.signup',

  //Salas
  'GET /rooms': 'RoomController.list',
  'GET /rooms/:id': 'RoomController.show',
  'POST /rooms': 'RoomController.store',
  'PUT /rooms/:id': 'RoomController.update',
  'DELETE /rooms/:id': 'RoomController.destroy',

  //Informacion
  'POST /rooms/:room_id/informations': 'InformationController.store',

  //Mensajes
  'GET /rooms/:room_id/messages': 'MessageController.list',
  'POST /rooms/:room_id/messages': 'MessageController.store',

  //Stickers
  'GET /stickers': 'StickerController.list',
  'POST /stickers': 'StickerController.store',
  'POST /rooms/:room_id/stickers/:sticker_id': 'StickerController.attach',
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};