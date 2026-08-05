import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_565y2mc'
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'PASTE_YOUR_TEMPLATE_ID_HERE'
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'PASTE_YOUR_PUBLIC_KEY_HERE'

// Service ID is used when sending the email to EmailJS.
// Template ID is used to select the EmailJS template.
// Public Key is used to authorize EmailJS from the client.
export async function sendContactEmail({ name, email, message }) {
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, { name, email, message }, PUBLIC_KEY)
}
