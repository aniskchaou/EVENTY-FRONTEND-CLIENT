
var Category = require("../../models/category.models")

exports.getCount = (req, res) => {

    Category.count()
        .then(data => {
            res.send({ 'category': data })
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });

}

exports.create = (req, res) => {
    // Validate request
    /* if (!req.body.categoryname) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    } */

    // Create a category
    const category = {
        name: req.body.name,
        description: req.body.description
    }

    // Save category in the database
    Category.create(category)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Category."
            });
        });
};


exports.findAll = (req, res) => {

    const categoryname = req.query.categoryname;
    var condition = categoryname ? { categoryname: { [Op.like]: `%${categoryname}%` } } : null;

    Category.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving categorys."
            });
        });
};


exports.findOne = (req, res) => {
    const id = req.params.id;

    Category.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Category with id=" + id
            });
        });
};



exports.update = (req, res) => {
    const id = req.params.id;
    console.log(req.body)
    Category.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Category was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Category with id=${id}. Maybe Category was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Category with id=" + id
            });
        });
};


exports.delete = (req, res) => {
    const id = req.params.id;

    Category.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Category was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Category with id=${id}. Maybe Category was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Category with id=" + id
            });
        });
};


exports.deleteAll = (req, res) => {
    Category.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Category were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
};