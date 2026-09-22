interface ContactRequest {
  name?: string;
  email?: string;
  message?: string;
}

const recipient = 'ssingh.cs23@gmail.com';

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return Response.json({ error: 'Method not allowed' }, { status: 405 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ error: 'Email service is not configured' }, { status: 500 });
  }

  let data: ContactRequest;
  try {
    data = await request.json() as ContactRequest;
  } catch {
    return Response.json({ error: 'Invalid request' }, { status: 400 });
  }

  const name = data.name?.trim();
  const email = data.email?.trim();
  const message = data.message?.trim();

  if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Please provide a valid name, email, and message' }, { status: 400 });
  }

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'Portfolio contact <onboarding@resend.dev>',
      to: [recipient],
      reply_to: email,
      subject: `Portfolio inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`
    })
  });

  if (!resendResponse.ok) {
    return Response.json({ error: 'Unable to deliver the message' }, { status: 502 });
  }

  return Response.json({ success: true });
}