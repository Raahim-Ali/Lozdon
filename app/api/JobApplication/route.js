const { NextResponse } = require("next/server");
const registerEmail = require("../mail/sendEmail");

async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, rewardFile } = body;

    console.log("body:", body);

    await registerEmail({ firstName, lastName, email, phone, rewardFile });
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
