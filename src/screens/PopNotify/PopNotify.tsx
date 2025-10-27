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

interface PopNotifyProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PopNotify = ({ isOpen, onOpenChange }: PopNotifyProps): JSX.Element => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePlaceOrder = () => {
    // Close the order dialog
    onOpenChange(false);
    // Open the confirmation dialog
    setIsConfirmationOpen(true);
    // Reset form fields
    setCustomerName("");
    setPhoneNumber("");
  };

  return (
    <>
      {/* Order Form Dialog */}
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[425px] w-[425px]">
          <DialogHeader>
            <DialogTitle className="[font-family:'Mochiy_Pop_P_One',Helvetica] text-[#032a4a]">
              Place Your Order
            </DialogTitle>
            <DialogDescription className="[font-family:'Inter',Helvetica] pt-3">
              Please provide your details and we'll contact you to complete the order.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-0">
            <div className="grid gap-2">
              <label htmlFor="name" className="[font-family:'Mochiy_Pop_P_One',Helvetica] font-normal text-[#4e4d4d] text-sm">
                Customer Name
              </label>
              <Input
                id="name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter your name"
                className="[font-family:'Inter',Helvetica]"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="phone" className="[font-family:'Mochiy_Pop_P_One',Helvetica] font-normal text-[#4e4d4d] text-sm">
                Phone Number
              </label>
              <Input
                id="phone"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number"
                className="[font-family:'Inter',Helvetica]"
              />
            </div>
          </div>
          <Button 
            onClick={handlePlaceOrder}
            className="w-full bg-[#042a4b] hover:bg-[#053a5f] [font-family:'Mochiy_Pop_P_One',Helvetica] font-normal text-white"
          >
            Place Order
          </Button>
        </DialogContent>
      </Dialog>

      {/* Confirmation Alert Dialog */}
      <AlertDialog open={isConfirmationOpen} onOpenChange={setIsConfirmationOpen}>
        <AlertDialogContent className="sm:max-w-[425px] w-[425px]">
          <AlertDialogHeader>
            <AlertDialogTitle className="[font-family:'Mochiy_Pop_P_One',Helvetica] text-[#032a4a]">
              Request Received
            </AlertDialogTitle>
          </AlertDialogHeader>
          <ul className="[font-family:'Inter',Helvetica] text-[#4e4d4d] mt-3 list-disc pl-5 space-y-2 text-lm">
            <li className="leading-6">
              Our team will contact you soon for payment options and other details.
            </li>
            <li className="leading-6">
              For any immediate questions, please call us at +91 8190962836.
            </li>
          </ul>
          <AlertDialogFooter>
            <AlertDialogAction 
              onClick={() => setIsConfirmationOpen(false)}
              className="bg-[#042a4b] hover:bg-[#053a5f] [font-family:'Mochiy_Pop_P_One',Helvetica] font-normal text-white"
            >
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
