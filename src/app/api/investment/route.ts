import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      fullName,
      dob,
      gender,
      nationality,
      contact,
      email,
      address,
      investmentType,
      amount,
      investmentDate,
      nextOfKin,
      idType,
      idNumber,
    } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: "Investment Interest",
      text: `Hello Global George Investment Limited, I am interested in investing with you. These are my information:

        Name: ${fullName}
        Email Address: ${email}
        Date Of Birth: ${dob}
        Gender: ${gender}
        Nationality: ${nationality}
        Phone Number: ${contact}
        Address: ${address}
        Investment Type: ${investmentType}
        Amount to Invest: ₦${amount}
        Date of Investment: ${investmentDate}
        Identification Type: ${idType}
        Identification Number: ${idNumber}

        NEXT OF KIN INFORMATION

        Name: ${nextOfKin.fullName}
        Email Address: ${nextOfKin.email}
        Date Of Birth: ${nextOfKin.dob}
        Gender: ${nextOfKin.gender}
        Nationality: ${nextOfKin.nationality}
        Phone Number: ${nextOfKin.contact}
        Address: ${nextOfKin.address}
        Relationship To Investor: ${nextOfKin.relationshipToInvestor}
        Bank Name: ${nextOfKin.bankName}
        Account Number: ${nextOfKin.accountNumber}
        Identification Type: ${nextOfKin.idType}
        Identification Number: ${nextOfKin.idNumber}

      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Internal Server Error. Email not sent." },
      { status: 500 },
    );
  }
}
