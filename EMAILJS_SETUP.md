# EmailJS Setup Guide for Order Notifications

This guide will help you set up email notifications for pop notification orders using EmailJS.

## Why EmailJS?

EmailJS allows you to send emails directly from your client-side JavaScript application without needing a backend server. It's perfect for sending order notifications.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click **"Sign Up"** and create a free account
3. Verify your email address

## Step 2: Add an Email Service

1. In your EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (Recommended for testing)
   - Outlook
   - Yahoo
   - Or use a custom SMTP service
4. Follow the connection steps for your chosen provider
5. **Important**: Copy your **Service ID** (you'll need this later)

### For Gmail:
- Allow less secure app access or use App Passwords
- You may need to enable "Allow less secure apps" in your Google Account settings

## Step 3: Create an Email Template

1. In your EmailJS dashboard, click **"Email Templates"**
2. Click **"Create New Template"**
3. Set up your template with the following content:

### Template Name:
```
order_notification
```

### Template Content:
```
Subject: 🛒 New Order Request from {{customer_name}}

Hello,

You have received a new order request through your website!

Order Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 Customer Name: {{customer_name}}
📞 Phone Number: {{customer_phone}}
📅 Order Date: {{order_date}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━

Please contact the customer as soon as possible to complete the order.

---
This is an automated notification from your EaseMilker website.
```

4. Click **"Save"**
5. **Important**: Copy your **Template ID** (shown at the top of the template editor)

## Step 4: Get Your Public Key

1. In your EmailJS dashboard, click on your account name (top right)
2. Select **"Account"**
3. Go to the **"General"** tab
4. Find your **Public Key** (also called API Key)
5. Copy this key

## Step 5: Configure Your Application

Open `src/services/emailService.ts` and update the configuration:

```typescript
const EMAILJS_SERVICE_ID = 'service_xxxxxxx'; // Your Service ID from Step 2
const EMAILJS_TEMPLATE_ID = 'template_xxxxxxx'; // Your Template ID from Step 3
const EMAILJS_PUBLIC_KEY = 'your_public_key_here'; // Your Public Key from Step 4
```

Also update the recipient email:

```typescript
const templateParams = {
  customer_name: orderData.customerName,
  customer_phone: orderData.phoneNumber,
  order_date: orderData.orderDate || new Date().toLocaleString(),
  to_email: 'your-email@example.com', // ← Replace with YOUR email address
};
```

## Step 6: Test the Email Notification

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to your website
3. Click on the "Place Order" button
4. Fill in the customer details
5. Submit the order
6. Check your email inbox for the notification

## Template Variables Available

You can use these variables in your EmailJS template:

- `{{customer_name}}` - The customer's name
- `{{customer_phone}}` - The customer's phone number
- `{{order_date}}` - When the order was placed
- `{{to_email}}` - Recipient email address

## Free Tier Limits

EmailJS free tier includes:
- ✅ 200 emails per month
- ✅ Unlimited email services
- ✅ Unlimited email templates
- ✅ No credit card required

For more emails, check their [pricing page](https://www.emailjs.com/pricing/).

## Troubleshooting

### Emails Not Sending?

1. **Check Browser Console**: Look for error messages
2. **Verify Credentials**: Make sure Service ID, Template ID, and Public Key are correct
3. **Check Email Service**: Ensure your email service is connected properly in EmailJS dashboard
4. **Spam Folder**: Check if emails are going to spam
5. **Rate Limits**: Ensure you haven't exceeded the 200 emails/month free limit

### Gmail Issues?

If using Gmail:
1. Enable "Less secure app access" in your Google Account
2. Or better: Use [App Passwords](https://support.google.com/accounts/answer/185833)
3. Make sure 2-factor authentication is enabled if using App Passwords

### Still Not Working?

- Check EmailJS dashboard logs for error messages
- Make sure your EmailJS template uses the correct variable names
- Verify that your website domain is allowed (EmailJS auto-detects this)

## Alternative: Firebase Cloud Functions

If you need more control or security, consider using Firebase Cloud Functions instead:

1. Upgrade to Firebase Blaze plan (pay-as-you-go)
2. Set up Cloud Functions
3. Use Nodemailer or SendGrid
4. Store email credentials securely in Firebase environment config

See Firebase documentation for more details: [Firebase Cloud Functions](https://firebase.google.com/docs/functions)

## Security Note

⚠️ **Important**: EmailJS public key is safe to expose in client-side code. However, for sensitive applications, consider using Firebase Cloud Functions with server-side email handling.

## Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

---

## Summary

✅ You've set up email notifications for order requests!

When a customer places an order:
1. ✅ Details are saved to Firebase
2. ✅ You receive an email notification
3. ✅ Customer sees a confirmation message

You can now respond to orders quickly! 🎉
