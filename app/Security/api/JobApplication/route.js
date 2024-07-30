import sendRegisterEmail from "../mail/sendJobEmail";
const { NextResponse } = require("next/server");

const fs = require("fs");
const { createReadStream, createWriteStream } = require("fs");
const path = require("path");

const POST = async (req, res) => {
  try {
    const formData = await req.formData();
    const resumeFile = formData.get("resume");

    if (resumeFile instanceof File) {
      const arrayBuffer = await resumeFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      await sendRegisterEmail({
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        resume: { filename: resumeFile.name, content: buffer },
      });
      return NextResponse.json(
        {
          message: "Email Sent Successfully.",
        },
        { status: 200 }
      );
    }
    return NextResponse.json(
      {
        message: "File Not Present.",
      },
      { status: 500 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Email Not Sent." }, { status: 500 });
  }
};

module.exports = {
  POST,
};
