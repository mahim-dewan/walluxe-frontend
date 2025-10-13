import { api } from "@/lib/api";

// Call api function for initiate payment
export const initPayment = async (data) => {
  const res = await api.initPayment(data);
  return res;
};
