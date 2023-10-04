//Importação de bibliotecas/frameworks

class UsersController {
  async message(req, res) {
    return res.status(200).json({ message: "Hello, Cognum!" });
  }
}
export default new UsersController();
