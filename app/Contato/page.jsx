import Head from 'next/head';
import { ContatoForm } from 'components/contato-form';
import { Markdown } from '../../components/markdown';

export const metadata = {
    title: 'Contato',
};

const contactInfo = `
Entre em contato com a Britech para saber mais sobre como podemos ajudar o seu negócio com soluções tecnológicas sob medida.

**Telefone:** (47) 99999-9999  
**E-mail:** [britech.solucoes@gmail.com](mailto:britech.solucoes@gmail.com)

Preencha o formulário abaixo e retornaremos o mais breve possível!
`;

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
            <div className="flex flex-col gap-8 items-center justify-center py-12">
                <h1 className="text-4xl font-bold text-center">Entre em Contato</h1>
                <Markdown content={contactInfo} />
                <div className="flex w-full max-w-lg pt-8 justify-center">
                    <ContatoForm />
                </div>
            </div>
        </>
    );
}
