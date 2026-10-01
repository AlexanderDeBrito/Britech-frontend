import { Link } from 'wouter';
import { ArrowRight, Search, FileUp, Sparkles } from 'lucide-react';
import { HeroSection } from '@/components/HeroSection';
import { CtaSection, SectionHeader } from '@/components/Section';
import { ROUTES, WHATSAPP_MESSAGES } from '@/lib/contact';
import { LANCAMENTOS, PRODUCTS, RAZAO_SHOTS, RAZAO_TEASER } from '@/lib/products';
import { ProductShot } from '@/components/ProductShot';
import { VideoPlayer } from '@/components/DagVideo';

export default function Produtos() {
  const principles = [
    {
      icon: Search,
      title: 'Validação antes do lançamento',
      text: 'Cada produto passa por um piloto com os primeiros clientes, medindo o resultado com dados reais antes de ir para o mercado.',
    },
    {
      icon: FileUp,
      title: 'Contratação simples',
      text: 'A proposta é assinar pelo site e começar a usar, sem projeto de implantação e sem fidelidade.',
    },
    {
      icon: Sparkles,
      title: 'IA com revisão humana',
      text: 'A IA faz o trabalho repetitivo e mostra o quanto confia em cada resultado. Quem decide é você.',
    },
  ];

  return (
    <div className="flex flex-col">
      <HeroSection
        title="Software que a Britech constrói e leva ao mercado"
        highlightWord="leva ao mercado"
        subtitle="Produtos Britech"
        description="Além da consultoria, a Britech desenvolve os próprios produtos: ferramentas focadas numa tarefa repetitiva, que a IA faz bem quando alguém de confiança revisa o resultado."
        ctaText="Conhecer o Razão"
        ctaHref={ROUTES.produtoLancamentos}
        secondary={{ text: 'Ver a consultoria', href: ROUTES.servicos }}
      />

      <section aria-labelledby="lista-titulo" className="py-20 md:py-28">
        <div className="container">
          <SectionHeader
            id="lista-titulo"
            eyebrow="Nossos produtos"
            title="Em validação agora"
            lead="Começamos por um produto e por um público. Os próximos vêm depois que este estiver provado com clientes reais."
          />
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <article className="h-full p-6 sm:p-8 md:p-10 rounded-3xl glass-card brand-glow flex flex-col">
                  {p.slug === LANCAMENTOS.slug &&
                    (RAZAO_TEASER ? (
                      <VideoPlayer video={RAZAO_TEASER} className="mb-8" />
                    ) : (
                      <ProductShot shot={RAZAO_SHOTS.revisao} sizes="(min-width: 1024px) 560px, 100vw" className="mb-8" />
                    ))}
                  <span className="self-start inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-[color:var(--brand-cyan)]/40 bg-[#00D4FF]/10 text-xs font-semibold text-[color:var(--brand-cyan)]">
                    <span className="w-2 h-2 rounded-full bg-[color:var(--brand-cyan)]" aria-hidden="true" />
                    {p.status}
                  </span>
                  <p className="text-sm text-white/70 mb-1">{p.audience}</p>
                  <h3 className="text-3xl font-bold text-white mb-1">
                    <Link href={p.href} className="text-white no-underline hover:text-[color:var(--brand-cyan)] transition-colors">
                      {p.name}
                    </Link>
                  </h3>
                  <p className="text-sm text-white/75 mb-5">
                    {p.descriptor}
                    {p.provisionalName && <span className="text-white/70"> · nome provisório</span>}
                  </p>
                  <p className="text-2xl font-semibold text-gradient-brand mb-4">{p.tagline}</p>
                  <p className="text-white/80 leading-relaxed mb-8">{p.summary}</p>
                  <Link
                    href={p.href}
                    className="mt-auto self-start btn-brand inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold no-underline"
                  >
                    Conhecer o produto
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                </article>
              </li>
            ))}
            <li>
              <div className="h-full p-8 md:p-10 rounded-3xl border border-dashed border-white/15 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-white mb-3">Próximos produtos</h3>
                <p className="text-white/75 leading-relaxed">
                  Estamos estudando outras tarefas do dia a dia de escritórios contábeis, como a
                  cobrança de documentos dos clientes pelo WhatsApp. Se você tem uma dor que
                  mereceria um produto, conte para a gente.
                </p>
                <Link href={ROUTES.contato} className="mt-6 inline-flex items-center gap-2 text-[color:var(--brand-cyan)] font-semibold hover:gap-3 transition-all no-underline">
                  Fale conosco
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="como-titulo" className="py-20 md:py-28 bg-[#070D18]/60 border-y border-white/5">
        <div className="container">
          <SectionHeader
            id="como-titulo"
            eyebrow="Como fazemos produto"
            title="A mesma engenharia da consultoria, em produto de prateleira"
            lead="Os produtos nascem da experiência com sistemas regulados, pagamentos e SaaS, e do mesmo cuidado com qualidade que levamos aos clientes da consultoria."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map(({ icon: Icon, title, text }) => (
              <div key={title} className="p-8 rounded-2xl glass-card">
                <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[color:var(--brand-blue)]/15">
                  <Icon size={22} aria-hidden="true" className="text-[color:var(--brand-cyan)]" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
                <p className="text-white/75 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title={
          <>
            Tem um escritório de contabilidade? <span className="text-gradient-brand">Teste com 1 extrato.</span>
          </>
        }
        text="Mande um extrato de um cliente, com os dados sensíveis cobertos, e veja os lançamentos classificados no plano de contas dele."
        primary={{ text: 'Conhecer o Razão', href: ROUTES.produtoLancamentos }}
        whatsappMessage={WHATSAPP_MESSAGES.lancamentosTeste}
        whatsappText="Quero testar com 1 extrato"
      />
    </div>
  );
}
