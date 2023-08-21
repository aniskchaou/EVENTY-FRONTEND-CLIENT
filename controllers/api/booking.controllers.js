
var Booking = require("../../models/booking.models")

exports.getCount = (req, res) => {

    Booking.count()
        .then(data => {
            res.send({ 'booking': data })
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });

}

exports.create = (req, res) => {
    // Validate request
    /*   if (!req.body.bookingname) {
          res.status(400).send({
              message: "Content can not be empty!"
          });
          return;
      } */

    // Create a booking
    const booking = {
        event: req.body.event,
        user: req.body.user,
        payment: req.body.payment
    }

    // Save booking in the database
    Booking.create(booking)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Booking."
            });
        });
};


exports.findAll = (req, res) => {

    const bookingname = req.query.bookingname;
    var condition = bookingname ? { bookingname: { [Op.like]: `%${bookingname}%` } } : null;

    Booking.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving bookings."
            });
        });
};


exports.findOne = (req, res) => {
    const id = req.params.id;

    Booking.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Booking with id=" + id
            });
        });
};



exports.update = (req, res) => {
    const id = req.params.id;
    console.log(req.body)
    Booking.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Booking was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Booking with id=${id}. Maybe Booking was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Booking with id=" + id
            });
        });
};


exports.delete = (req, res) => {
    const id = req.params.id;

    Booking.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Booking was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Booking with id=${id}. Maybe Booking was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Booking with id=" + id
            });
        });
};


exports.deleteAll = (req, res) => {
    Booking.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Booking were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
};