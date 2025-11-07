# Order Email Notification - Quick Start

## ✅ What's Been Implemented

Your pop notification order form now:
1. ✅ Saves order details to Firebase Firestore (`orders` collection)
2. ✅ Sends email notification to you with order details
3. ✅ Shows confirmation to customer
4. ✅ Handles errors gracefully (order still saves if email fails)

## 🚀 Quick Setup (3 Minutes)

### 1. Sign up for EmailJS
- Go to https://www.emailjs.com/
- Create a free account (200 emails/month)

### 2. Set up Email Service
- Add Gmail (or your preferred email provider)
- Copy your **Service ID**

### 3. Create Email Template
- Create a new template with ID: `order_notification`
- Use template variables: `{{customer_name}}`, `{{customer_phone}}`, `{{order_date}}`
- Copy your **Template ID**

### 4. Update Configuration
Open `src/services/emailService.ts` and replace:

```typescript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';      // ← Replace
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';    // ← Replace
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';      // ← Replace

// And update recipient email:
to_email: 'your-email@example.com',                // ← Replace with YOUR email
```

### 5. Test It!
```bash
npm run dev
```
- Click "Place Order" button
- Fill in customer details
- Submit
- Check your email! 📧

## 📋 Email Template Example

```
Subject: 🛒 New Order Request from {{customer_name}}

You have received a new order request!

📋 Customer Name: {{customer_name}}
📞 Phone Number: {{customer_phone}}
📅 Order Date: {{order_date}}

Please contact the customer to complete the order.
```

## 🔧 Configuration Files

- `src/services/emailService.ts` - Email service configuration
- `src/screens/PopNotify/PopNotify.tsx` - Order form with email integration
- `src/firebase/orderApi.ts` - Firebase database operations
- `EMAILJS_SETUP.md` - Detailed setup guide

## 📊 How It Works

```
Customer fills form → Save to Firebase → Send Email → Show Confirmation
                           ✅              ✅            ✅
```

Even if email fails, the order is still saved to Firebase!

## 🆘 Troubleshooting

### ❌ Error: "The recipients address is empty"

**This is the most common issue!** Your EmailJS template needs to know WHERE to send the email.

**Quick Fix:**
1. Go to https://dashboard.emailjs.com/
2. Click **"Email Templates"** → Find `order_notification` → Click **Edit**
3. Look for **"To Email"** field in the template settings (not in the content)
4. Set it to: **`{{to_email}}`** (to use the dynamic variable)
   
   OR set it to: **`raghulpravee799@gmail.com`** (to hardcode your email)

5. Click **Save**
6. Test again!

**Your template settings should look like:**
```
┌──────────────────────────────────┐
│ Template Settings                │
├──────────────────────────────────┤
│ From Name: Your Name             │
│ From Email: your-email@...       │
│ To Email: {{to_email}}          │ ← THIS IS CRITICAL!
│ Subject: New Order from ...      │
└──────────────────────────────────┘
```

### ❌ Error: "Template ID not found"

**Fix:**
- Double-check Template ID in EmailJS dashboard matches exactly: `order_notification`
- Make sure template is **saved** (not draft)

### ❌ Error: "Service ID not found"

**Fix:**
- Double-check Service ID in EmailJS dashboard
- Make sure email service is **connected** (green checkmark)
- Verify the service is active

### ❌ No errors but email not received

**Check these:**
1. **Spam/Junk folder** - Most common issue!
2. **EmailJS Dashboard → Email Logs** - Check if email was sent
3. **Template "To Email" field** - Must be set to `{{to_email}}` or your email
4. **Email service connection** - Reconnect if needed

### 🔍 Debug Steps

**Step 1: Check Browser Console**
1. Open browser console (F12)
2. Place an order
3. Look for these logs:
   ```
   🔵 Starting email notification process...
   📧 Order data: {...}
   📨 Template params: {...}
   ```
4. If you see ✅ "Email sent successfully" → Check spam folder
5. If you see ❌ error → Note the error message

**Step 2: Test with HTML Test Page**
1. Open `test-email.html` in your browser (located in project root)
2. Click "Send Test Email"
3. Check the result - this helps isolate the issue

**Step 3: Verify EmailJS Configuration**
- Service ID: `service_wn62g4r`
- Template ID: `order_notification`
- Public Key: `GS3jIP8s6b5pdjY_L`
- Make sure all match exactly in your EmailJS dashboard

**Step 4: Check Template Variables**
Your template MUST use these exact variable names:
- `{{customer_name}}` (NOT `{{customerName}}`)
- `{{customer_phone}}` (NOT `{{phoneNumber}}`)
- `{{order_date}}`
- `{{to_email}}`

### 📧 For Gmail Users

If using Gmail:
1. Enable "Less secure app access" or use App Passwords
2. Make sure 2-factor authentication is enabled
3. Use [App Passwords](https://support.google.com/accounts/answer/185833) for better security

### 🔄 Still Not Working?

1. **Check EmailJS Dashboard Logs:**
   - Go to https://dashboard.emailjs.com/
   - Click "Email Logs" in sidebar
   - Look for recent attempts
   - Check status (green = success, red = failed)

2. **Reconnect Email Service:**
   - Go to Email Services
   - Click on your service
   - Disconnect and reconnect
   - Make sure it shows "Connected" with green checkmark

3. **Test Direct API Call:**
   Open browser console and run:
   ```javascript
   emailjs.send(
     'service_wn62g4r',
     'order_notification',
     {
       customer_name: 'Test',
       customer_phone: '1234567890',
       order_date: new Date().toLocaleString(),
       to_email: 'raghulpravee799@gmail.com'
     },
     'GS3jIP8s6b5pdjY_L'
   ).then(
     r => console.log('✅ Success:', r),
     e => console.log('❌ Error:', e)
   );
   ```

### ✅ Success Checklist

- [ ] EmailJS account created
- [ ] Email service connected (green checkmark)
- [ ] Template created with ID: `order_notification`
- [ ] Template **"To Email"** field set to `{{to_email}}`
- [ ] Template uses correct variable names
- [ ] Service ID, Template ID, Public Key are correct
- [ ] Browser console shows no errors
- [ ] Checked spam/junk folder
- [ ] EmailJS logs show sent emails

For more detailed instructions, see `EMAILJS_SETUP.md`

## 📈 Next Steps (Optional)

Want more advanced email features?
- Set up Firebase Cloud Functions for server-side emails
- Use SendGrid or Mailgun for better deliverability
- Add email templates for different order types
- Send confirmation emails to customers

---

**Current Status**: ✅ Email notifications ready (just needs EmailJS configuration)
