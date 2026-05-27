"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

type JoinType =
  | "MAP"
  | "PAM"
  | "Singles and Married"
  | "Teenage Ministry"
  | "Church Department"
  | "Upcoming Program";

type JoinSheetProps = {
  type: JoinType;
  buttonText: string;
  programTitle?: string;
};

const departments = [
  "Choir",
  "Media",
  "Ushering",
  "Protocol",
  "Prayer",
  "Evangelism",
  "Children",
  "Welfare",
  "Sanitation",
];

const JoinSheet = ({ type, buttonText, programTitle }: JoinSheetProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phone: "",
    email: "",
    age: "",
    status: "",
    department: "",
    reason: "",
  });

  const updateField = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isPhoneValid = /^[+\d][\d\s()-]{7,20}$/.test(formData.phone.trim());

  const validateForm = () => {
    if (
      !formData.fullName.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim()
    ) {
      toast.error("Please fill in your full name, phone number and email.");
      return false;
    }

    if (!isEmailValid) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    if (!isPhoneValid) {
      toast.error("Please enter a valid phone number.");
      return false;
    }

    if (type === "MAP" && !formData.address.trim()) {
      toast.error("Please enter your address so we can connect you properly.");
      return false;
    }

    if (type === "PAM") {
      const age = Number(formData.age);
      const qualifiesByStatus =
        formData.status === "Parent" || formData.status === "Married";

      if (!formData.status || !formData.age) {
        toast.error("Please select your status and enter your age.");
        return false;
      }

      if (!qualifiesByStatus && age < 27) {
        toast.error("PAM is for parents, married people, or adults aged 27+.");
        return false;
      }
    }

    if (type === "Teenage Ministry") {
      const age = Number(formData.age);

      if (!formData.age) {
        toast.error("Please enter your age.");
        return false;
      }

      if (age < 13 || age > 19) {
        toast.error("Teenage Ministry is for teenagers between 13 and 19.");
        return false;
      }

      if (!formData.address.trim()) {
        toast.error("Please enter your address.");
        return false;
      }
    }

    if (type === "Church Department" && !formData.department) {
      toast.error("Please select a department.");
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (loading) return;
    if (!validateForm()) return;

    try {
      setLoading(true);

      const response = await fetch("/api/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type,
          programTitle,
          ...formData,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Something went wrong.");
        return;
      }

      toast.success("Your request has been submitted successfully.");

      setFormData({
        fullName: "",
        address: "",
        phone: "",
        email: "",
        age: "",
        status: "",
        department: "",
        reason: "",
      });

      setOpen(false);
    } catch (error) {
      console.log(error);
      toast.error("Unable to submit your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-500 ease-in-out duration-300 mt-8 rounded-full p-6 cursor-pointer">
          {buttonText}
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-full overflow-y-auto sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Join {programTitle || type}</SheetTitle>
          <SheetDescription>
            Fill in your details and our team will reach out to you.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-8 flex flex-col gap-5 px-4">
          <Input
            placeholder="Full name"
            value={formData.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
          />

          <Input
            type="tel"
            placeholder="Phone number"
            value={formData.phone}
            onChange={(e) => updateField("phone", e.target.value)}
          />

          <Input
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
          />

          {(type === "MAP" || type === "Teenage Ministry") && (
            <Input
              placeholder="Address"
              value={formData.address}
              onChange={(e) => updateField("address", e.target.value)}
            />
          )}

          {(type === "PAM" || type === "Teenage Ministry") && (
            <Input
              type="number"
              placeholder="Age"
              value={formData.age}
              onChange={(e) => updateField("age", e.target.value)}
              className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
          )}

          {type === "PAM" && (
            <select
              value={formData.status}
              onChange={(e) => updateField("status", e.target.value)}
              className="h-10 rounded-md border bg-background px-3 text-sm"
            >
              <option value="">Select status</option>
              <option value="Parent">Parent</option>
              <option value="Married">Married</option>
              <option value="27 years or above">27 years or above</option>
            </select>
          )}

          {type === "Church Department" && (
            <select
              value={formData.department}
              onChange={(e) => updateField("department", e.target.value)}
              className="h-10 rounded-md border bg-background px-3 text-sm"
            >
              <option value="">Select department</option>
              {departments.map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
            </select>
          )}

          <Textarea
            rows={5}
            placeholder="Briefly tell us why you would like to join"
            value={formData.reason}
            onChange={(e) => updateField("reason", e.target.value)}
          />

          <Button
            disabled={loading}
            onClick={handleSubmit}
            className="mt-2 rounded-full"
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default JoinSheet;
