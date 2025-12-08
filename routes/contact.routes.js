import  express  from 'express';
import {
    getContacts,
    getContact,
    addConatctPage,
    addContact,
    updateConatctPage,
    updateConatct,
    deleteConatct

} from "../controller/contact.controller.js"

const router = express.Router()
//Routes
router.get('/', getContacts)

router.get('/show-contact/:id', getContact)

router.get('/add-contact', addConatctPage)

router.post('/add-contact', addContact)

router.get('/update-contact/:id', updateConatctPage)

router.post('/update-contact/:id', updateConatct)

router.get('/delete-contact/:id', deleteConatct)

export default router
