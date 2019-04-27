const Contact = require('../models/contact.model.js');

// Create and Save a new Contact
exports.create = (req, res) => {
    // Validate request
    //if(!req.body.content) return res.status(400).send({message: "Contact content can not be empty"});

    // Create a Contact
    const contact = new Contact({
        first_name: req.body.first_name, 
        last_name: req.body.last_name,        
        phone: req.body.last_name,   
        email: req.body.last_name,   
        address: req.body.last_name,
        additional_info: req.body.additional_info,
        user_id: req.body.user_id
    });

    // Save Contact in the database
    contact.save().then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({message: err.message || "Something went wrong.Please contact administrator" });
    });
};

// Retrieve and return all contacts from the database.
exports.findAll = (req, res) => {
    Contact.find().then(contacts => {
        res.status(200).send(contacts);
    }).catch(err => {
        res.status(500).send({message: err.message || "Some error occurred while retrieving contacts."});
    });
};

// Find a single contact with a id
exports.findOne = (req, res) => {
    Contact.findById(req.params.id)
    .then(contact => {
        if(!contact) {
            return res.status(404).send({
                message: "Contact not found with id " + req.params.id
            });            
        }
        res.send(contact);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Contact not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving contact with id " + req.params.id
        });
    });
};

// Update a contact identified by the id in the request
exports.update = (req, res) => {
    // Validate Request
    // if(!req.body.content) {
    //     return res.status(400).send({
    //         message: "Contact content can not be empty"
    //     });
    // }

    const contact = new Contact({
        first_name: req.body.first_name, 
        last_name: req.body.last_name,        
        phone: req.body.last_name,   
        email: req.body.last_name,   
        address: req.body.last_name,
        additional_info: req.body.additional_info,
        user_id: req.body.user_id
    });
    // Find contact and update it with the request body
    Contact.findByIdAndUpdate(req.params.id, contact,{new: true})
    .then(contact => {
        if(!contact) {
            return res.status(404).send({
                message: "Contact not found with id " + req.params.id
            });
        }
        res.send(contact);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Contact not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error updating contact with id " + req.params.id
        });
    });
};

// Delete a contact with the specified id in the request
exports.delete = (req, res) => {
    Contact.findByIdAndRemove(req.params.id)
    .then(contact => {
        if(!contact) {
            return res.status(404).send({
                message: "Contact not found with id " + req.params.id
            });
        }
        res.send({message: "Contact deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Contact not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete contact with id " + req.params.id
        });
    });
};


/*
{
	"first_name": "Admin5", 
    "last_name": "Admin5",
    "phone":"9876543210",
    "email":"test@domain.com",
    "address":"newyork city,USA",
    "additional_info":"[{'social_media':'['facebook':'www.facebook.com','twitter':'www.twitter.com']'},{'birth_date':'01/07/1987'}]",
    "user_id":"1"
}*/