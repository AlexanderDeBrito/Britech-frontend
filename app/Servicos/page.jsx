import Link from 'next/link';
import { Card } from 'components/card';
import { RandomQuote } from 'components/random-quote';
import { Markdown } from 'components/markdown';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';

const services = [
  { title: 'Desenvolvimento de Software', description: 'Criamos soluções sob medida para as necessidades do seu negócio, com foco em inovação e escalabilidade.' },
  { title: 'Consultoria em TI', description: 'Ajudamos empresas a otimizar seus processos através de uma consultoria especializada em tecnologia.' },
  { title: 'Manutenção de Sistemas', description: 'Garantimos o funcionamento contínuo de sistemas críticos com monitoramento e manutenção preventiva.' }, 
];

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
                <h1 className="mb-0">Nossos Serviços</h1>
                <p className="text-lg">
                    Conheça os serviços que oferecemos para transformar sua empresa através de soluções digitais inovadoras.
                </p>
            </section>
            <section className="flex flex-col gap-4">
                <Markdown content={preDynamicContentExplainer} />
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="card p-4 shadow-lg">
                            <h3 className="text-xl font-bold">{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
                <RandomQuote />
                <Markdown content={postDynamicContentExplainer} />
            </section>
        </main>
    );
}


