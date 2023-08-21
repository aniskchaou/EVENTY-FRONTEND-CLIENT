const fs = require('fs');

exports.userSeed = {
    username: 'admin',
    email: 'admin@gmail.com',
    telephone: '876897698',
    firstName: 'Admin',
    lastNme: 'Admin',
    password: 'admin'
}


exports.getSytemSettings = () => {
    var rawdata = fs.readFileSync('db/settings/system.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}

exports.getEmailSettings = () => {
    var rawdata = fs.readFileSync('db/settings/system.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}

exports.getEmailTemplateSettings = () => {
    var rawdata = fs.readFileSync('db/settings/email_template.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}


exports.getEmailSettings = () => {
    var rawdata = fs.readFileSync('db/settings/email.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}

exports.getFooterSettings = () => {
    var rawdata = fs.readFileSync('db/settings/footer.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}

exports.getHeaderSettings = () => {
    var rawdata = fs.readFileSync('db/settings/header.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}

exports.getLocalisationSettings = () => {
    var rawdata = fs.readFileSync('db/settings/localisation.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}

exports.getNotificationSettings = () => {
    var rawdata = fs.readFileSync('db/settings/notification.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}

exports.getDashboardSettings = () => {
    var rawdata = fs.readFileSync('db/settings/dashboard.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}

exports.bookingSeeds = {
    event: "Blue Hive",
    user: "John Doe",
    payment: "paid"
}

exports.categorySedds = {
    name: "Musical",
    description: ""
}

exports.eventSeeds = {
    name: "Blue Hive",
    category: "Musical",
    organiser: "Harte Homes",
    date: "13/10/2012",
    start: "10:00",
    end: "13:00",
    sponsor: "Red Bull",
    price: "160",
    max: "8",
    description: "",
    status: "Active"
}

exports.organiserSeeds = {
    name: "Harte Homes",
    phone: "876693734",
    email: "harteshomes@gmail.com"
}

exports.sponserSeeds = {
    name: "Red Bull",
    email: "redbool@gmail.com",
    website: "www.redbull.com",
    telephone: "0887769856"
}