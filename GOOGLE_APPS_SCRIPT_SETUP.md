# Google Sheets contact form setup

1. Open your Google Spreadsheet.
2. Go to Extensions > Apps Script.
3. Replace the default script with the contents of [google-apps-script.gs](google-apps-script.gs).
4. Save and deploy the script as a web app:
   - Deploy > New deployment
   - Select "Web app"
   - Execute as: Me
   - Who has access: Anyone
5. Copy the generated web app URL.
6. Update the endpoint in [src/app/components/contact/contact.component.ts](src/app/components/contact/contact.component.ts) if needed.
7. Submit the form again and confirm that a new row appears in the Contacts sheet.
