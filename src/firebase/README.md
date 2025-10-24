# Firebase Setup Guide

This guide will help you configure Firebase for the contact form.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard to create your project

## Step 2: Register Your Web App

1. In your Firebase project, click on the web icon (`</>`)
2. Register your app with a nickname (e.g., "EaseMilker Web")
3. Copy the Firebase configuration object

## Step 3: Update Firebase Configuration

Open `src/firebase/config.ts` and replace the placeholder values with your actual Firebase config:

```typescript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## Step 4: Enable Firestore Database

1. In Firebase Console, go to "Build" > "Firestore Database"
2. Click "Create database"
3. Choose "Start in production mode" (or test mode for development)
4. Select a Cloud Firestore location

## Step 5: Set Up Security Rules

In Firestore, go to the "Rules" tab and set up appropriate security rules:

### For Development (Allow writes):
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document=**} {
      allow write: if true;
      allow read: if false; // Only backend should read
    }
  }
}
```

### For Production (More secure):
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document=**} {
      allow create: if request.resource.data.keys().hasAll([
        'firstName', 'lastName', 'email', 'phoneNumber', 'message'
      ]);
      allow read: if false; // Only authenticated admins should read
    }
  }
}
```

## Step 6: Collection Structure

The contact form will create documents in the `contacts` collection with the following structure:

```typescript
{
  firstName: string,
  lastName: string,
  email: string,
  countryCode: string,
  phoneNumber: string,
  message: string,
  createdAt: Timestamp,
  status: 'new' | 'read' | 'resolved'
}
```

## Step 7: View Submitted Forms

To view submitted contact forms:
1. Go to Firebase Console
2. Navigate to "Firestore Database"
3. Look for the "contacts" collection
4. All form submissions will appear here

## Optional: Set Up Email Notifications

You can set up Cloud Functions to send email notifications when a new contact form is submitted. This requires:
1. Enabling Cloud Functions in Firebase
2. Setting up a trigger function for new documents in the `contacts` collection
3. Configuring an email service (SendGrid, Mailgun, etc.)

## Environment Variables (Optional)

For better security, you can use environment variables:

1. Create a `.env` file in your project root:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

2. Update `config.ts`:
```typescript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};
```

## Testing

After configuration:
1. Run your development server
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check Firebase Console to verify the data was saved

## Troubleshooting

- **CORS errors**: Make sure your domain is authorized in Firebase Console
- **Permission denied**: Check your Firestore security rules
- **Module not found**: Run `npm install firebase`
- **Build errors**: Make sure all Firebase config values are set
