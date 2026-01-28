const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/send-email', async (req, res) => {
    const {
        name, company, email, phone, message,
        address, interestArea, positionType, availability,
        professionalSummary, linkedin, portfolio, cv,
        coverLetter, howHearAbout, authorization
    } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: '',
            pass: ''
        }
    });

    let subject = '';
    let text = '';

    // Verifica se é o formulário de Carreiras (baseado em campos específicos)
    if (interestArea || cv || positionType) {
        subject = `New Career Application: ${name}`;
        text = `Name: ${name}
                Email: ${email}
                Phone: ${phone || 'N/A'}
                Address: ${address || 'N/A'}
                Interest Area: ${interestArea || 'N/A'}
                Position Type: ${positionType || 'N/A'}
                Availability: ${availability || 'N/A'}
                Professional Summary: ${professionalSummary || 'N/A'}
                LinkedIn: ${linkedin || 'N/A'}
                Portfolio: ${portfolio || 'N/A'}
                CV: ${cv || 'N/A'}
                Cover Letter: ${coverLetter || 'N/A'}
                How did you hear about us: ${howHearAbout || 'N/A'}
                Authorization: ${authorization || 'N/A'}
                Message: ${message || 'N/A'}`;
    } else {
        // Formulários de Contato ou Serviços
        subject = `New Contact Message from ${name}`;
        text = `Name: ${name}\nEmail: ${email}`;
        if (company) text += `\nCompany: ${company}`;
        if (phone) text += `\nPhone: ${phone}`;
        text += `\nMessage: ${message || 'N/A'}`;
    }

    try {
        await transporter.sendMail({
            from: '',
            to: '',
            replyTo: email,
            subject: subject,
            text: text
        });
        res.status(200).send('Sent!');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(3000);