import { Prisma } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class UsersController {
  
  // Retorna uma mensagem de sucesso
  async message(req, res) {
    return res.status(200).json({ message: "Hello, Cognum!" });
  }
  
  // Cria um novo funcionário no banco de dados
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
  
  // Realiza o login do usuário
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
  
  // Remove um usuário do banco de dados
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
  
  // Altera o nome de um usuário
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
      return res.status(200).json({ message: "Nome do usuário atualizado com sucesso!" });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: `Erro ao mudar o nome de usuário: ${error.message}` });
    }
  }
}

export default new UsersController();
