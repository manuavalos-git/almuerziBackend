const express=require('express')
const Meals=require('../models/Meals')
const router=express.Router()

router.get("/",(req,res)=>{
    Meals.find()
    .exec()
    .then(x => res.status(200).send(x))
})
router.get("/:id",(req,res)=>{
    Meals.findById(req.params.id)
    .then(x => res.status(200).send(x))
})
router.post("/",(req,res)=>{
   Meals.create(req.body)
   .then(x => res.status(201).send(x))
})
router.put("/:id",(req,res)=>{
    Meals.findById(req.params.id).update(req.body)
    .then(() => res.sendStatus(204))
})
router.delete("/:id",(req,res)=>{
    Meals.findById(req.params.id).deleteMany()
    .then(() => res.sendStatus(204))
})

module.exports=router