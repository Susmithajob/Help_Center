import express from 'express';
import Card from "../Schema/Info.js";

const router = express.Router();

router.get('/:id', async (req, res) => {
    const title  = req.params.id;
    const regex = new RegExp(`^${title.trim().replace(/\s+/g, '\\s*')}$`, 'i');
   
    try {
        const card = await Card.findOne({ title : regex });
        return res.json(card);
    } catch (err) {
        console.error(err);
        return res.status(500).send('Failed to retrieve card');
    }
});

export default router;
