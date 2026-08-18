import { useState } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { Mail, Phone, MapPin, Loader2, CheckCircle2, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppButton';
import { CONTACT, whatsappUrl } from '@/lib/contact';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Sem backend: o formulário monta a mensagem e abre direto no WhatsApp.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const lines = [
      `Olá! Me chamo *${formData.name}*.`,
      formData.company && `Empresa: ${formData.company}`,
      formData.email && `E-mail: ${formData.email}`,
      formData.phone && `Telefone: ${formData.phone}`,
      '',
      formData.message,
    ].filter((l) => l !== undefined && l !== null);

    window.open(whatsappUrl(lines.join('\n')), '_blank', 'noopener,noreferrer');

    setLoading(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    setTimeout(() => setSubmitted(false), 6000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'E-mail',
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
    },
    {
      icon: Phone,
      title: 'Telefone / WhatsApp',
      value: CONTACT.phoneDisplay,
      href: whatsappUrl(),
    },
    {
      icon: MapPin,
      title: 'Localização',
      value: CONTACT.location,
      href: null,
    },
  ];

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-white/30 focus:outline-none focus:border-[color:var(--brand-blue)]/60 focus:bg-white/10 focus:ring-2 focus:ring-[color:var(--brand-blue)]/20 transition-all';

  return (
    <div className="flex flex-col">
      <HeroSection
        title="Vamos conversar sobre o seu projeto"
        highlightWord="conversar"
        subtitle="Contato · Blumenau, SC"
        description="Conte o que você precisa. Respondemos em até 24h com um direcionamento gratuito, sem compromisso."
        showSecondary={false}
      />

      <section className="py-20 md:py-28">
        <div className="container">
          {/* Cards de contato */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              const content = (
                <div className="p-6 rounded-2xl glass-card hover:border-[color:var(--brand-blue)]/40 transition-colors h-full">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#0A84FF]/20 to-[#00D4FF]/10 border border-[color:var(--brand-blue)]/30">
                    <Icon size={22} className="text-[color:var(--brand-cyan)]" />
                  </div>
                  <h3 className="font-semibold text-white mb-1 text-sm uppercase tracking-wider">
                    {info.title}
                  </h3>
                  <p className="text-white/80">{info.value}</p>
                </div>
              );

              return info.href ? (
                <a key={info.title} href={info.href} className="no-underline">
                  {content}
                </a>
              ) : (
                <div key={info.title}>{content}</div>
              );
            })}
          </div>

          {/* Formulário */}
          <div className="max-w-3xl mx-auto p-8 md:p-12 rounded-3xl glass-card">
            <span className="inline-block text-xs font-bold text-[color:var(--brand-cyan)] uppercase tracking-[0.2em] mb-3">
              Formulário
            </span>
            <h2 className="mb-8 text-white">Envie sua mensagem</h2>

            <p className="text-white/60 mb-8 -mt-4">
              Preencha os campos e a conversa abre direto no nosso WhatsApp — sem espera, sem
              formulário perdido na caixa de entrada.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex gap-3 items-center">
                <CheckCircle2 size={20} className="text-[#25D366] flex-shrink-0" />
                <p className="text-white font-medium">
                  Sua conversa foi aberta no WhatsApp! É só enviar a mensagem por lá.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="(47) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`${inputClass} resize-none`}
                  placeholder="Conte sobre seu projeto ou desafio..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 rounded-full font-semibold disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 bg-[#25D366] text-white shadow-[0_8px_30px_-6px_rgba(37,211,102,0.5)] hover:bg-[#1FBF5B] hover:-translate-y-0.5 transition-all"
              >
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Abrindo WhatsApp...
                  </>
                ) : (
                  <>
                    <WhatsAppIcon size={20} />
                    Enviar pelo WhatsApp
                    <ArrowRight size={18} />
                  </>
                )}
              </button>

              <p className="text-center text-sm text-white/40">
                Prefere e-mail? Escreva para{' '}
                <a href={`mailto:${CONTACT.email}`} className="text-white/70 hover:text-[color:var(--brand-cyan)]">
                  {CONTACT.email}
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
