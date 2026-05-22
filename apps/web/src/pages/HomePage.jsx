
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

function HomePage() {
  const services = [
    {
      number: '01',
      title: 'Tree felling',
      description: 'We cut down trees safely and efficiently. Single trees or entire stands.'
    },
    {
      number: '02',
      title: 'Forest management',
      description: 'Thinning, clearing, and maintenance to keep your forest healthy and productive.'
    },
    {
      number: '03',
      title: 'Land clearing',
      description: 'Prepare land for construction, agriculture, or new growth. Complete site preparation.'
    },
    {
      number: '04',
      title: 'Property maintenance',
      description: 'Ongoing care for private and commercial properties. Seasonal work and emergency response.'
    }
  ];

  const workImages = [
    {
      url: 'https://images.unsplash.com/photo-1677089883167-de687b715963',
      caption: 'Cleared. Managed. Done.'
    },
    {
      url: 'https://images.unsplash.com/photo-1586400792375-d6b8f82db2e6',
      caption: 'Professional results.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Kramfors Skog AB - Professional tree felling and forest management</title>
        <meta
          name="description"
          content="Professional tree felling, forest management, and land clearing services in Kramfors. We handle projects of all sizes with expertise and efficiency."
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
              backgroundImage: 'url(https://images.unsplash.com/photo-1677078681777-220c1932a0fb)',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
          </div>

          <div className="container relative z-10 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-6">
                Got trees you want cut? We handle it.
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Tree felling and forest management for small to large operations. Professional service, reliable results.
              </p>
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
              <h2 className="mb-16 text-center">What we do</h2>
            </motion.div>

            <div className="space-y-12 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-8 items-start"
                >
                  <div className="text-6xl font-bold text-primary/20 leading-none">
                    {service.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
              <h2 className="mb-16 text-center">Our work</h2>
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
              <h2 className="mb-6">Get in touch</h2>
              <p className="text-lg text-muted-foreground mb-12">
                Need a quote or have questions? Fill out the form below and we will get back to you within 24 hours.
              </p>

              <div className="mb-8">
                <p className="text-lg">
                  <span className="font-semibold">Email:</span>{' '}
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
