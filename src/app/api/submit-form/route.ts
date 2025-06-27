import { NextRequest, NextResponse } from 'next/server';

// Google Apps Script Web App URL
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
      body: JSON.stringify(data),
      mode: 'cors',    });
    
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
      message: 'Form submitted successfully' 
    });
    
    
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to submit form' 
    }, { status: 500 });
  }
}
