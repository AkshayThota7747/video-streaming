import axios from "axios";

// Function to get the user's IP address from ipify
async function getIPAddress() {
  try {
    const response = await axios.get("https://api.ipify.org?format=json");
    return response.data.ip;
  } catch (error) {
    console.error("Error fetching IP address:", error);
    return null;
  }
}

// Function to check and set IP address in localStorage
async function checkAndSetIP() {
  let ip = localStorage.getItem("ip");

  if (!ip) {
    ip = await getIPAddress();
    if (ip) {
      localStorage.setItem("ip", ip);
    }
  }

  return ip;
}

export { checkAndSetIP };
