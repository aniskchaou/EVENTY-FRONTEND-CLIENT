const Sponser = require("../models/sponser.models");

exports.findAllSponsers = (res) => {

    Sponser.findAll({})
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

exports.createSponser = (income, res) => {
    Sponser.create(income)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Sponser."
            });
        });
}

exports.findSponserById = (id) => {
    Sponser.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Sponser with id=" + id
            });
        });
}

exports.deleteSponserById = (id, res) => {
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
}

exports.updateSponser = (id, req, res) => {
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
}

exports.deleteAllSponsers = () => {
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
}