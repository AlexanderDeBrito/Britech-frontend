import Link from 'next/link';
import { Card } from 'components/card';
import { RandomQuote } from 'components/random-quote';
import { Markdown } from 'components/markdown';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';

const cards = [
  // { text: 'Hello', linkText: 'someLink', href: '/' }
];

const contextExplainer = `
A Britech é uma software house especializada em soluções digitais personalizadas. Nossa missão é ajudar empresas a transformarem seus negócios por meio de software de alta qualidade e serviços de consultoria especializados.
`;

const preDynamicContentExplainer = `
Oferecemos uma gama de serviços como desenvolvimento de software sob medida, consultoria em TI, manutenção de sistemas e transformação digital. Nossos serviços são projetados para empresas que buscam inovação e eficiência através da tecnologia.
`;

const postDynamicContentExplainer = `
A Britech trabalha com as tecnologias mais recentes para entregar soluções ágeis e escaláveis. Focamos em proporcionar a melhor experiência para nossos clientes, com um atendimento personalizado e soluções que atendem às suas necessidades específicas.
`;

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <main className="flex flex-col gap-8 sm:gap-16">
            <section className="flex flex-col items-start gap-3 sm:gap-4">
                <ContextAlert />
                <h1 className="mb-0">Bem-vindo à Britech</h1>
                <p className="text-lg">
                    Transformamos empresas com soluções digitais inovadoras e personalizadas.
                </p>
                <Link
                    href="/servicos"
                    className="btn btn-lg btn-primary sm:btn-wide"
                >
                    Conheça Nossos Serviços
                </Link>
            </section>
            {!!ctx && (
                <section className="flex flex-col gap-4">
                    <Markdown content={contextExplainer} />
                    <RuntimeContextCard />
                </section>
            )}
            <section className="flex flex-col gap-4">
                <Markdown content={preDynamicContentExplainer} />
                <RandomQuote />
                <Markdown content={postDynamicContentExplainer} />
            </section>
            {/* !!cards?.length && <CardsGrid cards={cards} /> */}
        </main>
    );
}

function RuntimeContextCard() {
    const title = `Netlify Context: running in ${ctx} mode.`;
    if (ctx === 'dev') {
        return <Card title={title} text="Next.js will rebuild any page you navigate to, including static pages." />;
    } else {
        return <Card title={title} text="This page was statically-generated at build time." />;
    }
}
