import { BaseMailer, MessageContract } from '@ioc:Adonis/Addons/Mail'


export default class Enviasenha extends BaseMailer {
    
  public html = 
    `
    <h1>Olá, seja bem vindo ao EMAJ! teste de segurança</h1>
    <p>Click no link para criar sua senha : <a href="https://uniplac.net">CRIAR SENHA</a></p>
  `
 

  public async prepare(message: MessageContract) {
    message
      .subject('EMAJ - Criar senha')
      .from('nao_responda@uniplaclages.edu.br', 'UniPlac')
      .to('matheus@uniplac.net', 'Matheus')
      .html(this.html)
  }
}
