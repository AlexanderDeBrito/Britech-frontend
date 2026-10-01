import { Link } from 'wouter';
import {
  ArrowRight,
  Building2,
  CreditCard,
  CalendarX2,
  Rocket,
  ShieldCheck,
  FlaskConical,
  FileSpreadsheet,
  MessageCircle,
} from 'lucide-react';
import { HeroSection } from '@/components/HeroSection';
import { FaqSection } from '@/components/FaqSection';
import { SectionHeader } from '@/components/Section';
import { WhatsAppIcon } from '@/components/WhatsAppButton';
import { ROUTES, WHATSAPP_MESSAGES, whatsappUrl } from '@/lib/contact';
import { LANCAMENTOS, LANCAMENTOS_FAQ, RAZAO_SHOTS, RAZAO_VIDEO } from '@/lib/products';
import { ProductShot } from '@/components/ProductShot';
import { VideoPlayer } from '@/components/DagVideo';

/*
 * Regras desta página (PRD, seção 3): sem percentual de acerto, sem "100%
 * automático", "sem revisão" ou "substitui o analista", sem "integra com todos
 * os sistemas", sem data de lançamento, sem preço e sem nome de concorrente.
 */

export default function ProdutoLancamentos() {
  const flow = [
    {
      shot: RAZAO_SHOTS.envio,
      title: 'Enviar extratos',
      text: 'Escolha o cliente e o mês e arraste os arquivos, vários de uma vez: PDF do banco, foto do extrato ou OFX. Cada um é lido e classificado no plano de contas daquele cliente, aprendendo com o histórico dele.',
    },
    {
      shot: RAZAO_SHOTS.revisao,
      title: 'Revisão com confiança',
      text: 'Cada movimento chega com a conta sugerida e o nível de confiança. O de confiança alta você aceita em lote; o de média ou baixa você aceita, altera ou ignora, vendo por que aquela conta foi sugerida.',
    },
    {
      shot: RAZAO_SHOTS.regras,
      title: 'Regras do analista',
      text: 'Quando você já sabe para onde vai um lançamento, cria uma regra: "quando a descrição contém…, lançar em…". A regra vence a sugestão automática e vale para os próximos extratos.',
    },
    {
      shot: RAZAO_SHOTS.exportacoes,
      title: 'Exportar',
      text: 'Com a revisão feita, gere o arquivo para importar no sistema contábil do escritório. Os formatos de cada sistema estão em validação: diga qual você usa para priorizarmos.',
    },
  ];

  const model = [
    { icon: CreditCard, title: 'Contratação pelo site', text: 'Assinatura mensal, contratada direto no site.' },
    { icon: CalendarX2, title: 'Sem fidelidade', text: 'Cancele quando quiser.' },
    { icon: Rocket, title: 'Sem implantação', text: 'Sem projeto nem treinamento longo para começar a usar.' },
  ];

  const status = [
    { icon: FlaskConical, title: 'Em validação', text: 'Piloto com os primeiros escritórios, medindo o resultado com extratos reais.' },
    {
      icon: FileSpreadsheet,
      title: 'Formatos de exportação',
      text: 'Estamos levantando os formatos dos sistemas contábeis. Diga qual você usa para priorizarmos.',
    },
    {
      icon: MessageCircle,
      title: 'Em estudo',
      text: 'Cobrança de documentos dos clientes do escritório pelo WhatsApp.',
    },
  ];

  const secondaryBtn =
    'inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 transition-all no-underline';

  return (
    <div className="flex flex-col">
      <HeroSection
        wide
        title="Pare de digitar extrato."
        highlightWord="digitar extrato."
        subtitle={LANCAMENTOS.status}
        description="O Razão (nome provisório) é o assistente de lançamentos de extrato da Britech, para escritórios contábeis de pequeno e médio porte. Você sobe o extrato bancário do cliente e recebe os lançamentos classificados no plano de contas dele, com a confiança de cada um, prontos para revisar e importar."
      >
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
          <a
            href={whatsappUrl(WHATSAPP_MESSAGES.lancamentosTeste)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brand inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base no-underline"
          >
            <WhatsAppIcon size={18} />
            Quero testar com 1 extrato
          </a>
          <Link href={`${ROUTES.contato}?assunto=pre-venda-lancamentos`} className={secondaryBtn}>
            Entrar na pré-venda
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <ul className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/75">
          {['PDF, foto ou OFX', 'Plano de contas de cada cliente', 'Confiança em cada lançamento'].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[color:var(--brand-cyan)] shadow-[0_0_12px_#00D4FF] flex-shrink-0" />
              {t}
            </li>
          ))}
        </ul>
        {/* Vídeo principal (RAZAO_VIDEO em lib/products.ts); sem vídeo, mostra a tela de revisão. */}
        {RAZAO_VIDEO ? (
          <VideoPlayer video={RAZAO_VIDEO} className="mt-14" />
        ) : (
          <ProductShot shot={RAZAO_SHOTS.revisao} eager className="mt-14" />
        )}
      </HeroSection>

      {/* O problema */}
      <section aria-labelledby="dor-titulo" className="py-20 md:py-24 border-y border-white/5 bg-[#070D18]/40">
        <div className="container">
          <div className="max-w-4xl">
            <h2 id="dor-titulo" className="text-2xl md:text-3xl font-semibold text-white leading-snug mb-6">
              Classificar e lançar extrato é tarefa de todo dia:{' '}
              <span className="text-gradient-brand">repetitiva, demorada e sempre igual.</span>
            </h2>
            <p className="text-lg text-white/75 leading-relaxed">
              Em vez de digitar movimento por movimento, o analista começa pelos lançamentos já
              classificados e gasta o tempo onde ele faz diferença: nos casos duvidosos.
            </p>
          </div>
        </div>
      </section>

      {/* Como funciona: o fluxo no protótipo */}
      <section aria-labelledby="como-titulo" className="py-24 md:py-32">
        <div className="container">
          <SectionHeader
            id="como-titulo"
            eyebrow="Como funciona"
            title="Do extrato ao arquivo de importação, em quatro telas"
            lead="Telas do protótipo de design do Razão, com dados fictícios. O produto está em validação com os primeiros escritórios."
          />
          <ol className="flex flex-col gap-20 md:gap-28">
            {flow.map(({ shot, title, text }, i) => (
              <li
                key={title}
                className={`grid grid-cols-1 gap-8 lg:gap-12 items-center ${
                  i % 2 === 1 ? 'lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]' : 'lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]'
                }`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className="inline-flex items-center justify-center w-12 h-12 mb-5 rounded-xl bg-[#0B1220] border border-[color:var(--brand-blue)]/40 text-[color:var(--brand-cyan)] font-bold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mb-4 text-2xl md:text-3xl font-semibold text-white">{title}</h3>
                  <p className="text-lg text-white/80 leading-relaxed">{text}</p>
                </div>
                <ProductShot
                  shot={shot}
                  sizes="(min-width: 1280px) 700px, (min-width: 1024px) 58vw, 100vw"
                  className={i % 2 === 1 ? 'lg:order-1' : ''}
                />
              </li>
            ))}
          </ol>

        </div>
      </section>

      {/* Diferencial */}
      <section aria-labelledby="dif-titulo" className="py-20 md:py-24 bg-[#070D18]/60 border-y border-white/5">
        <div className="container">
          <div className="max-w-4xl">
            <span className="inline-block text-xs font-bold text-[color:var(--brand-cyan)] uppercase tracking-[0.2em] mb-4">
              A diferença
            </span>
            <h2 id="dif-titulo" className="text-2xl md:text-4xl font-bold text-white leading-snug">
              Conversor transforma PDF em OFX.{' '}
              <span className="text-gradient-brand">
                Nós classificamos no plano de contas do cliente e mostramos a confiança.
              </span>
            </h2>
          </div>
        </div>
      </section>

      {/* Para quem */}
      <section aria-labelledby="quem-titulo" className="py-24 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-8 md:p-10 rounded-3xl glass-card">
              <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[color:var(--brand-blue)]/15">
                <Building2 size={22} aria-hidden="true" className="text-[color:var(--brand-cyan)]" />
              </div>
              <h2 id="quem-titulo" className="text-2xl md:text-3xl font-bold text-white mb-4">
                Para quem é
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Escritórios contábeis de pequeno e médio porte, com até 30 pessoas, e os analistas que
                fazem o fechamento mensal dos clientes.
              </p>
              <p className="text-white/80 leading-relaxed">
                Feito para funcionar sem departamento de TI e sem projeto de implantação, do escritório
                com poucos analistas ao que já tem uma equipe inteira de fechamento.
              </p>
            </div>
            <div className="p-8 md:p-10 rounded-3xl glass-card">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Como vai ser contratar</h2>
              <p className="text-sm text-white/70 mb-6">É assim que o produto está sendo desenhado.</p>
              <ul className="space-y-5">
                {model.map(({ icon: Icon, title, text }) => (
                  <li key={title} className="flex gap-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[color:var(--brand-blue)]/15 flex-shrink-0">
                      <Icon size={18} aria-hidden="true" className="text-[color:var(--brand-cyan)]" />
                    </span>
                    <div>
                      <p className="font-semibold text-white">{title}</p>
                      <p className="text-sm text-white/75">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Onde estamos */}
      <section aria-labelledby="status-titulo" className="py-24 md:py-28 bg-[#070D18]/60 border-y border-white/5">
        <div className="container">
          <SectionHeader
            id="status-titulo"
            eyebrow="Onde estamos"
            title="Em piloto, com os primeiros escritórios"
            lead="Preferimos dizer o que já existe e o que ainda está sendo construído."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {status.map(({ icon: Icon, title, text }) => (
              <div key={title} className="p-7 rounded-2xl glass-card">
                <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[color:var(--brand-blue)]/15">
                  <Icon size={22} aria-hidden="true" className="text-[color:var(--brand-cyan)]" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
                <p className="text-white/75 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 flex gap-3 max-w-3xl text-white/80 leading-relaxed">
            <ShieldCheck size={20} aria-hidden="true" className="text-[color:var(--brand-cyan)] flex-shrink-0 mt-0.5" />
            <span>
              Tratamento de dados conforme a LGPD. Para testar, cubra nomes, CPF/CNPJ e outros dados
              sensíveis do extrato antes de enviar.
            </span>
          </p>
        </div>
      </section>

      <FaqSection
        items={LANCAMENTOS_FAQ}
        title="Perguntas de quem tem escritório"
        lead="Respostas diretas, de quem ainda está em piloto."
      />

      {/* CTA final */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A84FF]/15 via-transparent to-[#00D4FF]/10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] max-w-full h-[400px] rounded-full bg-[#0A84FF]/20 blur-[120px]" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center p-8 md:p-16 rounded-3xl glass-card brand-glow">
            <h2 className="mb-6 text-white">
              Teste com <span className="text-gradient-brand">1 extrato</span>
            </h2>
            <p className="text-lg text-white/75 mb-10 max-w-2xl mx-auto">
              Mande um extrato de um cliente, com os dados sensíveis cobertos, e veja os lançamentos
              classificados no plano de contas dele. Preço de lançamento em definição, com pré-venda
              para os primeiros escritórios.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center">
              <a
                href={whatsappUrl(WHATSAPP_MESSAGES.lancamentosTeste)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brand inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold no-underline"
              >
                <WhatsAppIcon size={18} />
                Quero testar com 1 extrato
              </a>
              <a
                href={whatsappUrl(WHATSAPP_MESSAGES.lancamentosPreVenda)}
                target="_blank"
                rel="noopener noreferrer"
                className={secondaryBtn}
              >
                <WhatsAppIcon size={18} />
                Entrar na pré-venda
              </a>
            </div>
            <p className="mt-6 text-sm text-white/75">
              Prefere formulário?{' '}
              <Link
                href={`${ROUTES.contato}?assunto=pre-venda-lancamentos`}
                className="text-[color:var(--brand-cyan)] underline"
              >
                Fale conosco pelo site
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
