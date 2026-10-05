import { NextResponse } from "next/server";

export interface ContactFormData {
  fullName: string;
  email: string;
  inquiryType: string;
  subject: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();
    const { fullName, email, inquiryType, subject, message } = body;

    // Validate required fields
    if (!fullName || !email || !inquiryType || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const apiGatewayUrl = process.env.AWS_API_GATEWAY_CONTACT_URL;
    const apiKey = process.env.AWS_API_GATEWAY_KEY;

    // If API Gateway URL is configured, forward the request
    if (apiGatewayUrl) {
      const response = await fetch(apiGatewayUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(apiKey ? { "x-api-key": apiKey } : {}),
        },
        body: JSON.stringify({
          fullName,
          email,
          inquiryType,
          subject,
          message,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => null);
        throw new Error(
          errData?.message || errData?.error || `API Gateway error: ${response.statusText}`
        );
      }
    } else {
      // Mock / Log during development before the API Gateway endpoint is provisioned
      console.log("[DEV MODE] Contact form received (AWS_API_GATEWAY_CONTACT_URL not set yet):", {
        fullName,
        email,
        inquiryType,
        subject,
        message,
        submittedAt: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received successfully!",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error processing contact form submission:", error);
    const message =
      error instanceof Error ? error.message : "Failed to send message. Please try again later.";
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
