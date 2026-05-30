import emailjs from '@emailjs/browser';

export const EMAILJS_SERVICE_ID = 'service_ziaqn1n';
export const EMAILJS_TEMPLATE_ID = 'template_27wh01k';

const STOCKHOLM = 'Europe/Stockholm';

export function getStockholmDateTime() {
  const now = new Date();
  const datum = new Intl.DateTimeFormat('sv-SE', {
    timeZone: STOCKHOLM,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now);

  const tid = new Intl.DateTimeFormat('sv-SE', {
    timeZone: STOCKHOLM,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(now);

  return { datum, tid };
}

export function buildEmailTemplateParams(formData) {
  const { datum, tid } = getStockholmDateTime();

  return {
    namn: formData.name.trim(),
    telefon: formData.phone.trim(),
    epost: formData.email.trim(),
    projektbeskrivning: formData.projectDescription.trim(),
    datum,
    tid,
  };
}

export async function sendContactEmail(formData) {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!publicKey) {
    throw new Error('MISSING_PUBLIC_KEY');
  }

  emailjs.init({ publicKey });

  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    buildEmailTemplateParams(formData),
  );
}
