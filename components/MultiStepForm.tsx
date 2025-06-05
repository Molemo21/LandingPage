"use client";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useRouter } from "next/navigation";

// Sample categories and services
const categories = [
  { label: "Electrical", value: "electrical", services: ["Wiring", "Lighting", "Repairs"] },
  { label: "Plumbing", value: "plumbing", services: ["Leak Fix", "Installations", "Unclogging"] },
  { label: "Home cleaning", value: "cleaning", services: ["Deep Clean", "Regular Clean", "Move-out Clean"] },
  { label: "Painting", value: "painting", services: ["Interior", "Exterior", "Touch-up"] },
  { label: "Gardening", value: "gardening", services: ["Lawn Care", "Landscaping", "Tree Trimming"] },
  { label: "Hair", value: "hair", services: ["Cut", "Style", "Color"] },
  { label: "Spa", value: "spa", services: ["Massage", "Facial", "Manicure"] },
];

type FormDataType = {
  category: string;
  service: string;
  description: string;
  address: string;
  date: Date | null;
  time: string;
  image: File | null;
};

const defaultValues: FormDataType = {
  category: "",
  service: "",
  description: "",
  address: "",
  date: null,
  time: "",
  image: null,
};

function isAuthenticated() {
  // Placeholder: Replace with your actual auth logic
  return false;
}

export function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [formData, setFormData] = useState<FormDataType>(defaultValues);
  const methods = useForm({ defaultValues });
  const router = useRouter();

  // Step navigation
  const nextStep = () => setStep((s) => Math.min(s + 1, 5));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  // Handlers
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setSelectedService("");
    setFormData((prev) => ({ ...prev, category: e.target.value, service: "" }));
  };
  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(e.target.value);
    setFormData((prev) => ({ ...prev, service: e.target.value }));
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleDateChange = (date: Date | undefined) => {
    setSelectedDate(date ?? null);
    setFormData((prev) => ({ ...prev, date: date ?? null }));
  };
  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, time: e.target.value }));
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedImage(file);
    setFormData((prev) => ({ ...prev, image: file }));
  };

  // Step content
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4 w-full max-w-xs">
            <div>
              <label className="block mb-1 font-medium">Category</label>
              <select
                className="w-full rounded-md border px-3 py-2 bg-background"
                value={selectedCategory}
                onChange={handleCategoryChange}
                name="category"
                required
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium">Service</label>
              <select
                className="w-full rounded-md border px-3 py-2 bg-background"
                value={selectedService}
                onChange={handleServiceChange}
                name="service"
                required
                disabled={!selectedCategory}
              >
                <option value="">{selectedCategory ? "Select a service" : "Select category first"}</option>
                {categories.find((cat) => cat.value === selectedCategory)?.services.map((srv) => (
                  <option key={srv} value={srv}>{srv}</option>
                ))}
              </select>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4 w-full max-w-xs">
            <label className="block mb-1 font-medium">Job Description</label>
            <textarea
              className="w-full rounded-md border px-3 py-2 bg-background min-h-[100px]"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe what you need..."
              required
            />
          </div>
        );
      case 3:
        return (
          <div className="space-y-4 w-full max-w-xs">
            <div>
              <label className="block mb-1 font-medium">Address</label>
              <Input
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter address"
                required
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block mb-1 font-medium">Date</label>
                <Input
                  type="date"
                  name="date"
                  value={formData.date ? (typeof formData.date === 'string' ? formData.date : formData.date.toISOString().split('T')[0]) : ''}
                  onChange={e => {
                    const date = e.target.value ? new Date(e.target.value) : null;
                    setSelectedDate(date);
                    setFormData(prev => ({ ...prev, date }));
                  }}
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block mb-1 font-medium">Time</label>
                <Input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleTimeChange}
                  required
                />
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4 w-full max-w-xs">
            <label className="block mb-1 font-medium">Upload Image (optional)</label>
            <Input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleImageChange}
            />
            {selectedImage && (
              <div className="mt-2 text-sm text-muted-foreground">Selected: {selectedImage.name}</div>
            )}
          </div>
        );
      case 5:
        if (!isAuthenticated()) {
          return (
            <div className="space-y-4 text-center w-full max-w-xs">
              <div className="text-lg font-semibold">You need an account to book a service.</div>
              <div className="flex gap-4 justify-center">
                <Button onClick={() => router.push("/login?redirect=/booking")}>Login</Button>
                <Button variant="outline" onClick={() => router.push("/register?redirect=/booking")}>Register</Button>
              </div>
            </div>
          );
        }
        return (
          <div className="space-y-4 text-center w-full max-w-xs">
            <div className="text-lg font-semibold">All done! Ready to submit your booking.</div>
            <Button type="submit" className="w-full">Submit Booking</Button>
          </div>
        );
      default:
        return null;
    }
  };

  // Form submit
  const onSubmit = (data: FormDataType) => {
    // Merge with local state (for file, date, etc.)
    const merged = { ...formData, ...data };
    // TODO: Send to backend
    alert("Booking submitted!\n" + JSON.stringify(merged, null, 2));
  };

  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl shadow-xl p-4 md:p-8 border border-white/30 backdrop-blur bg-white/10 dark:bg-gray-900/30" style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)", WebkitBackdropFilter: "blur(8px)", backdropFilter: "blur(8px)" }}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-lg font-bold text-white">Book a Service</div>
            <div className="text-sm text-white/80">Step {step} of 5</div>
            <div className="w-full md:w-1/2 bg-gray-200/60 dark:bg-gray-700/60 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all"
                style={{ width: `${(step / 5) * 100}%` }}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
            {/* Steps horizontally on desktop, stacked on mobile */}
            {[1, 2, 3, 4, 5].map((s) => (
              <div key={s} className={`hidden md:block flex-1 ${step === s ? "" : "opacity-40"}`}>{step === s && renderStep()}</div>
            ))}
            {/* Mobile: only show current step */}
            <div className="block md:hidden w-full">{renderStep()}</div>
          </div>
          <div className="flex justify-between mt-8">
            <Button type="button" variant="outline" onClick={prevStep} disabled={step === 1}>
              Back
            </Button>
            {step < 5 && (
              <Button type="button" onClick={nextStep}>
                Next
              </Button>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
} 