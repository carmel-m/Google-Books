const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/saved"
router
  .route("/saved")
  .get(booksController.findAll)
  .delete(booksController.remove);

module.exports = router;
