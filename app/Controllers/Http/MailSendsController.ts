import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mail from '@ioc:Adonis/Addons/Mail'
export default class MailSendsController {
  public async envia({request, response}: HttpContextContract) {
      const { conteudo, destino, assunto } = request.all()
      console.log(conteudo, destino, assunto)
    await Mail.send((message) => {
      message
        .from('nao_resonda@uniplaclages.edu.br', 'Notificações Uniplac')
        .to(destino)
        .subject(assunto)
        .html(conteudo)
        
        
        
    })
  }
}