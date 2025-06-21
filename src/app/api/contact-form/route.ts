import { NextRequest, NextResponse } from 'next/server';

// Google Apps Script Web App URL (same as submit-form for consistency)
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbycXo8sMNt5bdYQBhO0cFOqSu9hSCd0GFvVLvYCJckReYVBjPIfxqZBUN2gbTCZ_Wwz2A/exec';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.name || !data.email) {
      return NextResponse.json({ 
        success: false, 
        message: 'Name and email are required' 
      }, { status: 400 });
    }

    // Send the data directly to Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        formType: 'contact' // Add a form type identifier
      }),
      mode: 'cors',
    });
    
    // Handle response
    try {
      await response.json();
    } catch {
      // If not JSON, try to get text response
      const text = await response.text();
      if (!text.includes('success')) {
        console.error('Response from Google Script:', text);
      }
    }
    
    // Return success response
    return NextResponse.json({ 
      success: true, 
      message: 'Contact form submitted successfully' 
    });
    
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to submit contact form' 
    }, { status: 500 });
  }
}

// Optional: Add a GET handler for API route testing
export async function GET() {
  return NextResponse.json({ 
    message: 'Contact form API endpoint is working',
    methods: ['POST']
  });
}
