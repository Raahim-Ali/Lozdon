import sendRegisterEmail from "../mail/sendContactEmail";
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
        Name: formData.get("Name"),
        email: formData.get("email"),
        contact: formData.get("contact"),
        message: formData.get("message"),
        business: formData.get("business"),
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
