const Organiser = require("../models/organiser.models");

exports.findAllOrganisers = (res) => {

    Organiser.findAll({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
}

exports.createOrganiser = (income, res) => {
    Organiser.create(income)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Organiser."
            });
        });
}

exports.findOrganiserById = (id) => {
    Organiser.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Organiser with id=" + id
            });
        });
}

exports.deleteOrganiserById = (id, res) => {
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
}

exports.updateOrganiser = (id, req, res) => {
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
}

exports.deleteAllOrganisers = () => {
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
}