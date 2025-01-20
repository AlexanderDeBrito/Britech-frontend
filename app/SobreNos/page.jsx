import Image from 'next/image';
import { Markdown } from 'components/markdown';
import { getNetlifyContext } from 'utils';
import { ImageWithSizeOverlay } from './image-with-size-overlay';
import { ContextAlert } from 'components/context-alert';

export const metadata = {
    title: 'Sobre Nós'
};

const sampleImage = '/images/team-photo.jpg'; // Substitua com uma imagem de equipe ou algo que represente a empresa

const ctx = getNetlifyContext();
const forceWebP = ctx === 'dev';


const aboutUsSnippet = `
A Britech é uma software house focada em soluções inovadoras para empresas que buscam excelência tecnológica. Fundada por profissionais apaixonados por tecnologia e com vasta experiência no mercado de software, nossa missão é transformar a visão de nossos clientes em realidade.

Com conhecimento profundo em desenvolvimento de software sob medida, integração de sistemas, transformação digital e serviços de consultoria, trabalhamos para otimizar processos e criar soluções personalizadas que atendem às necessidades específicas de cada cliente.

Estamos sempre em busca das tecnologias mais avançadas e melhores práticas para garantir que nossos projetos sejam ágeis, escaláveis e de alta qualidade. Nosso objetivo é ser o parceiro ideal para empresas que querem crescer e se destacar em um mundo digital em constante evolução.
`;

const devModeWarning = `
Em desenvolvimento local, a otimização de imagens é feita localmente sem detecção automática de formato, então o formato é definido como WebP.
`;

export default function Page() {
    return (
        <div className="flex flex-col gap-6 sm:gap-12">
            <section className="flex flex-col items-start gap-6 sm:gap-8">                
                <h1 className="mb-0">Sobre a Britech</h1>
                <p className="text-lg">Transformamos empresas com soluções digitais inovadoras, criadas sob medida.</p>
            </section>

             <section>
                <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Nossa História</h2>
                <Markdown content={aboutUsSnippet} />
                {/* <div
                    className="mt-8 overflow-hidden border-2 border-white rounded-lg relative max-w-screen-lg"
                    style={{ aspectRatio: '3/2' }}
                >
                     <Image
                        src={sampleImage}
                        priority
                        fill={true}
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        alt="Equipe Britech"
                    /> 
                </div> */}
            </section> 

            <section>
                <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Tecnologia e Inovação</h2>
                <Markdown content={`
                Na Britech, acreditamos que a inovação é o motor do sucesso. Por isso, estamos sempre adotando novas tecnologias para garantir soluções ágeis e de alta performance. Nossos desenvolvedores são especialistas em uma ampla gama de tecnologias, de frameworks modernos a soluções de infraestrutura em nuvem, sempre com o objetivo de entregar o melhor para nossos clientes.
                `} />
            </section>

            <section>
                <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Por que escolher a Britech?</h2>
                <Markdown content={`
                Nossa experiência em projetos complexos e nossa dedicação à entrega de soluções personalizadas tornam a Britech uma escolha confiável para empresas que buscam parceiros de tecnologia comprometidos com o sucesso a longo prazo. Cada projeto que entregamos é uma oportunidade para criar um impacto real e positivo no negócio de nossos clientes.
                `} />
            </section>
        </div>
    );
}
