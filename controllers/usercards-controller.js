const Usercard = require('../models/usercard');

const usercardsController = {};
//show users' cards, user cards page
usercardsController.findUserCards = async (req, res) => {
  try {
    const usercards = await Usercard.findUserCards(req.user.id);
    return res.json(usercards);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
//add card to users_cards
usercardsController.addToUser = async (req, res) => {
  try {
    const usercard = await Usercard.addToUser(
      {
        cardId: req.body.cardId,
        name: req.body.name,
        class: req.body.class,
        attack: req.body.attack,
        defense: req.body.defense,
        imageUrl: req.body.imageUrl
      },
      req.user.id
    );
    return res.json(usercard);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
//edit users' card info
usercardsController.update = async (req, res) => {
  try {
    const usercard = await console.log(req.params);
    await Usercard.update(req.body.name, req.params.id);
    return res.json(usercard);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
//delete one card
usercardsController.delete = async (req, res) => {
  try {
    const usercard = await Usercard.destroy(req.params.id);
    return res.json({
      message: "ok",
      data: usercard
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};
//find random five user cards, for battle ready page
usercardsController.findFiveUserCards = async (req, res) => {
  try {
    const UserCard = await Usercard.findFiveUserCards(req.user.id);
    await Usercard.findFiveUserCards(1);
    return {
      userCard: userCard,
      opponentCard: opponentCard
    };
    return res.json(data);
  } catch (err) {
    console.log(err);
  }
};

module.exports = usercardsController;
