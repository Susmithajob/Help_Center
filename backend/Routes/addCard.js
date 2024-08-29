import express from "express";
const router= express.Router();
import Card from "../Schema/Info.js";


router.post('/',async function(req,res){
    const {title,description} = req.body;
    try{
        if (!title || !description) {
          return res.status(400).send('All fields are required');
        }
        var newCard = new Card({
            title : title,
            description : description
        });
        await newCard.save(); 
        return res.json(); 
        }
        catch (err) {
            console.error(err);
            return res.status(500).send('Failed to add card');
        }
})

export default router;