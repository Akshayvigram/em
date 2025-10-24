import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from './config';

// Define the type for contact form data
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  message: string;
}

// Function to submit contact form data to Firebase
export const submitContactForm = async (formData: ContactFormData) => {
  try {
    // Add document to 'contacts' collection
    const docRef = await addDoc(collection(db, 'contacts'), {
      ...formData,
      createdAt: Timestamp.now(),
      status: 'new' // You can use this to track which messages have been read
    });

    console.log('Document written with ID: ', docRef.id);
    return {
      success: true,
      id: docRef.id,
      message: 'Your message has been sent successfully!'
    };
  } catch (error) {
    console.error('Error adding document: ', error);
    return {
      success: false,
      error: error,
      message: 'Failed to send message. Please try again.'
    };
  }
};

// Optional: Function to get all contacts (for admin use)
export const getAllContacts = async () => {
  try {
    const { getDocs, query, orderBy } = await import('firebase/firestore');
    const contactsRef = collection(db, 'contacts');
    const q = query(contactsRef, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    
    const contacts: any[] = [];
    querySnapshot.forEach((doc) => {
      contacts.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return contacts;
  } catch (error) {
    console.error('Error getting documents: ', error);
    return [];
  }
};
