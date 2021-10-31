const mongoose = require("mongoose");

const database = function(){

  mongoose.connect('mongodb://localhost/hanif')
 .then(()=>{
   console.log('database connected');
 })
 .catch(()=>{
   console.log('not connected');
 })

}

module.exports = database;
