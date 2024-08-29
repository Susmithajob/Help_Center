import express from 'express';
import Card from "../Schema/Info.js";

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const cards = await Card.find({});
        return res.json(cards);
    } catch (err) {
        console.error(err);
        return res.status(500).send('Failed to retrieve cards');
    }
});

export default router;
