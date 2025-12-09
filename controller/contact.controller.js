import Contact from "../models/contacts.models.js"
import mongoose from "mongoose";

export const getContacts =  async (req,res) => {
    try{
        // const users = await Contact.find();
        const {page = 1, limit = 3} = req.query
        const option = {
            page: parseInt(page),
            limit: parseInt(limit)
        }
        const result = await Contact.paginate({}, option)
        // res.json(result)
        
        res.render('home', { 
            totalDocs: result.totalDocs,
            limit: result.limit,
            totalPages: result.totalPages,
            currentPage: result.page,
            counter: result.pagingCounter,
            hasPrevPage: result.hasPrevPage,
            hasNextPage: result.hasNextPage,
            prevPage: result.prevPage,
            nextPage: result.nextPage,
            users:result.docs
         })
    }catch(error){
         res.render("500",{message:error})
    }
}
export const getContact =  async (req,res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        res.render("404",{message:"Invalid Id."})
    }
    try{
        const user = await Contact.findOne({ _id: req.params.id } );
        if(!user){
            res.render("404",{message:"User not found."})
        }
        res.render('show-contact', {user})
    }catch(error){
        res.render("500",{message:error})
    }
}
export const addConatctPage = (req,res) => {
    res.render('add-contact')
}
export const addContact = async (req,res) => {
    try{
        await Contact.create(req.body)
        res.redirect('/')
    }catch(error){
        res.render("500",{message:error})
    }
}
export const updateConatctPage = async (req,res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        res.render("404",{message:"Invalid Id"})
    }
    try{
        const user = await Contact.findById(req.params.id);
        if(!user){
            res.render("404",{message:"User not found."})
        }
        res.render('update-contact', {user})
    }catch(error){
        res.render("500",{message:error})
    }
}

export const updateConatct = async (req,res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        res.render("404",{message:"Invalid Id"})
    }
    try{
       const user =  await Contact.findByIdAndUpdate(req.params.id,req.body)
        if(!user){
            res.render("404",{message:"User not found."})
        }
        res.redirect('/')
    }catch(error){
        res.render("500",{message:error})
    }
}
export const deleteConatct = async (req,res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        res.render("404",{message:"Invalid Id"})
    }
    try{
       const user =  await Contact.findByIdAndDelete(req.params.id)
        if(!user){
            res.render("404",{message:"User not found."})
        }
        res.redirect('/')
    }catch(error){
        res.render("500",{message:error})
    }
   
}