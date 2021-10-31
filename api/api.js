const Db = require("../server/modal");
var moment = require("moment-timezone");

exports.find = async (req, res) => {
  if (req.query.id) {
    let id = req.query.id;
    await Db.findById(id)
      .then((responce) => {
        res.status(200).send(responce);
      })
      .catch((err) => {
        res.status(500).json(err.message);
      });
  } else {
    await Db.find()
      .then((responce) => {
      
        res.send(responce);
      })
      .catch((err) => {
        res.json(err.message);
      });
  }
};

exports.post = async (req, res) => {
  let db = new Db();

  //order number
  db.order = req.body.order;

  //item_1
  db.item_1.item_name = req.body.item_1_name;
  db.item_1.quentity = req.body.item_1_quentity;
  db.item_1.many = req.body.item_1_many;

  //item_2
  db.item_2.item_name = req.body.item_2_name;
  db.item_2.quentity = req.body.item_2_quentity;
  db.item_2.many = req.body.item_2_many;

  //item_3
  db.item_3.item_name = req.body.item_3_name;
  db.item_3.quentity = req.body.item_3_quentity;
  db.item_3.many = req.body.item_3_many;

  db.output.item_1 = req.body.item_1;
  db.output.item_2 = req.body.item_2;
  db.output.item_3 = req.body.item_3;
  db.updated = moment.tz("Asia/Kuala_Lumpur").format("llll");
  db.date = new Date();
  await db
    .save()
    .then((responce) => {
      if (req.body == "") {
        res.send("your round route");
      }
      res.status(200).send(responce);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

exports.edit = async (req, res) => {
  let id = req.params.id;

  console.log(id);

  await Db.findByIdAndUpdate(id, req.body)
    .then((responce) => {
      res.status(200).send(responce);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
};
exports.delet = async (req, res) => {
  let id = req.params.id;
  await Db.findByIdAndDelete(id)
    .then((responce) => {
      res.status(200).json(responce);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
};
