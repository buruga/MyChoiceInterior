function doGet() {
  return ContentService
    .createTextOutput('Contact form endpoint is ready. Use POST or provide query params.')
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    const SPREADSHEET_ID = '1Nxq8P_M2IcPUNX1xPyKFF38JvkV5WWGiQ8ss7VHLlBQ';
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const targetSheet =
      spreadsheet.getSheetByName('Contacts') ||
      spreadsheet.getSheetByName('ContactUsMCI') ||
      spreadsheet.insertSheet('Contacts');

    let parameters = {};
    if (e && e.parameter) {
      parameters = e.parameter;
    }

    const postData = e && e.postData && e.postData.contents ? e.postData.contents : '';
    const contentType = e && e.postData && e.postData.type ? e.postData.type.toLowerCase() : '';

    if (postData) {
      if (contentType.indexOf('application/json') !== -1) {
        const parsed = JSON.parse(postData);
        if (parsed && typeof parsed === 'object') {
          parameters = Object.assign({}, parameters, parsed);
        }
      } else {
        const pairs = postData.split('&');
        pairs.forEach(function(pair) {
          const index = pair.indexOf('=');
          if (index !== -1) {
            const key = decodeURIComponent(pair.substring(0, index).replace(/\+/g, ' '));
            const value = decodeURIComponent(pair.substring(index + 1).replace(/\+/g, ' '));
            parameters[key] = value;
          }
        });
      }
    }

    const payload = {
      name: parameters.name || '',
      email: parameters.email || '',
      phone: parameters.phone || '',
      subject: parameters.subject || '',
      message: parameters.message || '',
      submittedAt: parameters.submittedAt || new Date().toISOString()
    };

    if (targetSheet.getLastRow() === 0) {
      targetSheet.appendRow(['name', 'email', 'phone', 'subject', 'message', 'submittedAt']);
    }

    targetSheet.appendRow([
      payload.name,
      payload.email,
      payload.phone,
      payload.subject,
      payload.message,
      payload.submittedAt
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, sheet: targetSheet.getName() }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error(error);
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
