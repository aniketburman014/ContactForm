

interface ContactFormData {
    name: string;
    email: string;
    contactNumber: string;
    subject: string;
    message: string;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm') as HTMLFormElement;

    form.addEventListener('submit', async (e: Event) => {
        e.preventDefault();


        const formData: ContactFormData = {
            name: (document.getElementById('name') as HTMLInputElement).value,
            email: (document.getElementById('email') as HTMLInputElement).value,
            contactNumber: (document.getElementById('contactNumber') as HTMLInputElement).value,
            subject: (document.getElementById('subject') as HTMLInputElement).value,
            message: (document.getElementById('message') as HTMLTextAreaElement).value,
        };

       
        

        console.log('Form data:', formData); 
        try {
            
            const response = await fetch('https://6717438db910c6a6e0273448.mockapi.io/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorText = await response.text(); 
                throw new Error(`Failed to submit the form: ${response.status} ${errorText}`);
            }

            alert('Form Submitted Successfully');
            form.reset();  
        } catch (error: unknown) {
            if (error instanceof Error) {
                alert('Submission Failed: ' + error.message);
            } else {
                alert('An unknown error occurred');
            }
        }
    });
});
