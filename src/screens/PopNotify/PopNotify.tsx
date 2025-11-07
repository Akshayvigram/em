import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../../components/ui/dialog";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogAction,
} from "../../components/ui/alert-dialog";
import { submitOrderForm, OrderFormData } from "../../firebase/orderApi";
import { sendOrderEmailNotification } from "../../services/emailService";

interface PopNotifyProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PopNotify = ({ isOpen, onOpenChange }: PopNotifyProps): JSX.Element => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string>("");

  const handlePlaceOrder = async () => {
    // Validate inputs
    if (!customerName.trim() || !phoneNumber.trim()) {
      setSubmitError("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const orderData: OrderFormData = {
        customerName: customerName.trim(),
        phoneNumber: phoneNumber.trim(),
      };

      // Save to Firebase
      const result = await submitOrderForm(orderData);

      if (result.success) {
        // Send email notification (runs in parallel, doesn't block success)
        console.log('🔵 Attempting to send email notification...');
        sendOrderEmailNotification({
          customerName: orderData.customerName,
          phoneNumber: orderData.phoneNumber,
          orderDate: new Date().toLocaleString()
        }).then((emailResult) => {
          if (emailResult.emailSent) {
            console.log('✅ Email notification sent successfully');
          } else {
            console.warn('⚠️ Email notification skipped or failed:', emailResult);
          }
        }).catch((err) => {
          console.error('❌ Email notification error:', err);
        });

        // Close the order dialog
        onOpenChange(false);
        // Open the confirmation dialog
        setIsConfirmationOpen(true);
        // Reset form fields
        setCustomerName("");
        setPhoneNumber("");
      } else {
        setSubmitError(result.message);
      }
    } catch (error) {
      setSubmitError("An unexpected error occurred. Please try again.");
      console.error("Order submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Order Form Dialog */}
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[600px] w-[600px] p-8">
          <DialogHeader>
            <DialogTitle className="[font-family:'Mochiy_Pop_P_One',Helvetica] text-[#032a4a] text-2xl mb-2">
              Place Your Order
            </DialogTitle>
            <DialogDescription className="[font-family:'Inter',Helvetica] pt-3 text-base">
              Please provide your details and we'll contact you to complete the order.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            {submitError && (
              <div className="p-3 rounded-lg bg-red-100 text-red-700 border border-red-300 text-sm">
                {submitError}
              </div>
            )}
            <div className="grid gap-3">
              <label htmlFor="name" className="[font-family:'Mochiy_Pop_P_One',Helvetica] font-normal text-[#4e4d4d] text-base">
                Your Name
              </label>
              <Input
                id="name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter your name"
                className="[font-family:'Inter',Helvetica] h-12 text-base"
                required
              />
            </div>
            <div className="grid gap-3">
              <label htmlFor="phone" className="[font-family:'Mochiy_Pop_P_One',Helvetica] font-normal text-[#4e4d4d] text-base">
                Phone Number
              </label>
              <Input
                id="phone"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number"
                className="[font-family:'Inter',Helvetica] h-12 text-base"
                required
              />
            </div>
          </div>
          <Button 
            onClick={handlePlaceOrder}
            disabled={isSubmitting}
            className="w-full h-12 bg-[#042a4b] hover:bg-[#053a5f] [font-family:'Mochiy_Pop_P_One',Helvetica] font-normal text-white text-base disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Place Order"}
          </Button>
        </DialogContent>
      </Dialog>

      {/* Confirmation Alert Dialog */}
      <AlertDialog open={isConfirmationOpen} onOpenChange={setIsConfirmationOpen}>
        <AlertDialogContent className="sm:max-w-[600px] w-[600px] p-8">
          <AlertDialogHeader>
            <AlertDialogTitle className="[font-family:'Mochiy_Pop_P_One',Helvetica] text-[#032a4a] text-2xl mb-2">
             ✅ Request Received
            </AlertDialogTitle>
          </AlertDialogHeader>
          <ul className="[font-family:'Inter',Helvetica] text-[#4e4d4d] mt-4 list-disc pl-6 space-y-3 text-base">
            <li className="leading-7">
              Our team will contact you soon for payment options and other details.
            </li>
            <li className="leading-7">
              For any immediate questions, please call us at +91 9750603988.
            </li>
          </ul>
          <AlertDialogFooter className="mt-6">
            <AlertDialogAction 
              onClick={() => setIsConfirmationOpen(false)}
              className="h-12 px-8 bg-[#042a4b] hover:bg-[#053a5f] [font-family:'Mochiy_Pop_P_One',Helvetica] font-normal text-white text-base"
            >
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
