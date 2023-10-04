import { Prisma } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class UsersController {
  // Esta função é uma rota que retorna uma mensagem de boas-vindas.
  //Ela responde com um código de status HTTP 200 (OK) e um objeto JSON contendo a mensagem "Hello, Cognum!".
  async message(req, res) {
    return res.status(200).json({ message: "Hello, Cognum!" });
  }

  // Esta função cria um novo funcionário no banco de dados. Ela espera receber o nome e o cargo do funcionário no corpo da requisição (req.body).
  //Antes de criar o funcionário, ela verifica se um funcionário com o mesmo nome já existe no banco de dados.
  async createEmployee(req, res) {
    try {
      const { emp_name, emp_role } = req.body;
      const result = await prisma.user.findFirst({
        where: { name: emp_name },
      });
      if (result) {
        return res.status(400).json({ message: "Esse funcionário já existe!" });
      }
      await prisma.user.create({
        data: {
          name: emp_name,
          role: emp_role,
        },
      });
      return res.status(201).json({
        message: "Funcionário(a) inserido no banco de dados com sucesso!",
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: `Erro ao criar o usuário: ${error.message}` });
    }
  }

  //Esta função é responsável pelo processo de login de um usuário. Ela espera receber o nome e o cargo do usuário no corpo da requisição (req.body). 
  //Em seguida, verifica se existe um usuário com essas credenciais no banco de dados. 
  async Login(req, res) {
    try {
      const { emp_name, emp_role } = req.body;
      const result = await prisma.user.findFirst({
        where: { name: emp_name, role: emp_role },
      });
      if (result) {
        return res.status(200).json({ message: "Bem vindo!" });
      }
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: `Erro ao fazer login: ${error.message}` });
    }
  }

  //Esta função remove um usuário do banco de dados. Ela espera receber o ID do usuário no corpo da requisição (req.body). 
  //Primeiro, ela tenta deletar o usuário com o ID fornecido. Se a operação for bem-sucedida, retorna um código de status HTTP 200 (OK) com a mensagem "Usuário deletado com sucesso!". 
  async removeUser(req, res) {
    try {
      const { id } = req.body;
      const result = await prisma.user.delete({
        where: { use_uuid: id },
      });
      if (!result) {
        return res.status(400).json({ message: "Usuário não encontrado!" });
      }
      return res.status(200).json({ message: "Usuário deletado com sucesso!" });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: `Erro ao remover usuário: ${error.message}` });
    }
  }

  //Esta função altera o nome de um usuário. Ela espera receber o ID do usuário e o novo nome no corpo da requisição (req.body). 
  //Primeiro, verifica se o usuário com o ID fornecido existe no banco de dados. Se não encontrar, retorna um código de status HTTP 400 (Bad Request) com a mensagem "Usuário não encontrado!". 
  async changeuserName(req, res) {
    try {
      const { id, use_name } = req.body;
      const result = await prisma.user.findFirst({
        where: { use_uuid: id },
      });
      if (!result) {
        return res.status(400).json({ message: "Usuário não encontrado!" });
      } else {
        await prisma.user.update({
          where: { use_uuid: id },
          data: {
            name: use_name,
          },
        });
      }
      return res
        .status(200)
        .json({ message: "Nome do usuário atualizado com sucesso!" });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: `Erro ao mudar o nome de usuário: ${error.message}` });
    }
  }
}

export default new UsersController();
