"use client"
import React, { useEffect, useState } from "react";

const initialData = {
  name: "",
  phone: "",
  email: "",
  serviceCategory: "feature", // 'feature' or 'media'
  serviceType: "",
  roomType: "",
  size: "",
  date: "",
  time: "",
  urgency: "normal",
  address: "",
  notes: "",
};

export default function MultiStepBookingForm({ onSuccess }) {
  const [data, setData] = useState(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("bookingDraft");
    return saved ? JSON.parse(saved) : initialData;
  });
  const [step, setStep] = useState(0);
  const steps = ["Contact", "Service", "Schedule", "Address"];
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem("bookingDraft", JSON.stringify(data));
    } catch (err) {
      // ignore
    }
  }, [data]);

  const validateStep = (s) => {
    const e = {};
    if (s === 0) {
      if (!data.name.trim()) e.name = "Name is required";
      if (!/^\+?[0-9]{6,15}$/.test(data.phone)) e.phone = "Enter a valid phone";
      if (!/\S+@\S+\.\S+/.test(data.email)) e.email = "Enter a valid email";
    }
    if (s === 1) {
      if (!data.serviceType) e.serviceType = "Choose a service type";
    }
    if (s === 2) {
      if (!data.date) e.date = "Choose a date";
      if (!data.time) e.time = "Choose a time";
    }
    if (s === 3) {
      if (!data.address.trim()) e.address = "Address is required";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (!validateStep(step)) return;
    setStep((p) => Math.min(p + 1, steps.length - 1));
  };
  const prev = () => setStep((p) => Math.max(p - 1, 0));

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!validateStep(step)) return;
    setLoading(true);
    try {
      // replace this endpoint with your server's booking route
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      const json = await res.json();
      localStorage.removeItem("bookingDraft");
      onSuccess?.(json);
      // simple UI feedback
      alert("Booking submitted successfully. Reference: " + (json._id || "(no id)"));
      setData(initialData);
      setStep(0);
    } catch (err) {
      console.error(err);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const Field = ({ label, children, error }) => (
    <label className="block w-full">
      <div className="text-sm font-medium mb-1">{label}</div>
      {children}
      {error && <div className="text-xs text-red-600 mt-1">{error}</div>}
    </label>
  );

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">
      {/* Step tabs + progress */}
      <div className="mb-6">
        <div className="flex items-center gap-2">
          {steps.map((s, i) => (
            <button
              key={s}
              type="button"
              onClick={() => {
                // allow jumping to earlier steps; require validation to go forward
                if (i <= step) return setStep(i);
                // try validating each step up to i-1 before allowing
                let ok = true;
                for (let j = 0; j < i; j++) if (!validateStep(j)) { ok = false; break; }
                if (ok) setStep(i);
              }}
              className={`flex-1 py-2 px-3 text-sm rounded ${i === step ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-700"}`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="h-2 bg-gray-200 rounded mt-3 overflow-hidden">
          <div
            className="h-full bg-teal-600"
            style={{ width: `${(step / (steps.length - 1)) * 100}%` }}
          />
        </div>
      </div>

      {/* Step content */}
      {step === 0 && (
        <div className="space-y-4">
          <Field label="Full name" error={errors.name}>
            <input
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className="w-full border rounded px-3 py-2"
            />
          </Field>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Phone" error={errors.phone}>
              <input
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })}
                className="w-full border rounded px-3 py-2"
              />
            </Field>

            <Field label="Email" error={errors.email}>
              <input
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                className="w-full border rounded px-3 py-2"
              />
            </Field>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-4">
          <Field label="Service category">
            <div className="flex gap-2">
              <select
                value={data.serviceCategory}
                onChange={(e) => setData({ ...data, serviceCategory: e.target.value, serviceType: "" })}
                className="border px-3 py-2 rounded"
              >
                <option value="feature">Feature Wall</option>
                <option value="media">Media Wall</option>
              </select>

              <input
                value={data.size}
                placeholder="Approx. size (e.g., 12ft x 9ft)"
                onChange={(e) => setData({ ...data, size: e.target.value })}
                className="border px-3 py-2 rounded flex-1"
              />
            </div>
          </Field>

          <Field label="Service type" error={errors.serviceType}>
            <select
              value={data.serviceType}
              onChange={(e) => setData({ ...data, serviceType: e.target.value })}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="">-- choose type --</option>
              {data.serviceCategory === "feature" ? (
                <>
                  <option>Wooden Panel Feature Wall</option>
                  <option>3D Textured Feature Wall</option>
                  <option>Stone / Marble Feature Wall</option>
                  <option>Wallpaper Feature Wall</option>
                </>
              ) : (
                <>
                  <option>TV Media Wall with Storage</option>
                  <option>Floating TV Panel Media Wall</option>
                  <option>LED Backlit Media Wall</option>
                  <option>Fireplace Media Wall</option>
                </>
              )}
            </select>
          </Field>

          <Field label="Room type">
            <input
              value={data.roomType}
              onChange={(e) => setData({ ...data, roomType: e.target.value })}
              className="w-full border rounded px-3 py-2"
            />
          </Field>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <Field label="Preferred date" error={errors.date}>
            <input
              type="date"
              value={data.date}
              onChange={(e) => setData({ ...data, date: e.target.value })}
              className="border px-3 py-2 rounded w-full"
            />
          </Field>

          <Field label="Preferred time" error={errors.time}>
            <input
              type="time"
              value={data.time}
              onChange={(e) => setData({ ...data, time: e.target.value })}
              className="border px-3 py-2 rounded w-full"
            />
          </Field>

          <Field label="Urgency">
            <select
              value={data.urgency}
              onChange={(e) => setData({ ...data, urgency: e.target.value })}
              className="border px-3 py-2 rounded w-full"
            >
              <option value="normal">Normal</option>
              <option value="express">Express (extra)</option>
            </select>
          </Field>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <Field label="Installation address" error={errors.address}>
            <textarea
              value={data.address}
              onChange={(e) => setData({ ...data, address: e.target.value })}
              className="w-full border rounded px-3 py-2"
              rows={3}
            />
          </Field>

          <Field label="Notes / instructions">
            <textarea
              value={data.notes}
              onChange={(e) => setData({ ...data, notes: e.target.value })}
              className="w-full border rounded px-3 py-2"
              rows={3}
            />
          </Field>
        </div>
      )}

      {/* Actions */}
      <div className="mt-6 flex items-center justify-between">
        <div>
          {step > 0 && (
            <button type="button" onClick={prev} className="px-4 py-2 rounded border">
              Back
            </button>
          )}
        </div>

        <div className="flex gap-2">
          {step < steps.length - 1 ? (
            <button type="button" onClick={next} className="px-4 py-2 rounded bg-teal-600 text-white">
              Next
            </button>
          ) : (
            <button type="submit" disabled={loading} className="px-4 py-2 rounded bg-green-600 text-white">
              {loading ? "Submitting..." : "Submit Booking"}
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
