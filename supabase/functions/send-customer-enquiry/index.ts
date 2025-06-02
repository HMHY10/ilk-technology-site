
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.49.8';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface CustomerEnquiry {
  name: string;
  email: string;
  company: string;
  phone: string;
  serviceType: string;
  projectDetails: string;
  source: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    );

    const enquiry: CustomerEnquiry = await req.json();
    
    // Store in database
    const { error: dbError } = await supabase
      .from('customer_enquiries')
      .insert([{
        name: enquiry.name,
        email: enquiry.email,
        company: enquiry.company,
        phone: enquiry.phone,
        service_type: enquiry.serviceType,
        project_details: enquiry.projectDetails,
        source: enquiry.source
      }]);

    if (dbError) {
      console.error('Database error:', dbError);
    }

    // Format the current date
    const currentDate = new Date().toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

    const currentDateTime = new Date().toLocaleString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: "ILK Technology Website <onboarding@resend.dev>",
      to: ["sales@ilktechnology.com"],
      subject: `Customer Enquiry ${enquiry.name} - ${currentDate}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
            Customer Enquiry
          </h2>
          
          <p style="color: #666; font-size: 16px;">
            Dear ILK Technology Team,
          </p>
          
          <p style="color: #666; font-size: 16px;">
            You have received a new customer enquiry through your website.
          </p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0066cc; margin-top: 0;">CUSTOMER DETAILS:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #333; font-weight: bold; width: 120px;">Name:</td>
                <td style="padding: 8px 0; color: #666;">${enquiry.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #333; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0; color: #666;">${enquiry.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #333; font-weight: bold;">Company:</td>
                <td style="padding: 8px 0; color: #666;">${enquiry.company}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #333; font-weight: bold;">Phone:</td>
                <td style="padding: 8px 0; color: #666;">${enquiry.phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #333; font-weight: bold;">Service Type:</td>
                <td style="padding: 8px 0; color: #666;">${enquiry.serviceType}</td>
              </tr>
            </table>
          </div>
          
          <div style="background-color: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0066cc; margin-top: 0;">PROJECT DETAILS:</h3>
            <p style="color: #666; line-height: 1.6; margin: 0;">${enquiry.projectDetails}</p>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0066cc; margin-top: 0;">SUBMISSION INFO:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 5px 0; color: #333; font-weight: bold; width: 120px;">Submitted:</td>
                <td style="padding: 5px 0; color: #666;">${currentDateTime}</td>
              </tr>
              <tr>
                <td style="padding: 5px 0; color: #333; font-weight: bold;">Source:</td>
                <td style="padding: 5px 0; color: #666;">${enquiry.source}</td>
              </tr>
            </table>
          </div>
          
          <p style="color: #666; font-size: 16px; margin-top: 30px;">
            Best regards,<br>
            <strong>ILK Technology Website System</strong>
          </p>
        </div>
      `,
    });

    console.log('Email sent successfully:', emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-customer-enquiry function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
