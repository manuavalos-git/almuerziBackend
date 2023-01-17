const express=require('express')
const Orders=require('../models/Orders')
const {hasRoles,isAuthenticated}=require('../auth')
const router=express.Router()

router.get("/",(req,res)=>{
    Orders.find()
    .exec()
    .then(x => res.status(200).send(x))
})
router.get("/:id",(req,res)=>{
    Orders.findById(req.params.id)
    .then(x => res.status(200).send(x))
})
//hasRoles(['admin','user'])
router.post("/",isAuthenticated,(req,res)=>{
    Orders.create(req.body)
    .then(x => res.status(201).send(x))
})
router.put("/:id",isAuthenticated,(req,res)=>{
    Orders.findById(req.params.id).update(req.body)
    .then(() => res.sendStatus(204))
})
router.delete("/:id",isAuthenticated,(req,res)=>{
    Orders.findById(req.params.id).deleteMany()
    .then(() => res.sendStatus(204))
})

module.exports=router