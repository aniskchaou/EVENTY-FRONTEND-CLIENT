
var Event = require("../../models/event.models")

exports.getCount = (req, res) => {

    Event.count()
        .then(data => {
            res.send({ 'event': data })
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });

}

exports.create = (req, res) => {
    // Validate request
    /*   if (!req.body.username) {
          res.status(400).send({
              message: "Content can not be empty!"
          });
          return;
      } */

    // Create a event
    const event = {
        name: req.body.name,
        category: req.body.category,
        organiser: req.body.organiser,
        date: req.body.date,
        start: req.body.start,
        end: req.body.end,
        sponsor: req.body.sponsor,
        price: req.body.price,
        max: req.body.max,
        description: req.body.description,
        status: req.body.status
    }

    // Save event in the database
    Event.create(event)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Event."
            });
        });
};


exports.findAll = (req, res) => {

    const username = req.query.username;
    var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;

    Event.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
};


exports.findOne = (req, res) => {
    const id = req.params.id;

    Event.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Event with id=" + id
            });
        });
};



exports.update = (req, res) => {
    const id = req.params.id;
    console.log(req.body)
    Event.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Event was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Event with id=${id}. Maybe Event was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Event with id=" + id
            });
        });
};


exports.delete = (req, res) => {
    const id = req.params.id;

    Event.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Event was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Event with id=${id}. Maybe Event was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Event with id=" + id
            });
        });
};


exports.deleteAll = (req, res) => {
    Event.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Event were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
};