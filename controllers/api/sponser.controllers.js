
var Sponser = require("../../models/sponser.models")


exports.getCount = (req, res) => {

    Sponser.count()
        .then(data => {
            res.send({ 'sponser': data })
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

    // Create a sponser
    const sponser = {
        name: req.body.name,
        email: req.body.email,
        website: req.body.website,
        telephone: req.body.telephone
    }

    // Save sponser in the database
    Sponser.create(sponser)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Sponser."
            });
        });
};


exports.findAll = (req, res) => {

    const username = req.query.username;
    var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;

    Sponser.findAll({ where: condition })
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

    Sponser.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Sponser with id=" + id
            });
        });
};



exports.update = (req, res) => {
    const id = req.params.id;
    console.log(req.body)
    Sponser.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Sponser was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Sponser with id=${id}. Maybe Sponser was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Sponser with id=" + id
            });
        });
};


exports.delete = (req, res) => {
    const id = req.params.id;

    Sponser.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Sponser was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Sponser with id=${id}. Maybe Sponser was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Sponser with id=" + id
            });
        });
};


exports.deleteAll = (req, res) => {
    Sponser.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Sponser were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
};