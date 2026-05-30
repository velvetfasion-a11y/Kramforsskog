
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { sendContactEmail } from '@/lib/emailjs';

const REQUIRED_FIELDS = ['name', 'phone', 'email', 'projectDescription'];

const fieldErrorClass =
  'border-destructive focus-visible:ring-destructive focus-visible:ring-1';

const emptyForm = {
  name: '',
  phone: '',
  email: '',
  projectDescription: '',
};

function ContactForm() {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const next = {};
    for (const field of REQUIRED_FIELDS) {
      if (!formData[field].trim()) {
        next[field] = 'obligatoriskt';
      }
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await sendContactEmail(formData);
      toast.success('Tack! Din förfrågan har skickats. Vi hör av oss snart.');
      setFormData(emptyForm);
      setErrors({});
    } catch (error) {
      console.error('EmailJS submission error:', error);

      if (error?.message === 'MISSING_PUBLIC_KEY') {
        toast.error(
          'E-post är inte konfigurerad. Lägg till VITE_EMAILJS_PUBLIC_KEY i .env (lokalt) eller i Render.',
        );
      } else {
        toast.error('Kunde inte skicka förfrågan. Försök igen eller ring oss.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldLabelClass = (field) =>
    cn(errors[field] && 'text-destructive');

  const fieldInputClass = (field) =>
    cn(
      'bg-white text-gray-900 placeholder:text-gray-400',
      errors[field] && fieldErrorClass,
    );

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6 max-w-2xl">
      <div className="space-y-2">
        <Label htmlFor="name" className={fieldLabelClass('name')}>
          Namn
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className={fieldInputClass('name')}
          placeholder="Ditt namn"
          disabled={isSubmitting}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-sm text-destructive">
            obligatoriskt
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className={fieldLabelClass('phone')}>
          Telefon
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className={fieldInputClass('phone')}
          placeholder="Ditt telefonnummer"
          disabled={isSubmitting}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="text-sm text-destructive">
            obligatoriskt
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className={fieldLabelClass('email')}>
          E-post
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className={fieldInputClass('email')}
          placeholder="din.epost@exempel.se"
          disabled={isSubmitting}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-sm text-destructive">
            obligatoriskt
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="projectDescription" className={fieldLabelClass('projectDescription')}>
          Projektbeskrivning
        </Label>
        <Textarea
          id="projectDescription"
          name="projectDescription"
          value={formData.projectDescription}
          onChange={handleChange}
          className={cn(fieldInputClass('projectDescription'), 'min-h-[120px]')}
          placeholder="Beskriv ditt projekt: yta, trädslag, tillgänglighet, tidsplan..."
          disabled={isSubmitting}
          aria-invalid={Boolean(errors.projectDescription)}
          aria-describedby={errors.projectDescription ? 'projectDescription-error' : undefined}
        />
        {errors.projectDescription && (
          <p id="projectDescription-error" className="text-sm text-destructive">
            obligatoriskt
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto"
      >
        {isSubmitting ? 'Skickar...' : 'Skicka förfrågan'}
      </Button>
    </form>
  );
}

export default ContactForm;
