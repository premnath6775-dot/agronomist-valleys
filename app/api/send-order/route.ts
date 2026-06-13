import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the provided API key
const resend = new Resend('re_WiY15Qw6_MJfD6ekzFnU8tx4pt5Jj3pmq');

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, date, address, comments, items } = data;

    // Convert items object to an HTML list of rows
    const itemsHtml = Object.entries(items).map(([item, qty]) => `
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #333; color: #fff;">${item}</td>
        <td style="padding: 12px; border-bottom: 1px solid #333; color: #bef264; font-weight: bold; text-align: right;">${qty} KG</td>
      </tr>
    `).join('');

    // Construct the beautiful HTML template
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Order Request</title>
        <style>
          body { margin: 0; padding: 0; background-color: #000; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #ffffff; }
          .container { max-width: 600px; margin: 0 auto; background-color: #050505; border: 1px solid #222; }
          .header-image { width: 100%; height: 250px; object-fit: cover; }
          .content { padding: 40px; }
          .title { color: #bef264; font-size: 32px; font-weight: 900; text-transform: uppercase; margin-top: 0; margin-bottom: 30px; letter-spacing: -1px; }
          .section-title { color: #bef264; font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px; margin-top: 30px; border-bottom: 1px solid #222; padding-bottom: 10px; }
          .details-table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
          .details-table td { padding: 10px 0; color: #aaa; font-size: 16px; }
          .details-table td strong { color: #fff; display: inline-block; width: 140px; }
          .items-table { width: 100%; border-collapse: collapse; background-color: #111; border-radius: 8px; overflow: hidden; }
          .items-table th { background-color: #bef264; color: #000; padding: 15px; text-align: left; text-transform: uppercase; font-size: 12px; letter-spacing: 1px; }
          .items-table th.right { text-align: right; }
          .footer { margin-top: 50px; padding-top: 20px; border-top: 1px solid #222; text-align: center; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <!-- Vegetable Header Image -->
          <img src="https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Fresh Vegetables" class="header-image" />
          
          <div class="content">
            <h1 class="title">New Order Request</h1>
            
            <p style="font-size: 18px; line-height: 1.6; color: #ddd;">
              A new trade request has been submitted. Details are below.
            </p>

            <h2 class="section-title">Client Details</h2>
            <table class="details-table">
              <tr><td><strong>Company / Name:</strong></td><td>${name || 'Not provided'}</td></tr>
              <tr><td><strong>Email:</strong></td><td>${email || 'Not provided'}</td></tr>
              <tr><td><strong>Phone:</strong></td><td>${phone || 'Not provided'}</td></tr>
              <tr><td><strong>Delivery Date:</strong></td><td>${date || 'Not provided'}</td></tr>
              <tr><td><strong>Delivery Address:</strong></td><td>${address || 'Not provided'}</td></tr>
            </table>

            ${comments ? `
              <h2 class="section-title">Additional Comments</h2>
              <p style="color: #ccc; font-style: italic; background: #111; padding: 20px; border-left: 4px solid #bef264; margin-top: 0;">"${comments}"</p>
            ` : ''}

            <h2 class="section-title">Requested Items</h2>
            <table class="items-table">
              <thead>
                <tr>
                  <th>Produce</th>
                  <th class="right">Quantity</th>
                </tr>
              </thead>
              <tbody>
                ${itemsHtml}
              </tbody>
            </table>

            <div class="footer">
              <p>Sent via Agronomist Valley's automated system.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email using Resend
    const resendResponse = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'premnath.6775@gmail.com',
      subject: `Order Request - ${name || 'New Client'} 🥬`,
      html: htmlTemplate
    });

    if (resendResponse.error) {
      console.error("Resend error:", resendResponse.error);
      return NextResponse.json({ success: false, error: resendResponse.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, id: resendResponse.data?.id });
  } catch (error: any) {
    console.error("Server error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
