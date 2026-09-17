import Eyebrow from "@/components/Eyebrow";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | E-Markets Africa",
};

export default function ContactPage() {
  return (
    <div>
      <section className="pt-40 pb-20 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Eyebrow>Get In Touch</Eyebrow>
          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-3xl font-display mb-6">
            Start a conversation.
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            Whether you are looking to transform a business, build a venture,
            enter an African market, invest in technology-enabled
            opportunities, or develop a strategic partnership — tell us what
            you are trying to accomplish.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-10">
            <div>
              <div className="text-[10px] font-bold tracking-widest text-navy/50 uppercase mb-3">
                Email
              </div>
              <a
                href="mailto:contact@e-marketsafrica.com"
                className="text-sm font-semibold text-navy no-underline hover:text-gold"
              >
                contact@e-marketsafrica.com
              </a>
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-widest text-navy/50 uppercase mb-3">
                Locations
              </div>
              <p className="text-sm font-semibold text-navy">
                Ottawa, Canada
                <br />
                Lagos, Nigeria
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
