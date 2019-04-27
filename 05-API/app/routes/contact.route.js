module.exports = (app) => {
    const contacts = require('../controllers/contact.controller.js');
    const endpointname = 'contact';
    // Create a new todo
    app.post(`/api/${endpointname}`, contacts.create);    

    // Retrieve all todos
    app.get(`/api/${endpointname}`, contacts.findAll);

    // Retrieve a single todo with id
    app.get(`/api/${endpointname}:id`, contacts.findOne);

    // Update a Note with id
    app.put(`/api/${endpointname}:id`, contacts.update);

    // Delete a todo with id
    app.delete(`/api/${endpointname}:id`, contacts.delete);
}