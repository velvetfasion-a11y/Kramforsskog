
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import { Button } from '@/components/ui/button';

function HomePage() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const serviceNumberContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.4, delayChildren: 0.15 },
    },
  };

  const serviceNumberItem = {
    hidden: { color: 'hsla(142, 47%, 28%, 0.2)' },
    visible: {
      color: 'hsl(142, 47%, 28%)',
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const services = [
    {
      number: '01',
      title: 'Trädfällning & Avverkning',
      description:
        'Vi utför avverkningsuppdrag från enskilda träd till kvalitetsgallring och slutavverkning, alltid till konkurrenskraftiga priser.'
    },
    {
      number: '02',
      title: 'Skogsvård & Skogsröjning',
      description:
        'Vi tar hand om din skog. Vi utför effektiv skogsröjning för att skapa en friskare och mer produktiv skogsmiljö.'
    },
    {
      number: '03',
      title: 'Trädsäkring & Infrastruktur',
      description:
        'Säker avverkning och trädsäkring vid både befintliga och nya kraftledningar, samt specialkompetens för järnväg.'
    },
    {
      number: '04',
      title: 'Certifierad Expertis',
      description:
        'Oavsett projekt är vi fullt certifierade och har alla de utbildningar som krävs för att utföra arbetet tryggt och säkert.'
    }
  ];

  const workImages = [
    {
      url: '/images/work-1.png',
      caption: 'Röjt. Skött. Klart.'
    },
    {
      url: '/images/work-2.png',
      caption: 'Professionella resultat.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Kramfors Skog AB - Trädfällning och skogsvård</title>
        <meta
          name="description"
          content="Trädfällning och skogsvård i Kramfors. Vi tar hand om uppdrag i alla storlekar – professionellt och pålitligt."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section
          id="hero"
          className="relative min-h-[100dvh] flex items-center justify-center bg-[#0a0a0a]"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(/images/hero.png)',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/45"></div>
          </div>

          <div className="container relative z-10 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)]"
            >
              <h1 className="mb-6">
                Träd som behövs fällas? Du bestämmer, vi fixar det.
              </h1>
              <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed mb-10">
                Små eller stora uppdrag, på tomten eller i skogen. Du får det gjort tryggt och proffsigt så du kan fokusera på det som är viktigt för dig.
              </p>
              <Button
                type="button"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-10"
              >
                Kontakta oss
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-16 text-center">Vad vi gör</h2>
            </motion.div>

            <motion.div
              className="space-y-12 max-w-4xl mx-auto"
              variants={serviceNumberContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-8 items-start"
                >
                  <motion.div
                    className="text-6xl font-bold leading-none"
                    variants={serviceNumberItem}
                  >
                    {service.number}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Work/Results Section */}
        <section className="py-24 bg-secondary">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-16 text-center">Vårt arbete</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {workImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="space-y-4"
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-xl">
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center 26%' }}
                    />
                  </div>
                  <p className="text-center font-medium text-lg">{image.caption}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="mb-6">Kontakta oss</h2>
              <p className="text-lg text-muted-foreground mb-12">
                Behöver du en offert eller har du frågor? Fyll i formuläret nedan så återkommer vi inom 24 timmar.
              </p>

              <div className="mb-8">
                <p className="text-lg">
                  <span className="font-semibold">E-post:</span>{' '}
                  <a href="mailto:info@kramforsskog.se" className="text-primary hover:underline">
                    info@kramforsskog.se
                  </a>
                </p>
              </div>

              <ContactForm />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
