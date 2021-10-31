const axios = require("axios");
exports.details = (req, res) => {
  
    res.render("details")
};

exports.input = (req, res) => {
  res.render("input");
};

exports.item_out = (req, res) => {
  res.render("item_out");
};

exports.mainPage = (req, res) => {
 
   


    res.render("mainPage");
  
};
exports.edite = (req, res) => {
  res.render("edite");
};
