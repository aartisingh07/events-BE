const express = require("express");
const bookingController = require("../controllers/bookingController");

let router = express.Router(); //Watchman

router.post("/add", bookingController.addBooking); 
router.get("/get", bookingController.getAllBookings);
router.put("/update/:id", bookingController.updateBooking);
router.delete("/delete/:id", bookingController.deleteBooking);

module.exports = router;