var User = require("../models/user.models.js")
var sequelize = require("../db/init.sequelize")
var Sequelize = require('sequelize');
var user = require("./seeds.sequelize")
var seeds = require("./seeds.sequelize");
var DashboardSettings = require("../models/settings/dashboard.settings.models.js")
var EmailSettings = require("../models/settings/email.settings.models.js")
var EmailTemplateSettings = require("../models/settings/email.template.settings.models.js")
var FooterSettings = require("../models/settings/footer.settings.models.js")
var HeaderSettings = require("../models/settings/header.settings.models.js")
var LocalisationSettings = require("../models/settings/localisation.settings.models.js")
var NotificationSettings = require("../models/settings/notification.settings.models.js")
var SystemSettings = require("../models/settings/system.settings.models.js");
const Message = require("../models/message.models.js");


const Booking = require("../models/booking.models.js");
const Category = require("../models/category.models.js");
const Event = require("../models/event.models.js");
const Organiser = require("../models/organiser.models.js");
const Sponser = require("../models/sponser.models.js");
const Userr = require("../models/user.models.js");

sequelize.sync().then(function () {
    DashboardSettings.create(seeds.getDashboardSettings())
    EmailSettings.create(seeds.getEmailSettings())
    FooterSettings.create(seeds.getFooterSettings())
    HeaderSettings.create(seeds.getHeaderSettings())
    LocalisationSettings.create(seeds.getLocalisationSettings())
    NotificationSettings.create(seeds.getNotificationSettings())
    SystemSettings.create(seeds.getSytemSettings())
    Message.create()

    Booking.create(user.bookingSeeds)
    Category.create(user.categorySedds)
    Event.create(user.eventSeeds)
    Organiser.create(user.organiserSeeds)
    Sponser.create(user.sponserSeeds)
    Userr.create(user.userSeed)



    //return User.create(user.userSeed);
}).then(function (res) {
    console.log(res.get({ plain: true }));
});

