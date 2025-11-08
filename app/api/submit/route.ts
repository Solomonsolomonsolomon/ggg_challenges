import { google } from "googleapis";
import { NextResponse } from "next/server";

const formatPrivateKey = (key: string) => key.replace(/\\n/g, "\n");

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: formatPrivateKey(process.env.GOOGLE_PRIVATE_KEY || ""),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});


const sheetConfigs: Record<string, { id: string; sheetName: string }> = {
  default: {
    id: process.env.DEFAULT_SHEET_ID!,
    sheetName: "Sheet1",
  },
  planks: {
    id: process.env.PLANKS_SHEET_ID!,
    sheetName: "Sheet1",
  },
  greekGod: {
    id: process.env.GREEKGOD_SHEET_ID!,
    sheetName: "Sheet1",
  },
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { challengeId, formData } = body;

    // Get the right sheet configuration for this challenge
    const config = sheetConfigs[challengeId] || sheetConfigs.default;

    const sheets = google.sheets({ version: "v4", auth });

    // Flatten the object values into an array
    const values = Object.values(formData);

    // Append the data to the appropriate sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: config.id,
      range: `${config.sheetName}!A2`,
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [values] },
    });

    return NextResponse.json(
      { message: "Successfully added to Google Sheets" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Google Sheets API Error:", error);
    return NextResponse.json(
      { message: "Failed to add", error: (error as Error).message },
      { status: 500 }
    );
  }
}
