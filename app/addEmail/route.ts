import { NextResponse } from 'next/server'
import { NextRequest } from "next/server";
import { google } from "googleapis";

const spreadSheetId = "1AJ9My3iy417f5Zz_EvXVJzwpsfi82aAITxX3fxK8rTE";

async function initializeGoogleSheets() {
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });
  const client: any = await auth.getClient();
  return google.sheets({ version: "v4", auth: client });
}

async function checkIfEmailExists(email:string) {
    try {
        const googleSheets = await initializeGoogleSheets();
        const response = await googleSheets.spreadsheets.values.get({
            spreadsheetId: spreadSheetId,
            range: "Sheet1!A:A",
        })
        const values = response.data.values;
        if(values && values.flat().includes(email)) {
            return true; // Email exists
        }
        return false; // Email does not exists
    } catch (error) {
        console.error('Error checking email:', error);
        throw error;
    }
}

export async function POST(req: NextRequest, res:NextResponse) {
  try {
    const { email }: { email: string } = await req.json();

    const googleSheets = await initializeGoogleSheets();

    // Check if the email already exists in the spreadsheet
    const emailExists = await checkIfEmailExists(email);
    if (emailExists) {
        // If the email already exists, return an error response
        return NextResponse.json("Email already exists",{status:400})
    }

    const response= await googleSheets.spreadsheets.values.append({
      spreadsheetId: spreadSheetId,
      range: "Sheet1!A:A",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[email]],
      },
    });

    return NextResponse.json(response.config.data,{status:200})
  } catch (error:any) {
    console.error("Error adding email:", error);
    return NextResponse.json(error,{status:500})
  }
}
