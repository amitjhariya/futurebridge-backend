import { Router } from "express";
const router = Router()
import {
    getContacts,createContact,getContactById,updateContact,deleteContact
} from './../controllers/contact.js'

import pagination from "../middlewares/pagination.js";

router.get('/',pagination,getContacts)

router.post('/',createContact)

router.get('/:id',getContactById)

router.patch('/:id',updateContact)

router.delete('/:id',deleteContact)

export default router