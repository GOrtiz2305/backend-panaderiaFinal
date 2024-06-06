import express from 'express'
import { getAllClientes, getCliente, createCliente, updateCliente, deleteCliente } from '../controllers/ClienteController.js'
const router = express.Router()

router.get('/Clientes', getAllClientes)
router.get('/Clientes/:id', getCliente)
router.post('/Clientes/create', createCliente)
router.put('/Clientes/update/:id', updateCliente)
router.delete('/Clientes/delete/:id', deleteCliente)

export default router
