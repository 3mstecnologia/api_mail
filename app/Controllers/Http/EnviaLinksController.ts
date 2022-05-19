import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Enviasenha from 'App/Mailers/Enviasenha'

export default class EnviaLinksController {
    public async  enviaemail({ request, response }: HttpContextContract) {
        const { html, destino, assunto } = request.all()
        
        const envia = new Enviasenha()
        await envia.send()
        console.log (envia)
        return response.json({
            message: 'Email enviado com sucesso!'
        })
        


        return response.json({ message: 'Link enviado com sucesso!' })
    }
}
