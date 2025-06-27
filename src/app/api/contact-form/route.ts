// src/app/api/contact-form/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const formData = await request.json();
    
    // Validate the form data
    if (!formData.name || !formData.email) {
      return NextResponse.json(
        { success: false, message: 'Name and email are required' },
        { status: 400 }
      );
    }    // Replace this URL with your deployed Google Apps Script web app URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbycXo8sMNt5bdYQBhO0cFOqSu9hSCd0GFvVLvYCJckReYVBjPIfxqZBUN2gbTCZ_Wwz2A/exec';
    
    // Send the data to Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      mode: 'cors',
    });
      // Handle different response types
    let result;
    try {
      result = await response.json();
    } catch {
      // If not JSON, try to get text response
      const text = await response.text();
      if (text.includes('success')) {
        result = { success: true, message: 'Form submitted successfully' };
      } else {
        throw new Error('Failed to parse response from Google Script');
      }
    }
    
    if (!response.ok) {
      throw new Error(result.message || 'Failed to submit form');
    }
    
    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
    });
    
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : 'An unexpected error occurred' 
      },
      { status: 500 }
    );
  }
}
