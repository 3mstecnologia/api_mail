import mjml2html from 'mjml'
import { BaseMailer, MessageContract } from '@ioc:Adonis/Addons/Mail'

export default class Enviasenha extends BaseMailer {
  public html = mjml2html(
    `
  <mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-image
          width="100px"
          src="https://emaj.uniplaclages.edu.br/images/logo_emaj_preto.png"
        ></mj-image>
        <mj-divider border-color="#000"></mj-divider>
        <mj-text font-size="20px" color="#000" font-family="helvetica" align="center"
          >Seja Bem Vindo ao UNIEMAJ</mj-text
        >
        <mj-divider border-color="#000"></mj-divider>

        @if(fullName)

        <mj-text font-size="20px" color="#000" font-family="helvetica" align="center">
          click no link abaixo para cadastar sua senha - {{fullName }}
        </mj-text>

        @else

        <mj-text font-size="20px" color="#000" font-family="helvetica" align="center">
          nao entrou no if
        </mj-text>

        @endif
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
  `,
    {
      fonts: { fullName: 'Matheus Schmitt' },
    }
  ).html

  public async prepare(message: MessageContract) {
    message
      .subject('The email subject')
      .from('nao_responda@uniplaclages.edu.br', 'UniPlac')
      .to('3ms@uniplaclages.edu.br')
      .html(this.html)
  }
}
