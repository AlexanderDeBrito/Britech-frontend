import {
  ArrowRight,
  Layers,
  Plug,
  Bot,
  Package,
  Search,
  ClipboardList,
  FlaskConical,
  TrendingUp,
  Landmark,
  CreditCard,
  HeartPulse,
  LineChart,
  Check,
  FileUp,
  Sparkles,
} from 'lucide-react';
import { Link } from 'wouter';
import { HeroSection } from '@/components/HeroSection';
import { FaqSection } from '@/components/FaqSection';
import { DagFlow } from '@/components/DagFlow';
import { DagVideoPlayer } from '@/components/DagVideo';
import { CtaSection, Eyebrow, SectionHeader } from '@/components/Section';
import { WhatsAppIcon } from '@/components/WhatsAppButton';
import { ROUTES, WHATSAPP_MESSAGES, whatsappUrl } from '@/lib/contact';
import { LANCAMENTOS, RAZAO_SHOTS } from '@/lib/products';
import { ProductShot } from '@/components/ProductShot';

const linkArrow =
  'inline-flex items-center gap-2 text-[color:var(--brand-cyan)] font-semibold hover:gap-3 transition-all no-underline';

export default function Home() {
  const paths = [
    {
      icon: Layers,
      eyebrow: 'Consultoria',
      title: 'Para empresas que constroem SaaS e B2B',
      description:
        'Arquitetura e desenvolvimento acelerado por IA, com o DAG como método: os agentes executam, o seu time decide nos gates.',
      cta: { text: 'Agendar diagnóstico gratuito', href: ROUTES.diagnostico },
      more: { text: 'Ver a consultoria', href: ROUTES.servicos },
    },
    {
      icon: Package,
      eyebrow: 'Produtos',
      title: 'Software nosso, pronto para usar',
      description:
        'Produtos que a Britech desenvolve e leva ao mercado. O primeiro é o Razão, assistente de lançamentos de extrato para escritórios contábeis.',
      cta: { text: 'Conhecer os produtos', href: ROUTES.produtos },
      more: { text: 'Ver o Razão', href: ROUTES.produtoLancamentos },
    },
  ];

  const proof = [
    ['8+ anos', 'de engenharia de software'],
    ['Banco Central', 'sistemas regulados já construídos'],
    ['Pagamentos e saúde', 'plataformas de pagamento e SaaS de saúde'],
    ['CRM Renke', 'DAG em produção: 16h → 194h entregues por mês'],
  ];

  const consulting = [
    {
      icon: Bot,
      title: 'Implantação do DAG',
      description:
        'Desenvolvimento acelerado por IA com governança: agentes fazem a tarefa inteira e as pessoas decidem nos gates.',
    },
    {
      icon: Layers,
      title: 'Arquitetura de SaaS e B2B',
      description:
        'Modelo de dados, isolamento entre clientes, autenticação e permissões pensados para crescer sem reescrever.',
    },
    {
      icon: Plug,
      title: 'Integrações, pagamentos e nuvem',
      description:
        'WhatsApp (API oficial), meios de pagamento, sistemas regulados e uma conta de nuvem que acompanha a receita.',
    },
  ];

  const steps = [
    { icon: Search, title: 'Diagnóstico gratuito', meta: '30 min' },
    { icon: ClipboardList, title: 'Diagnóstico', meta: '1 semana' },
    { icon: FlaskConical, title: 'Implantação', meta: '2–3 semanas' },
    { icon: TrendingUp, title: 'Piloto medido', meta: '30 dias' },
  ];

  const credentials = [
    {
      icon: Landmark,
      title: 'Sistemas regulados pelo Banco Central',
      description: 'Ambientes em que uma decisão de arquitetura errada custa caro, e auditoria não é opcional.',
    },
    {
      icon: CreditCard,
      title: 'Pagamentos',
      description: 'Idempotência, conciliação e reprocessamento em integrações que não podem falhar.',
    },
    {
      icon: HeartPulse,
      title: 'SaaS de saúde',
      description: 'Evolução de produto com qualidade, em um domínio com dados sensíveis e regras próprias.',
    },
    {
      icon: LineChart,
      title: 'Case CRM Renke',
      description: 'DAG em produção num CRM SaaS B2B, com resultado medido no tracker do próprio cliente.',
      href: ROUTES.caseRenke,
    },
  ];

  return (
    <div className="flex flex-col">
      <HeroSection
        wide
        title="Construímos software — para a sua empresa e para o mercado."
        highlightWord="para a sua empresa e para o mercado."
        subtitle="Desenvolvimento de software · Blumenau (SC)"
        description="A Britech desenvolve software em duas frentes: consultoria para quem constrói SaaS e produtos B2B, e produtos próprios, que criamos e colocamos no mercado."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {paths.map(({ icon: Icon, eyebrow, title, description, cta, more }) => (
            <div key={eyebrow} className="p-7 md:p-8 rounded-3xl glass-card flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#0A84FF]/25 to-[#00D4FF]/10 border border-[color:var(--brand-blue)]/30">
                  <Icon size={20} aria-hidden="true" className="text-[color:var(--brand-cyan)]" />
                </span>
                <span className="text-xs font-bold text-[color:var(--brand-cyan)] uppercase tracking-[0.2em]">
                  {eyebrow}
                </span>
              </div>
              <h2 className="text-2xl md:text-[1.7rem] font-semibold text-white mb-3 leading-snug">{title}</h2>
              <p className="text-white/75 leading-relaxed mb-7">{description}</p>
              <div className="mt-auto flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4">
                <Link
                  href={cta.href}
                  className="btn-brand inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold no-underline"
                >
                  {cta.text}
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <Link href={more.href} className={`${linkArrow} text-sm justify-center sm:justify-start`}>
                  {more.text}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </HeroSection>

      {/* Faixa de prova */}
      <section aria-label="Experiência da Britech" className="relative py-14 border-y border-white/5 bg-[#070D18]/40">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {proof.map(([num, desc]) => (
              <div key={num} className="text-center sm:text-left">
                <div className="text-2xl md:text-3xl font-bold text-gradient-brand mb-2">{num}</div>
                <p className="text-sm text-white/75">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultoria */}
      <section id="consultoria" aria-labelledby="consultoria-titulo" className="py-24 md:py-32">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeader
              id="consultoria-titulo"
              eyebrow="Consultoria"
              title={
                <>
                  Mais entrega com IA, <span className="text-gradient-brand">sem perder a arquitetura</span>
                </>
              }
              lead="Para empresas que constroem SaaS e produtos B2B e têm time de desenvolvimento próprio. Quem faz o diagnóstico é quem desenha e acompanha a implantação."
            />
            <Link href={ROUTES.servicos} className={`${linkArrow} mb-14 flex-shrink-0`}>
              Ver a consultoria
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {consulting.map(({ icon: Icon, title, description }) => (
              <div key={title} className="p-8 rounded-2xl glass-card">
                <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[color:var(--brand-blue)]/15">
                  <Icon size={22} aria-hidden="true" className="text-[color:var(--brand-cyan)]" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
                <p className="text-white/75 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          {/* Como começamos */}
          <div className="mt-16">
            <h3 className="text-lg font-semibold text-white mb-2">Como começamos</h3>
            <p className="text-white/75 mb-6">Cada etapa termina com uma decisão sua sobre seguir ou não.</p>
            <ol className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map(({ icon: Icon, title, meta }, i) => (
                <li key={title} className="p-5 rounded-2xl glass-card flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <Icon size={20} aria-hidden="true" className="text-[color:var(--brand-cyan)]" />
                    <span className="text-xs font-bold text-white/70">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="font-semibold text-white leading-snug">{title}</p>
                  <p className="text-sm text-[color:var(--brand-cyan)] font-semibold">{meta}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* DAG, o método da consultoria */}
          <div className="mt-16 p-5 md:p-8 rounded-3xl border border-white/10 bg-[#070D18]/60">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
              <div className="max-w-2xl">
                <Eyebrow>O método: DAG</Eyebrow>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Não são os agentes, <span className="text-gradient-brand">são os gates.</span>
                </h3>
                <p className="text-white/75 leading-relaxed">
                  No DAG (Desenvolvimento Autônomo Governado), a tarefa atravessa o fluxo inteiro sem
                  ninguém conduzir cada passo, e as pessoas entram onde a decisão é delas. No CRM Renke,
                  a frente principal passou de 16h para 194h estimadas entregues por mês.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:flex-col lg:items-end flex-shrink-0">
                <Link href={ROUTES.dag} className={linkArrow}>
                  Conhecer o DAG
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <Link href={ROUTES.caseRenke} className={linkArrow}>
                  Ler o case CRM Renke
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>
            <DagFlow compact />
            <DagVideoPlayer className="mt-10 max-w-3xl mx-auto" />
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section
        id="produtos"
        aria-labelledby="produtos-titulo"
        className="py-24 md:py-32 bg-[#070D18]/60 border-y border-white/5"
      >
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeader
              id="produtos-titulo"
              eyebrow="Produtos"
              title={
                <>
                  Software que a Britech <span className="text-gradient-brand">constrói e leva ao mercado</span>
                </>
              }
              lead="A mesma engenharia da consultoria, aplicada a tarefas repetitivas de pequenas e médias empresas. Validamos com clientes reais antes de lançar."
            />
            <Link href={ROUTES.produtos} className={`${linkArrow} mb-14 flex-shrink-0`}>
              Conhecer os produtos
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-6">
            <article className="p-8 md:p-10 rounded-3xl glass-card brand-glow flex flex-col">
              <ProductShot shot={RAZAO_SHOTS.revisao} sizes="(min-width: 1024px) 640px, 100vw" className="mb-8" />
              <span className="self-start inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-[color:var(--brand-cyan)]/40 bg-[#00D4FF]/10 text-xs font-semibold text-[color:var(--brand-cyan)]">
                <span className="w-2 h-2 rounded-full bg-[color:var(--brand-cyan)]" aria-hidden="true" />
                {LANCAMENTOS.status}
              </span>
              <p className="text-sm text-white/70 mb-1">{LANCAMENTOS.audience}</p>
              <h3 className="text-3xl font-bold text-white mb-1">{LANCAMENTOS.name}</h3>
              <p className="text-sm text-white/75 mb-5">
                {LANCAMENTOS.descriptor} · <span className="text-white/70">nome provisório</span>
              </p>
              <p className="text-2xl font-semibold text-gradient-brand mb-4">{LANCAMENTOS.tagline}</p>
              <p className="text-white/80 leading-relaxed mb-6">{LANCAMENTOS.summary}</p>
              <ul className="space-y-2.5 mb-8">
                {[
                  'Extrato em PDF, foto ou OFX',
                  'Classificação no plano de contas de cada cliente',
                  'Você revisa só o que ficou com confiança média ou baixa',
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-white/80">
                    <Check size={18} aria-hidden="true" className="text-[color:var(--brand-cyan)] flex-shrink-0 mt-1" />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col sm:flex-row sm:flex-wrap gap-4">
                <Link
                  href={ROUTES.produtoLancamentos}
                  className="btn-brand inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold no-underline"
                >
                  Conhecer o produto
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <a
                  href={whatsappUrl(WHATSAPP_MESSAGES.lancamentosTeste)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 transition-all no-underline"
                >
                  <WhatsAppIcon size={18} />
                  Quero testar com 1 extrato
                </a>
              </div>
            </article>

            <div className="p-8 md:p-10 rounded-3xl glass-card">
              <h3 className="text-xl font-semibold text-white mb-6">Como fazemos produto</h3>
              <ul className="space-y-6">
                {[
                  {
                    icon: Search,
                    title: 'Validação antes do lançamento',
                    text: 'Piloto com os primeiros clientes, medindo o resultado com dados reais.',
                  },
                  {
                    icon: FileUp,
                    title: 'Contratação simples',
                    text: 'A proposta é assinar pelo site e começar a usar, sem projeto de implantação.',
                  },
                  {
                    icon: Sparkles,
                    title: 'IA com revisão humana',
                    text: 'A IA faz o trabalho repetitivo e mostra o quanto confia em cada resultado. A decisão final é sua.',
                  },
                ].map(({ icon: Icon, title, text }) => (
                  <li key={title} className="flex gap-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[color:var(--brand-blue)]/15 flex-shrink-0">
                      <Icon size={18} aria-hidden="true" className="text-[color:var(--brand-cyan)]" />
                    </span>
                    <div>
                      <p className="font-semibold text-white mb-1">{title}</p>
                      <p className="text-sm text-white/75 leading-relaxed">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experiência */}
      <section aria-labelledby="experiencia-titulo" className="py-24 md:py-32">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeader
              id="experiencia-titulo"
              eyebrow="Por que a Britech"
              title="Engenharia de quem já construiu sistema crítico"
              lead="Mais de 8 anos construindo software em ambientes onde erro custa caro. É essa experiência que vai para a consultoria e para os nossos produtos."
            />
            <Link href={ROUTES.sobre} className={`${linkArrow} mb-14 flex-shrink-0`}>
              Quem conduz
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map(({ icon: Icon, title, description, href }) => (
              <div key={title} className="p-7 rounded-2xl glass-card flex flex-col">
                <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[color:var(--brand-blue)]/15">
                  <Icon size={22} aria-hidden="true" className="text-[color:var(--brand-cyan)]" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white">{title}</h3>
                <p className="text-white/75 leading-relaxed text-sm">{description}</p>
                {href && (
                  <Link href={href} className={`${linkArrow} mt-4 text-sm`}>
                    Ler o case
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />

      <CtaSection
        title={
          <>
            Por onde você quer <span className="text-gradient-brand">começar?</span>
          </>
        }
        text="Se a sua empresa constrói software, comece pelo diagnóstico gratuito de 30 minutos. Se você tem um escritório de contabilidade, conheça o Razão, nosso assistente de lançamentos de extrato."
        secondary={{ text: 'Conhecer os produtos', href: ROUTES.produtos }}
        whatsappMessage={WHATSAPP_MESSAGES.geral}
      />
    </div>
  );
}
