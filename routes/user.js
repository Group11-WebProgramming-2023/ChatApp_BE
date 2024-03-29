const router = require("express").Router();

const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

router.post(
  "/generate-zego-token",
  authController.protect,
  userController.generateZegoToken
);
router.get(
  "/get-call-logs",
  authController.protect,
  userController.getCallLogs
);
router.get("/profile", authController.protect, userController.profile);
router.post(
  "/update-profile",
  authController.protect,
  userController.updateProfile
);
router.get(
  "/all-verified-users",
  authController.protect,
  userController.getAllVerifiedUsers
);
router.get("/all-users", authController.protect, userController.getUsers);
router.get(
  "/all-friend-requests",
  authController.protect,
  userController.getRequests
);
router.get("/all-friends", authController.protect, userController.getFriends);

router.post(
  "/start-audio-call",
  authController.protect,
  userController.startAudioCall
);
router.post(
  "/start-video-call",
  authController.protect,
  userController.startVideoCall
);

module.exports = router;
