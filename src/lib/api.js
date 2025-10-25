import axios from "axios";

export const api = {
  // Get latest 5 recent projects
  getRecentProjects: async () => {
    try {
      const res = await fetch(
        `${process.env.BASE_API}/projects/recent-projects`,
        { next: { revalidate: 3600 } } // Revalidation for one hour
      );
      const data = await res.json();

      return data;
    } catch (err) {
      // Server is OFF/ Down / Network error / CORS issue
      if (err instanceof TypeError && err.message.includes("fetch")) {
        return {
          success: false,
          message: "Server is unreachable. Please try again later.",
          data: [],
        };
      }
    }
  },

  // Get all projects
  getAllProjects: async () => {
    try {
      const res = await fetch(
        `${process.env.BASE_API}/projects`,
        { next: { revalidate: 3600 } } // Revalidation for one hour
      );
      const data = await res.json();

      return data;
    } catch (err) {
      // Server is OFF/ Down / Network error / CORS issue
      if (err instanceof TypeError && err.message.includes("fetch")) {
        return {
          success: false,
          message: "Server is unreachable. Please try again later.",
          data: [],
        };
      }
    }
  },

  // Get single project
  getSingleProject: async (id) => {
    try {
      const res = await fetch(`${process.env.BASE_API}/projects/${id}`);
      const data = await res.json();

      return data;
    } catch (err) {
      // Server is OFF/ Down / Network error / CORS issue
      if (err instanceof TypeError && err.message.includes("fetch")) {
        return {
          success: false,
          message: "Server is unreachable. Please try again later.",
          data: [],
        };
      }
    }
  },

  // Get all team members using proxy api
  getAllTeamMembers: async () => {
    const res = await fetch(`/api/team`);
    const data = await res.json();

    return data;
  },

  // Get all service area using proxy api
  getServiceAreas: async () => {
    const res = await fetch("/api/serviceArea");
    const data = await res.json();

    return data;
  },

  // Get all accordions
  getAccordions: async () => {
    try {
      const res = await fetch(`${process.env.BASE_API}/accordions`, {
        next: { revalidate: 86400 }, // Revalidate time is 24h
      });
      const data = await res.json();

      return data;
    } catch (err) {
      // Server is OFF/ Down / Network error / CORS issue
      if (err instanceof TypeError && err.message.includes("fetch")) {
        return {
          success: false,
          message: "Server is unreachable. Please try again later.",
          data: [],
        };
      }
    }
  },

  // Create subscriber using Proxy
  createSubscriber: async (newSubscriber) => {
    const res = await axios.post("/api/subscribes", newSubscriber);
    return res.data;
  },

  // Get packages of feature walls
  getFeatureWallPackages: async () => {
    try {
      const res = await fetch(
        `${process.env.BASE_API}/packages/feature-walls`,
        {
          next: { revalidate: 21600 }, // Revalidate time is 6h
        }
      );
      const data = await res.json();
      return data;
    } catch (err) {
      // Server is OFF/ Down / Network error / CORS issue
      if (err instanceof TypeError && err.message.includes("fetch")) {
        return {
          success: false,
          message: "Server is unreachable. Please try again later.",
          data: [],
        };
      }
    }
  },

  // // Get single package
  getSinglePackage: async (id) => {
    const res = await fetch(`/api/packages/${id}`);
    const data = await res.json();
    return data;
  },

  // Make a new booking using Proxy
  createBooking: async (bookingData) => {
    const res = await axios.post("/api/bookings", bookingData);
    return res.data;
  },

  // Get single booking using Proxy
  getSingleBooking: async (id) => {
    const res = await fetch(`/api/bookings/${id}`);
    const data = await res.json();
    return data;
  },

  // Initiate payment using Proxy
  initPayment: async (data) => {
    const res = await axios.post(`/api/payment/init`, data);
    return res.data;
  },

  // Create contact message using Proxy
  createContactMessage: async (data) => {
    const res = await axios.post(`/api/contacts`, data);
    return res.data;
  },
};
