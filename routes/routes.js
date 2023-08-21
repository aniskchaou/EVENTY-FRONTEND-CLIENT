var express = require('express');
var routerr = express.Router();

var userController = require('../controllers/api/user.controllers')
var indexController = require('../controllers/home.controllers')

var bookingController = require('../controllers/api/booking.controllers')
var categoryController = require('../controllers/api/category.controllers')
var eventController = require('../controllers/api/event.controllers')
var messageController = require('../controllers/api/message.controllers')
var organiserController = require('../controllers/api/organiser.controllers')
var sponserController = require('../controllers/api/sponser.controllers')
var settingsController = require('../controllers/api/settings.controllers')

routerr.get("/api/booking/count", bookingController.getCount);
routerr.get("/api/event/count", eventController.getCount);
routerr.get("/api/organiser/count", organiserController.getCount);
routerr.get("/api/sponser/count", sponserController.getCount);

//settings
routerr.get("/api/syssettings", settingsController.findSystemSettings);
routerr.put("/api/edit/systemsettings/:id", settingsController.updateSystemSettings);
routerr.get("/api/restore/syssettings/:id", settingsController.restoreSystemSettings);
routerr.get("/api/dashboardsettings", settingsController.findDashboardSettings);
routerr.put("/api/edit/dashboardsettings/:id", settingsController.updateDashboardSettings);
routerr.get("/api/restore/dashboard/:id", settingsController.restoreDashboardSettings);
routerr.get("/api/emailtemplatesettings", settingsController.findEmailTemplateSettings);
routerr.get("/api/emailsettings", settingsController.findEmailSettings);
routerr.put("/api/edit/emailsettings/:id", settingsController.updateEmailSettings);
routerr.get("/api/footersettings", settingsController.findFooterSettings);
routerr.put("/api/edit/footersettings/:id", settingsController.updateFooterSettings);
routerr.get("/api/restore/footer/:id", settingsController.restoreFooterSettings);
routerr.get("/api/headersettings", settingsController.findHeaderSettings);
routerr.put("/api/edit/headersettings/:id", settingsController.updateHeaderSettings);
routerr.get("/api/restore/header/:id", settingsController.restoreHeaderSettings);
routerr.get("/api/localisationsettings", settingsController.findLocalisationSettings);
routerr.put("/api/edit/localisationsettings/:id", settingsController.updateLocalisationSettings);
routerr.get("/api/notificationsettings", settingsController.findNotificationSettings);
routerr.put("/api/edit/notificationsettings/:id", settingsController.updateNotificationsSettings);
routerr.get("/api/restore/localisationsettings/:id", settingsController.restoreLocalisationSettings);

//users
routerr.post('/api/user', userController.create)
routerr.get('/api/user', userController.findAll)
routerr.get("/api/user/:id", userController.findOne);
routerr.put("/api/user/:id", userController.update);
routerr.delete("/api/user/:id", userController.delete);
routerr.delete("/api/user", userController.deleteAll);
routerr.post("/api/user/login", userController.login);


//booking
routerr.post('/api/booking', bookingController.create)
routerr.get('/api/booking', bookingController.findAll)
routerr.get("/api/booking/:id", bookingController.findOne);
routerr.put("/api/booking/:id", bookingController.update);
routerr.delete("/api/booking/:id", bookingController.delete);
routerr.delete("/api/booking", bookingController.deleteAll);

//category
routerr.post('/api/category', categoryController.create)
routerr.get('/api/category', categoryController.findAll)
routerr.get("/api/category/:id", categoryController.findOne);
routerr.put("/api/category/:id", categoryController.update);
routerr.delete("/api/category/:id", categoryController.delete);
routerr.delete("/api/category", categoryController.deleteAll);

//event
routerr.post('/api/event', eventController.create)
routerr.get('/api/event', eventController.findAll)
routerr.get("/api/event/:id", eventController.findOne);
routerr.put("/api/event/:id", eventController.update);
routerr.delete("/api/event/:id", eventController.delete);
routerr.delete("/api/event", eventController.deleteAll);

//message
routerr.post('/api/message', messageController.create)
routerr.get('/api/message', messageController.findAll)
routerr.get("/api/message/:id", messageController.findOne);
routerr.put("/api/message/:id", messageController.update);
routerr.delete("/api/message/:id", messageController.delete);
routerr.delete("/api/message", messageController.deleteAll);

//organiser
routerr.post('/api/organiser', organiserController.create)
routerr.get('/api/organiser', organiserController.findAll)
routerr.get("/api/organiser/:id", organiserController.findOne);
routerr.put("/api/organiser/:id", organiserController.update);
routerr.delete("/api/organiser/:id", organiserController.delete);
routerr.delete("/api/organiser", organiserController.deleteAll);

//sponser
routerr.post('/api/sponser', sponserController.create)
routerr.get('/api/sponser', sponserController.findAll)
routerr.get("/api/sponser/:id", sponserController.findOne);
routerr.put("/api/sponser/:id", sponserController.update);
routerr.delete("/api/sponser/:id", sponserController.delete);
routerr.delete("/api/sponser", sponserController.deleteAll);


//Home
routerr.get('/', indexController.getHome)


module.exports = routerr;