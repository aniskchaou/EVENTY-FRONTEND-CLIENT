
var Organiser = require("../../models/organiser.models")

exports.getCount = (req, res) => {

    Organiser.count()
        .then(data => {
            res.send({ 'organiser': data })
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });

}

exports.create = (req, res) => {
    // Validate request
    /*  if (!req.body.username) {
         res.status(400).send({
             message: "Content can not be empty!"
         });
         return;
     } */

    // Create a organiser
    const organiser = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    }

    // Save organiser in the database
    Organiser.create(organiser)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Organiser."
            });
        });
};


exports.findAll = (req, res) => {

    const username = req.query.username;
    var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;

    Organiser.findAll({ where: condition })
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

    Organiser.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Organiser with id=" + id
            });
        });
};



exports.update = (req, res) => {
    const id = req.params.id;
    console.log(req.body)
    Organiser.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Organiser was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Organiser with id=${id}. Maybe Organiser was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Organiser with id=" + id
            });
        });
};


exports.delete = (req, res) => {
    const id = req.params.id;

    Organiser.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Organiser was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Organiser with id=${id}. Maybe Organiser was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Organiser with id=" + id
            });
        });
};


exports.deleteAll = (req, res) => {
    Organiser.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Organiser were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
};