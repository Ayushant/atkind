/**
 * Google Apps Script to process form submissions and append data to a Google Sheet
 * 
 * Instructions:
 * 1. Open your Google Sheet
 * 2. Go to Extensions > Apps Script
 * 3. Paste this code into the script editor
 * 4. Save the project with a name like "Form Processor"
 * 5. Deploy the script as a web app:
 *    - Click Deploy > New deployment
 *    - Select "Web app" as the type
 *    - Set "Who has access" to "Anyone" (or "Anyone, even anonymous" in older versions)
 *    - Click "Deploy"
 *    - Copy the web app URL
 * 6. Use this URL as your form action in your website
 */

// The doGet function handles GET requests to the web app
function doGet(e) {
  return HtmlService.createHtmlOutput("The form handler is working! Please use POST method to submit form data.");
}

// The doPost function handles POST requests (form submissions)
function doPost(e) {
  try {
    // Parse the JSON data from the request
    let formData;
    if (e.postData && e.postData.contents) {
      formData = JSON.parse(e.postData.contents);
    } else {
      formData = e.parameter;
    }
    
    // Open the specific spreadsheet by ID
    const spreadsheetId = '13Hf-oUFxJA0WkZTimmiDNf8yJeD0wpfNXIZ0qQtFlfE';
    const ss = SpreadsheetApp.openById(spreadsheetId);
    const sheet = ss.getActiveSheet();
    
    // Get the headers from the first row
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    
    // Create an array for the new row
    const newRow = [];
    
    // Fill the new row with data from the form
    for (let i = 0; i < headers.length; i++) {
      const header = headers[i];
      newRow.push(formData[header] || ""); // Add form data or empty string if not available
    }
    
    // Add timestamp at the beginning of the row
    newRow.unshift(new Date());
    
    // Append the new row to the sheet
    sheet.appendRow(newRow);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: "Form data has been recorded successfully!"
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: "Error: " + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
