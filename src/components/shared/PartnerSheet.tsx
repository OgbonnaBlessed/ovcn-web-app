"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function PartnerSheet() {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      partnershipType: formData.get("partnershipType"),
      message: formData.get("message"),
    };

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/partner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Something went wrong.");
        return;
      }

      toast.success(data.message || "Partnership request sent successfully.");
      form.reset();
      setOpen(false);
    } catch {
      toast.error("Unable to send request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="rounded-full bg-blue-700 px-7 py-6 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-blue-700 hover:scale-[1.02] hover:opacity-95 cursor-pointer">
          Become a Partner
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-full overflow-y-auto sm:max-w-md">
        <SheetHeader className="text-left">
          <SheetTitle className="text-2xl">Become a Partner</SheetTitle>
          <SheetDescription>
            Fill in your details and our team will receive your partnership
            request.
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="mt-2 space-y-5 px-4">
          <Input name="firstname" placeholder="First name" required />
          <Input name="lastname" placeholder="Last name" required />

          <Input
            name="email"
            type="email"
            placeholder="Email address"
            required
          />

          <Input
            name="phone"
            placeholder="Phone number e.g. +2348012345678"
            required
          />

          <select
            name="partnershipType"
            required
            className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Select partnership type</option>
            <option value="Financial Partnership">Financial Partnership</option>
            <option value="Project Support">Project Support</option>
            <option value="Outreach Support">Outreach Support</option>
            <option value="Prayer Partnership">Prayer Partnership</option>
            <option value="General Partnership">General Partnership</option>
          </select>

          <Textarea
            name="message"
            placeholder="Tell us briefly how you would love to partner."
            className="min-h-32"
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-blue-700 px-7 py-6 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-blue-700 hover:scale-[1.02] hover:opacity-95 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 size-4 animate-spin" />
                Sending request...
              </>
            ) : (
              "Submit Partnership Request"
            )}
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
}
