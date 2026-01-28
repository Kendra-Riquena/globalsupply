const formShortContact = document.getElementById('short-contact');
const formContact = document.getElementById('contact');
const formCareers = document.getElementById('form-careers');

if (formShortContact) {
    formShortContact.addEventListener('submit', async (e) => {
        e.preventDefault();

        const dados = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        const resposta = await fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });

        if (resposta.ok) {
            alert('E-mail sent successfully!');
            formShortContact.reset();
        } else {
            alert('Error sending e-mail.');
        }
    });
}

if (formContact) {
    formContact.addEventListener('submit', async (e) => {
        e.preventDefault();

        const dadosContact = {
            name: document.getElementById('contactName').value,
            company: document.getElementById('contactCompanyName').value,
            email: document.getElementById('contactEmail').value,
            phone: document.getElementById('contactPhone').value,
            message: document.getElementById('contactMessage').value
        };

        const resposta = await fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dadosContact)
        });

        if (resposta.ok) {
            alert('E-mail sent successfully!');
            formContact.reset();
        } else {
            alert('Error sending e-mail.');
        }
    });
}
if (formCareers) {
    formCareers.addEventListener('submit', async (e) => {
        e.preventDefault();

        const dadosCareers = {
            name: document.getElementById('candidateName').value,
            email: document.getElementById('candidateEmail').value,
            phone: document.getElementById('candidatePhone').value,
            address: document.getElementById('candidateAddress').value,
            interestArea: document.querySelector('input[name="InterestArea"]:checked')?.value || '',
            positionType: document.querySelector('input[name="positionType"]:checked')?.value || '',
            availability: document.querySelector('input[name="optionAvailabilityStart"]:checked')?.value || '',
            professionalSummary: document.getElementById('candidateProfessionalSummary').value,
            linkedin: document.getElementById('candidateLinkedin').value,
            portfolio: document.getElementById('candidatePortifolio').value,
            cv: document.getElementById('candidateCv').value.split('\\').pop(),
            coverLetter: document.getElementById('candidateCoverLetter').value.split('\\').pop(),
            message: document.getElementById('candidateMessage').value,
            howHearAbout: document.querySelector('input[name="howHearAbout"]:checked')?.value || '',
            authorization: document.getElementById('candidateAuthorization').checked ? 'Yes' : 'No'
        };

        const resposta = await fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dadosCareers)
        });

        if (resposta.ok) {
            alert('E-mail sent successfully!');
            formCareers.reset();
        } else {
            alert('Error sending e-mail.');
        }
    });
}