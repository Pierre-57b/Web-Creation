export interface ContactFormData {
  name: string;
  phone: string;
  message: string;
}

export const validateContactForm = (data: ContactFormData) => {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  if (!data.name.trim()) {
    errors.name = 'Le nom est requis';
  }

  if (!data.phone.trim()) {
    errors.phone = 'Le numéro de téléphone est requis';
  } else if (!/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(data.phone)) {
    errors.phone = 'Numéro de téléphone invalide';
  }

  if (!data.message.trim()) {
    errors.message = 'Le message est requis';
  }

  return errors;
};