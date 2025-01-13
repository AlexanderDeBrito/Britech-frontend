import { FeedbackForm } from 'components/feedback-form';
import { Markdown } from '../../components/markdown';

export const metadata = {
    title: 'Contato | Britech'
};

const contactInfo = `
Entre em contato com a Britech para saber mais sobre como podemos ajudar o seu negócio com soluções tecnológicas sob medida.

**Telefone:** (47) 99999-9999  
**E-mail:** [britech.solucoes@gmail.com](mailto:britech.solucoes@gmail.com)

Preencha o formulário abaixo e retornaremos o mais breve possível!
`;

export default function Page() {
    return (
        <div className="flex flex-col gap-8 items-center justify-center py-12">
            <h1 className="text-4xl font-bold text-center">Entre em Contato</h1>
            <Markdown content={contactInfo} />
            <div className="flex w-full max-w-lg pt-8 justify-center">
                <FeedbackForm />
            </div>
        </div>
    );
}
