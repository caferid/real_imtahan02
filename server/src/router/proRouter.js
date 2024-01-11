import express from 'express'
import { del_pro,  get_id, get_pro, post_pro } from '../controller/proController.js'

export const router=express.Router()

// router.get('/',get_a)
router.get('/:id',get_id)
router.get('/',get_pro)
router.post('/',post_pro)
router.delete('/:id',del_pro)
