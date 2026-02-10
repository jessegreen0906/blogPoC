import { NextResponse } from "next/server";
import { isValidEmail, normalizeEmail } from "@/lib/email";
import { saveSubscriptionEmail } from "@/lib/subscription-store";

type SubscriptionRequestBody = {
  email?: string;
};

export async function POST(request: Request) {
  let body: SubscriptionRequestBody;

  try {
    body = (await request.json()) as SubscriptionRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const normalizedEmail = normalizeEmail(body.email ?? "");

  if (!isValidEmail(normalizedEmail)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  try {
    await saveSubscriptionEmail(normalizedEmail);
  } catch (error) {
    console.error("Failed to save subscription email", error);
    return NextResponse.json(
      {
        error:
          "Unable to save subscription. Please check datastore configuration and permissions.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
