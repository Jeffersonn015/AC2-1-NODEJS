#  Atividade AC2 - API de Professores

Este projeto foi desenvolvido como parte da **Atividade AC2** da disciplina de Desenvolvimento Web Front-End.

# Requisitos: 
 - Criar uma rota e controller específica para professores como a url: “professores”;
 -  **Listar todos os professores**
    - Método: GET 
    - Endpoint: /professores 
    - Descrição: Retorna todos os professores com suas respectivas informações.
    ![Imagem do WhatsApp de 2025-11-10 à(s) 20 16 06_b34827ff](https://github.com/user-attachments/assets/b3f1262a-3e16-4eaa-a29a-51d64d28bbc2)


 -  **Buscar um professor por ID**
    - Método: GET 
    - Endpoint: : /professores/:id
    - Descrição:  Retorna as informações de um professor específico, incluindo suas turmas e disciplinas ministradas.
      ![Imagem do WhatsApp de 2025-11-10 à(s) 20 16 40_f2c3ff49](https://github.com/user-attachments/assets/ea7d4614-bdb7-4135-a973-a668fedb7dcf)


 -  **Listar todas as turmas de um professor**
    - Método: GET 
    - Endpoint: :  /professores/:id/turmas 
    - Descrição:   Retorna todas as turmas ministradas por um professor específico, com a lista de alunos e disciplina associada.
    ![Imagem do WhatsApp de 2025-11-10 à(s) 20 17 39_c7e5bbc0](https://github.com/user-attachments/assets/221e5aa1-f7f9-4e9d-a441-1668d6d05635)



 -  **Atualizar dados de um professor**
    - Método: PUT 
    - Endpoint: : /professores/:id
    - Descrição:  Permite atualizar as informações de um professor específico, como nome, idade e departamento. Se for informado um id inválido retornar “Id não existente”
      ![Imagem do WhatsApp de 2025-11-10 à(s) 20 19 32_3842f8d7](https://github.com/user-attachments/assets/f6538958-5aa0-4a4d-86c9-e19c56baad19)


 -  **Adicionar uma turma para um professor**
    - Método: POST 
    - Endpoint: : /professores/:id/turmas 
    - Descrição:  Permite adicionar uma nova turma para o professor, especificando o código da turma, disciplina e lista de alunos.
      ![Imagem do WhatsApp de 2025-11-10 à(s) 20 27 37_f24502c8](https://github.com/user-attachments/assets/c6613ef0-6935-4b5e-b0d6-a1d1243c6cb5)


 -  **Listar professores por departamento**
    - Método: GET 
    - Endpoint: /professores/departamento/:departamento 
    - Descrição:  Retorna todos os professores de um departamento específico.
      ![Imagem do WhatsApp de 2025-11-10 à(s) 20 49 29_f150d4b9](https://github.com/user-attachments/assets/c793c319-a0f0-4c59-a721-1eb2d2412ee0)


 -  **Remover um professor**
    - Método: DELETE 
    - Endpoint: :  /professores/:id 
    - Descrição:   Remove um professor, dado o seu código. Se for informado um id inválido retornar “Id não existente”
      ![Imagem do WhatsApp de 2025-11-10 à(s) 20 56 53_8f09a5ba](https://github.com/user-attachments/assets/c0627a99-98b8-4f1d-a67e-ed38be4e0760)
      ![Imagem do WhatsApp de 2025-11-10 à(s) 20 57 14_2290e9ea](https://github.com/user-attachments/assets/e9f400f3-137c-464d-af4e-b9052dde7289)






      

       
