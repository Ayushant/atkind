/**
 * Submits form data to the server, which then sends it to Google Sheets
 */
export async function submitFormToGoogleSheets(formData: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  serviceType?: string;
  formType: string;
}) {
  try {
    // Use the correct API endpoint
    const response = await fetch('/api/contact-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    return {
      success: data.success,
      message: data.message,
    };
  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      success: false,
      message: 'Failed to submit form. Please try again later.',
    };
  }
}
