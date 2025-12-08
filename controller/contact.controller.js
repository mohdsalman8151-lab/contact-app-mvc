import Contact from "../models/contacts.models.js"

export const getContacts =  async (req,res) => {
    const users = await Contact.find();
    res.render('home', { users })
}
export const getContact =  async (req,res) => {
    const user = await Contact.findOne({ _id: req.params.id } );
    res.render('show-contact', {user})
}
export const addConatctPage = (req,res) => {
    res.render('add-contact')
}
export const addContact = async (req,res) => {
    const user = await Contact.create(req.body)
    res.redirect('/')
}
export const updateConatctPage = async (req,res) => {
    const user = await Contact.findById(req.params.id);
    res.render('update-contact', {user})
}

export const updateConatct = async (req,res) => {
    await Contact.findByIdAndUpdate(req.params.id,req.body)
    res.redirect('/')
}
export const deleteConatct = async (req,res) => {
    await Contact.findByIdAndDelete(req.params.id)
    res.redirect('/')
}