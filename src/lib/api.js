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

  // Get All team members using proxy api
  getAllTeamMembers: async () => {
    const res = await fetch(`/api/team`);
    const data = await res.json();

    return data;
  },

  // Get All service area using proxy api
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

  // Create Subscriber using Proxy
  createSubscriber: async (newSubscriber) => {
    const res = await axios.post("/api/subscribes", newSubscriber);
    return res.data;
  },
};
