//Importação de bibliotecas/frameworks

class UsersController {
    //Essa api retorna uma mensagem através de uma propriedade de um objeto com um status de sucesso.
  async message(req, res) {
    return res.status(200).json({ message: "Hello, Cognum!" });
  }
  async Employee(req,res){
    





  }
}
export default new UsersController();
