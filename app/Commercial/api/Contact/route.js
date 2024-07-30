const { NextResponse } = require("next/server");
const registerEmail = require("../mail/sendContactEmail");

async function POST(request) {
  try {
    const body = await request.json();
    const { Name, email, contact, business, message } = body;

    console.log("body:", body);

    await registerEmail({ Name, contact, email, business, message });
    return NextResponse.json(
      {
        message: "Email Sent Successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("error 500:", error);
    return NextResponse.json({ message: "Email Not Sent." }, { status: 500 });
  }
}

module.exports = {
  POST,
};
