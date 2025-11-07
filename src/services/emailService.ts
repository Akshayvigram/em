import emailjs from '@emailjs/browser';

// EmailJS Configuration
// You need to replace these with your actual EmailJS credentials
// Get them from: https://www.emailjs.com/
const EMAILJS_SERVICE_ID = 'service_wn62g4r'; // Replace with your EmailJS Service ID
const EMAILJS_TEMPLATE_ID = 'order_notification'; // Replace with your EmailJS Template ID
const EMAILJS_PUBLIC_KEY = 'GS3jIP8s6b5pdjY_L'; // Replace with your EmailJS Public Key

export interface OrderEmailData {
  customerName: string;
  phoneNumber: string;
  orderDate?: string;
}

/**
 * Send email notification when a new order is placed
 * @param orderData - Order details to send via email
 * @returns Promise with success status and message
 */
export const sendOrderEmailNotification = async (orderData: OrderEmailData) => {
  try {
    console.log('🔵 Starting email notification process...');
    console.log('📧 Order data:', orderData);
    console.log('🔑 EmailJS Config:', {
      serviceId: EMAILJS_SERVICE_ID,
      templateId: EMAILJS_TEMPLATE_ID,
      publicKey: EMAILJS_PUBLIC_KEY ? '***configured***' : 'MISSING'
    });

    // Prepare email parameters
    const templateParams = {
      customer_name: orderData.customerName,
      customer_phone: orderData.phoneNumber,
      order_date: orderData.orderDate || new Date().toLocaleString(),
      to_email: 'raghulpravee799@gmail.com', // Replace with your email address
    };

    console.log('📨 Template params:', templateParams);

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('✅ Email sent successfully:', response);
    return {
      success: true,
      message: 'Order placed and email notification sent successfully',
      emailSent: true,
      response
    };
  } catch (error: any) {
    console.error('❌ Failed to send email notification:', error);
    console.error('❌ Error details:', {
      message: error.message,
      text: error.text,
      status: error.status
    });
    // Don't fail the order if email fails
    return {
      success: true, // Order is still saved to Firebase
      message: 'Order placed successfully (email notification failed)',
      emailSent: false,
      error
    };
  }
};

/**
 * Initialize EmailJS (optional, can be called on app startup)
 */
export const initializeEmailJS = () => {
  try {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    console.log('EmailJS initialized');
  } catch (error) {
    console.error('Failed to initialize EmailJS:', error);
  }
};
