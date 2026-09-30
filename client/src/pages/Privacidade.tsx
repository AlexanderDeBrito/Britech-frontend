import type { ReactNode } from 'react';
import { CONTACT } from '@/lib/contact';

const UPDATED_AT = '30 de setembro de 2026';

function Block({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className="space-y-4">
      <h2 id={id} className="text-2xl md:text-3xl font-semibold text-white">
        {title}
      </h2>
      <div className="space-y-4 text-white/80 leading-relaxed">{children}</div>
    </section>
  );
}

const Email = () => (
  <a href={`mailto:${CONTACT.email}`} className="text-[color:var(--brand-cyan)]">
    {CONTACT.email}
  </a>
);

export default function Privacidade() {
  return (
    <div className="flex flex-col">
      <section className="pt-20 pb-10 md:pt-28">
        <div className="container max-w-3xl">
          <span className="inline-block text-xs font-bold text-[color:var(--brand-cyan)] uppercase tracking-[0.2em] mb-4">
            LGPD · Lei nº 13.709/2018
          </span>
          <h1 className="mb-6 text-white text-4xl md:text-5xl lg:text-6xl">Política de Privacidade</h1>
          <p className="text-lg text-white/80 leading-relaxed">
            Esta política explica, em linguagem direta, quais dados pessoais a Britech Soluções
            recebe por este site e pelos seus canais de contato, para que os usa e quais são os seus
            direitos como titular.
          </p>
          <p className="mt-4 text-sm text-white/70">Última atualização: {UPDATED_AT}.</p>
        </div>
      </section>

      <div className="container max-w-3xl pb-16 space-y-12">
        <Block id="controlador" title="1. Quem é o controlador">
          <p>
            O controlador dos dados é a <strong className="text-white">Britech Soluções</strong>,
            consultoria de arquitetura e desenvolvimento de software com sede em Blumenau, Santa
            Catarina, Brasil. Para qualquer assunto sobre privacidade e proteção de dados, inclusive
            para falar com o encarregado, escreva para <Email />.
          </p>
        </Block>

        <Block id="dados" title="2. Quais dados coletamos">
          <p>
            <strong className="text-white">Formulário de contato.</strong> Quando você preenche o
            formulário, informa nome, e-mail, telefone (opcional), empresa (opcional) e a sua
            mensagem. O site não grava esses dados: ao enviar, eles são usados para montar uma
            mensagem que abre no WhatsApp, e só chegam até nós quando você envia essa mensagem.
          </p>
          <p>
            <strong className="text-white">Contato direto.</strong> Se você nos escreve por e-mail
            ou WhatsApp, recebemos os dados que decidir compartilhar na conversa, além do seu
            endereço de e-mail ou número de telefone.
          </p>
          <p>
            <strong className="text-white">Navegação.</strong> Usamos o Cloudflare Web Analytics
            para medir visitas de forma agregada (páginas vistas, país, tipo de dispositivo). Ele não
            usa cookies nem identifica você individualmente. Como qualquer servidor web, a
            infraestrutura de hospedagem também registra dados técnicos, como endereço IP e
            navegador, para segurança e funcionamento do site.
          </p>
          <p>Não coletamos dados sensíveis nem dados de crianças e adolescentes por este site.</p>
        </Block>

        <Block id="finalidade" title="3. Para que usamos os dados">
          <ul className="list-disc pl-6 space-y-2">
            <li>responder ao seu contato e agendar o diagnóstico ou outras conversas que você pediu;</li>
            <li>preparar e negociar propostas comerciais, quando for o caso;</li>
            <li>manter o histórico da relação comercial e cumprir obrigações legais;</li>
            <li>entender, de forma agregada, como o site é usado, para melhorá-lo;</li>
            <li>proteger o site contra abuso e ataques.</li>
          </ul>
          <p>Não vendemos dados pessoais e não os usamos para publicidade de terceiros.</p>
        </Block>

        <Block id="base-legal" title="4. Base legal">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-white">Procedimentos preliminares a um contrato</strong>, a
              pedido do titular (art. 7º, V, da LGPD): responder ao contato, agendar conversas e
              preparar propostas.
            </li>
            <li>
              <strong className="text-white">Legítimo interesse</strong> (art. 7º, IX): métricas
              agregadas de audiência e segurança do site, sempre respeitando as suas expectativas e
              direitos.
            </li>
            <li>
              <strong className="text-white">Cumprimento de obrigação legal</strong> (art. 7º, II)
              e <strong className="text-white">execução de contrato</strong> (art. 7º, V), quando
              você se torna cliente.
            </li>
          </ul>
        </Block>

        <Block id="compartilhamento" title="5. Com quem compartilhamos">
          <p>
            Os dados podem ser tratados pelos fornecedores que usamos para operar o site e a
            comunicação — hospedagem e métricas (Cloudflare), mensagens (WhatsApp, da Meta) e e-mail
            — sempre na medida necessária para prestar esses serviços. Alguns desses fornecedores
            podem armazenar dados fora do Brasil; nesses casos, a transferência segue o que a LGPD
            permite (arts. 33 a 36). Também podemos compartilhar dados quando exigido por lei ou por
            ordem de autoridade competente.
          </p>
        </Block>

        <Block id="retencao" title="6. Por quanto tempo guardamos">
          <p>
            Dados de contato de quem não se torna cliente são mantidos enquanto a conversa estiver
            ativa e por até 2 (dois) anos após o último contato, e depois excluídos. Dados de
            clientes são mantidos durante o contrato e pelo prazo exigido pela legislação (por
            exemplo, fiscal e contábil). Você pode pedir a exclusão antes disso, respeitadas as
            obrigações legais.
          </p>
        </Block>

        <Block id="direitos" title="7. Seus direitos">
          <p>Nos termos do art. 18 da LGPD, você pode, a qualquer momento:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>confirmar se tratamos seus dados e acessá-los;</li>
            <li>corrigir dados incompletos, inexatos ou desatualizados;</li>
            <li>pedir anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
            <li>pedir a portabilidade dos dados;</li>
            <li>saber com quem compartilhamos os seus dados;</li>
            <li>se opor a um tratamento baseado em legítimo interesse;</li>
            <li>revogar o consentimento, quando ele for a base do tratamento.</li>
          </ul>
          <p>
            Para exercer qualquer direito, escreva para <Email />. Respondemos em até 15 dias. Se
            não ficar satisfeito, você também pode procurar a Autoridade Nacional de Proteção de
            Dados (ANPD).
          </p>
        </Block>

        <Block id="seguranca" title="8. Segurança">
          <p>
            Adotamos medidas técnicas e administrativas razoáveis para proteger os dados: acesso
            restrito a quem precisa, contas com autenticação forte e conexões criptografadas (HTTPS).
            Nenhum sistema é totalmente imune a incidentes; se algum ocorrer e puder causar risco ou
            dano relevante, comunicaremos os titulares afetados e a ANPD, como prevê a lei.
          </p>
        </Block>

        <Block id="alteracoes" title="9. Alterações">
          <p>
            Esta política pode ser atualizada para refletir mudanças no site ou na legislação. A data
            da última atualização fica sempre no topo desta página.
          </p>
        </Block>
      </div>
    </div>
  );
}
