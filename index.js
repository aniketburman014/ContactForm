"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            contactNumber: document.getElementById('contactNumber').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
        };
        if (!formData.name || !formData.email || !formData.contactNumber || !formData.subject || !formData.message) {
            alert('Please fill in all required fields.');
            return;
        }
        console.log('Form data:', formData);
        try {
            const response = yield fetch('https://6717438db910c6a6e0273448.mockapi.io/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                const errorText = yield response.text();
                throw new Error(`Failed to submit the form: ${response.status} ${errorText}`);
            }
            alert('Form Submitted Successfully');
            form.reset();
        }
        catch (error) {
            if (error instanceof Error) {
                alert('Submission Failed: ' + error.message);
            }
            else {
                alert('An unknown error occurred');
            }
        }
    }));
});
