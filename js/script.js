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

        const formData = new FormData();
        formData.append('name', document.getElementById('candidateName').value);
        formData.append('email', document.getElementById('candidateEmail').value);
        formData.append('phone', document.getElementById('candidatePhone').value);
        formData.append('address', document.getElementById('candidateAddress').value);
        formData.append('interestArea', document.querySelector('input[name="InterestArea"]:checked')?.value || '');
        formData.append('positionType', document.querySelector('input[name="positionType"]:checked')?.value || '');
        formData.append('availability', document.querySelector('input[name="optionAvailabilityStart"]:checked')?.value || '');
        formData.append('professionalSummary', document.getElementById('candidateProfessionalSummary').value);
        formData.append('linkedin', document.getElementById('candidateLinkedin').value);
        formData.append('portfolio', document.getElementById('candidatePortifolio').value);
        formData.append('message', document.getElementById('candidateMessage').value);
        formData.append('howHearAbout', document.querySelector('input[name="howHearAbout"]:checked')?.value || '');
        formData.append('authorization', document.getElementById('candidateAuthorization').checked ? 'Yes' : 'No');

        const cvFile = document.getElementById('candidateCv').files[0];
        if (cvFile) formData.append('cv', cvFile);

        const coverLetterFile = document.getElementById('candidateCoverLetter').files[0];
        if (coverLetterFile) formData.append('coverLetter', coverLetterFile);

        const resposta = await fetch('http://localhost:3000/send-email', {
            method: 'POST',
            body: formData
        });

        if (resposta.ok) {
            alert('E-mail sent successfully!');
            formCareers.reset();
        } else {
            alert('Error sending e-mail.');
        }
    });
}