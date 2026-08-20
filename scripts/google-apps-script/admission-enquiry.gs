/**
 * Little Buds — Admission Enquiry Webhook
 *
 * SETUP:
 * 1. Create a Google Sheet and copy its ID from the URL:
 *    https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit
 * 2. Extensions → Apps Script → paste this file → set CONFIG.SHEET_ID below.
 * 3. (Optional) Set CONFIG.WEBHOOK_SECRET to match ENQUIRY_WEBHOOK_SECRET in .env.local
 * 4. Deploy → New deployment → Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the deployment URL (ends in /exec) into GOOGLE_APPS_SCRIPT_URL in .env.local
 * 6. Run testSetup() once from the editor to verify sheet + email permissions.
 */

var CONFIG = {
  SHEET_ID: "1MMfpfJygViUOnEistfmqVaqDXK_tvQNV8Vwe-0z5O6Y",
  NOTIFY_EMAIL: "littlebudskasba@gmail.com",
  SHEET_NAME: "Admission Enquiries",
  WEBHOOK_SECRET: "",
  TIMEZONE: "Asia/Kolkata",
};

var HEADERS = [
  "Timestamp",
  "Parent Name",
  "Child Name",
  "Contact",
  "Email",
  "Child Age",
  "Programme Interest",
  "Status",
];

function doGet() {
  return jsonResponse({
    ok: true,
    message: "Little Buds admission enquiry webhook is running.",
  });
}

function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);

    if (CONFIG.WEBHOOK_SECRET) {
      var secret = String(body.webhookSecret || "");
      if (secret !== CONFIG.WEBHOOK_SECRET) {
        return jsonResponse({ ok: false, error: "Unauthorized." });
      }
    }

    var parentName = String(body.parentName || "").trim();
    var childName = String(body.childName || "").trim();
    var contactNumber = String(body.contactNumber || "").trim();
    var email = String(body.email || "").trim();
    var childAge = String(body.childAge || "").trim();
    var programmeInterest = String(body.programmeInterest || "").trim();

    if (!parentName || !contactNumber) {
      return jsonResponse({ ok: false, error: "Missing required fields." });
    }

    var sheet = getSheet();
    ensureHeaders(sheet);

    var timestamp = new Date();
    sheet.appendRow([
      timestamp,
      parentName,
      childName,
      contactNumber,
      email,
      childAge,
      programmeInterest,
      "New",
    ]);

    var formattedTime = Utilities.formatDate(
      timestamp,
      CONFIG.TIMEZONE,
      "dd MMM yyyy, hh:mm a",
    );

    var subject = "New Admission Enquiry — " + parentName;
    var message =
      "A new admission enquiry was submitted on the Little Buds website.\n\n" +
      "Parent / Guardian: " + parentName + "\n" +
      "Child Name: " + (childName || "—") + "\n" +
      "Contact Number: " + contactNumber + "\n" +
      "Email: " + (email || "—") + "\n" +
      "Child Age: " + (childAge || "—") + "\n" +
      "Programme Interest: " + (programmeInterest || "—") + "\n" +
      "Submitted: " + formattedTime + " (IST)\n";

    MailApp.sendEmail({
      to: CONFIG.NOTIFY_EMAIL,
      subject: subject,
      body: message,
    });

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  }
}

function testSetup() {
  var sheet = getSheet();
  ensureHeaders(sheet);
  Logger.log("Sheet ready: " + sheet.getName());
  Logger.log("Notify email: " + CONFIG.NOTIFY_EMAIL);
}

function getSheet() {
  if (CONFIG.SHEET_ID === "YOUR_SHEET_ID_HERE") {
    throw new Error("Set CONFIG.SHEET_ID to your Google Sheet ID.");
  }

  var spreadsheet = SpreadsheetApp.openById(CONFIG.SHEET_ID);
  var sheet = spreadsheet.getSheetByName(CONFIG.SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(CONFIG.SHEET_NAME);
  }
  return sheet;
}

function ensureHeaders(sheet) {
  var firstRow = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  var isEmpty = firstRow.every(function (cell) {
    return cell === "" || cell === null;
  });
  if (isEmpty) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
