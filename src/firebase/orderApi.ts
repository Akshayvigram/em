import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from './config';

// Define the type for order form data
export interface OrderFormData {
  customerName: string;
  phoneNumber: string;
}

// Function to submit order data to Firebase
export const submitOrderForm = async (formData: OrderFormData) => {
  try {
    // Add document to 'orders' collection
    const docRef = await addDoc(collection(db, 'orders'), {
      ...formData,
      createdAt: Timestamp.now(),
      status: 'new' // You can use this to track order status
    });

    console.log('Order document written with ID: ', docRef.id);
    return {
      success: true,
      id: docRef.id,
      message: 'Your order request has been submitted successfully!'
    };
  } catch (error) {
    console.error('Error adding order document: ', error);
    return {
      success: false,
      error: error,
      message: 'Failed to submit order. Please try again.'
    };
  }
};

// Optional: Function to get all orders (for admin use)
export const getAllOrders = async () => {
  try {
    const { getDocs, query, orderBy } = await import('firebase/firestore');
    const ordersRef = collection(db, 'orders');
    const q = query(ordersRef, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    
    const orders: any[] = [];
    querySnapshot.forEach((doc) => {
      orders.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return orders;
  } catch (error) {
    console.error('Error getting order documents: ', error);
    return [];
  }
};
