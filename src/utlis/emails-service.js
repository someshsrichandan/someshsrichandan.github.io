import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

const SERVICE_ID = "not added"
const TEMPLATE_ID = "not added"
const PUBLIC_KEY = "not added"



export const sendEmail = async (formData) => {
    try {
        if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) return await
            emailjs.sendForm(
                SERVICE_ID, TEMPLATE_ID,
                formData, { publicKey: PUBLIC_KEY }
            );
        return { status: 500 }
    } catch (error) {
        return { status: error.status ?? 500 }
    }
};