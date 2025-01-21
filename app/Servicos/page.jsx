import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from 'components/card';
import { RandomQuote } from 'components/random-quote';
import { Markdown } from 'components/markdown';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';

const services = [
    {
        title: 'Desenvolvimento de Software',
        description: 'Criamos soluções sob medida para as necessidades do seu negócio, com foco em inovação e escalabilidade.',
        icon: '/icons/software-development.svg'
    },
    {
        title: 'Consultoria em TI',
        description: 'Ajudamos empresas a otimizar seus processos através de uma consultoria especializada em tecnologia.',
        icon: '/icons/consulting.svg'
    },
    {
        title: 'Manutenção de Sistemas',
        description: 'Garantimos o funcionamento contínuo de sistemas críticos com monitoramento e manutenção preventiva.',
        icon: '/icons/maintenance.svg'
    },
];

const postDynamicContentExplainer = `
A Britech trabalha com as tecnologias mais recentes para entregar soluções ágeis e escaláveis. Focamos em proporcionar a melhor experiência para nossos clientes, com um atendimento personalizado e soluções que atendem às suas necessidades específicas.
`;

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <>
            <Head>
                {/* Google Ads Tracking Code */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16830296980"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-16830296980');
                        `,
                    }}
                />
            </Head>
            <main className="flex flex-col gap-8 sm:gap-16">
                <section className="flex flex-col items-start gap-3 sm:gap-4">
                    <h1 className="mb-0 text-4xl font-bold">Nossos Serviços</h1>
                    <p className="text-lg">
                        Conheça os serviços que oferecemos para transformar sua empresa através de soluções digitais inovadoras.
                    </p>
                </section>
                <section className="flex flex-col gap-4">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="card p-6 bg- shadow-lg rounded-lg text-center transition-all hover:scale-105">
                                <Image src={service.icon} alt={service.title} width={80} height={80} className="mx-auto mb-4" />
                                <h3 className="text-2xl font-semibold">{service.title}</h3>
                                <p className="text-gray-500 mt-2">{service.description}</p>
                            </div>
                        ))}
                    </div>
                    <Markdown content={postDynamicContentExplainer} />
                </section>
            </main>
        </>
    );
}
