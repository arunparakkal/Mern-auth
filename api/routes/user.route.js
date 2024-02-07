import express from 'express'
const route = express.Router()
import Test from '../controller/user.controller.js'


route.get("/",Test)


export default route