function doGet() {
  return ContentService
    .createTextOutput('Contact form endpoint is ready.')
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    const SPREADSHEET_ID = '1Nxq8P_M2IcPUNX1xPyKFF38JvkV5WWGiQ8ss7VHLlBQ';
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const targetSheet = spreadsheet.getSheetByName('ContactUsMCI') || spreadsheet.insertSheet('ContactUsMCI');

    let parameters = {};
    if (e && e.parameter) {
      parameters = e.parameter;
    }

    const postData = e && e.postData && e.postData.contents ? e.postData.contents : '';
    if (postData) {
      try {
        const parsed = JSON.parse(postData);
        if (parsed && typeof parsed === 'object') {
          parameters = Object.assign({}, parameters, parsed);
        }
      } catch (jsonError) {
        const decoded = decodeURIComponent(postData.replace(/\+/g, ' '));
        const pairs = decoded.split('&');
        pairs.forEach(function(pair) {
          const index = pair.indexOf('=');
          if (index !== -1) {
            const key = pair.substring(0, index);
            const value = pair.substring(index + 1);
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

    const output = ContentService.createTextOutput(JSON.stringify({ success: true }));
    output.setMimeType(ContentService.MimeType.JSON);
    output.setHeader('Access-Control-Allow-Origin', '*');
    output.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    output.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');
    return output;
  } catch (error) {
    console.error(error);
    const output = ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() }));
    output.setMimeType(ContentService.MimeType.JSON);
    output.setHeader('Access-Control-Allow-Origin', '*');
    output.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    output.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');
    return output;
  }
}

function doOptions() {
  const output = ContentService.createTextOutput('');
  output.setMimeType(ContentService.MimeType.TEXT);
  output.setHeader('Access-Control-Allow-Origin', '*');
  output.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  output.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');
  return output;
}
