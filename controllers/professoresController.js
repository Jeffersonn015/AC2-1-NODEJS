// variavel com os JSON dos professores (DADOS)
const professores = [
  {
    id: "1",
    nome: "Prof. Carlos",
    idade: 40,
    departamento: "Matemática",
    turmas: [
      { codigo: "9A", disciplina: "MAT101", alunos: ["João", "Maria", "Pedro"] },
      { codigo: "10A", disciplina: "MAT201", alunos: ["Ana", "Luiz"] }
    ]
  },
  {
    id: "2",
    nome: "Prof. Ana",
    idade: 35,
    departamento: "História",
    turmas: [
      { codigo: "9A", disciplina: "HIS101", alunos: ["João", "Pedro"] },
      { codigo: "10B", disciplina: "HIS201", alunos: ["Maria", "Carlos", "Luiza"] }
    ]
  },
  {
    id: "3",  
    nome: "Prof. João",
    idade: 50,
    departamento: "Ciências",
    turmas: [
      { codigo: "9A", disciplina: "CIE101", alunos: ["João", "Maria"] },
      { codigo: "9B", disciplina: "CIE101", alunos: ["Pedro", "Luiz"] }
    ]
  },
];

// Lista todos os professores
exports.getAllProfessores = (req, res) => {
  res.json(professores);
};

// Busca por ID do professor
exports.getProfessorById = (req, res) => {
  const id = req.params.id;
  const professor = professores.find(p => p.id === id);
  if (!professor) {
    return res.status(404).json({ mensagem: "Professor não encontrado!" });
  }
  res.json(professor);
};

// Lista turmas de um professor
exports.getTurmasByProfessorId = (req, res) => {
  const id = req.params.id;
  const professor = professores.find(p => p.id === id);
  if (!professor) {
    return res.status(404).json({ mensagem: "Id não existente" });
  }
  res.json(professor.turmas);
};

// Atualizar dadados de um professor
exports.updateProfessorById = (req, res) => {
  const id = req.params.id;
  const {nome, idade, departamento} = req.body;
  const professor = professores.find(p => p.id === id);

  if (!professor) {
    return res.status(404).json({ mensagem: "Id não existente" });
  }

  if (nome) professor.nome = nome;
  if (idade) professor.idade = idade;
  if (departamento) professor.departamento = departamento;

  res.json({ mensagem: "Dados do Professor atualizado com sucesso!", professor });

};

// Adicionar turmas de um professor
exports.addTurmaToProfessor = (req, res) => {
  const id = req.params.id;
  const { codigo, disciplina, alunos } = req.body;
  const professor = professores.find(p => p.id === id);

  if (!professor) {
    return res.status(404).json({ mensagem: "Id não existente" });
  }
  const novaTurma = { codigo, disciplina, alunos };
  professor.turmas.push(novaTurma);

  res.json({ mensagem: "Turma adicionada com sucesso para o professor!", turma: novaTurma });
};


// Listar Professores por departamento
exports.getProfessoresByDepartamento = (req, res) => {
  const departamento = req.params.departamento.toLowerCase();

  const professoresPorDepartamento = professores.filter(
    p => p.departamento.toLowerCase() === departamento
  );

  if (professoresPorDepartamento.length === 0) {
    return res.status(404).json({ mensagem: "Nenhum professor encontrado nesse departamento" });
  }

  res.json(professoresPorDepartamento);
};

// Remover um professor por ID
exports.deleteProfessor = (req, res) => {
  const id = req.params.id;
  const index = professores.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ mensagem: "Id não existente" });
  }

  professores.splice(index, 1);

  res.json({ mensagem: "Professor removido com sucesso!" });
};
