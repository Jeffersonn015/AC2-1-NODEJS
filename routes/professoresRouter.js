const express = require('express');
const router = express.Router();
const professoresController = require('../controllers/professoresController');

// GET /professores 
router.get('/', professoresController.getAllProfessores);

// Get / /professores/departamento/:departamento 
router.get('/departamento/:departamento', professoresController.getProfessoresByDepartamento);

// GET /professores/:id
router.get('/:id', professoresController.getProfessorById);

// GET  /professores/:id/turmas 
router.get('/:id/turmas', professoresController.getTurmasByProfessorId);

// PUT /professores/:id 
router.put('/:id', professoresController.updateProfessorById);

// POST /professores/:id/turmas 
router.post('/:id/turmas', professoresController.addTurmaToProfessor);

// DELETE /professores/:id
router.delete('/:id', professoresController.deleteProfessor);

module.exports = router;
