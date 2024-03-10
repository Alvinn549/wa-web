const express = require("express");
const { kirimPesan } = require("../controller/WhatsappController");

const router = express.Router();

router.get("/", (req, res) => {
  res.send(`
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
      <h1>Sheeesshh !</h1>
    </div>
  `);
});

router.get("/api/send", kirimPesan);

module.exports = router;
