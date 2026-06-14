let bookingModel = require("../models/bookingModel");

let addBooking = (req, res) => {
    bookingModel.addBooking(req.body, res);
}

let getAllBookings = (req, res) => {
    bookingModel.getAllBookings(res);
}

let updateBooking = (req, res) => {
    bookingModel.updateBooking(req.params.id, req.body, res);
}

let deleteBooking = (req, res) => {
    bookingModel.deleteBooking(req.params.id, res);
}

module.exports = { addBooking , getAllBookings , updateBooking , deleteBooking };