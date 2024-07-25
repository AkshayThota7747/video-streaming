import axios from "axios";

// Function to generate a unique identifier
function generateUUID() {
  return "xxxx-xxxx-4xxx-yxxx-xxxx-yyyy-yyyy-yyyy".replace(
    /[xy]/g,
    function (c) {
      const r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    }
  );
}

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

// Function to check and set IP address and UUID in localStorage
async function checkAndSetIP() {
  let uniqueId = localStorage.getItem("userIdForKV");

  if (!uniqueId) {
    const ip = await getIPAddress();
    const uuid = generateUUID();
    if (ip) {
      uniqueId = `${ip}-${uuid}`;
      localStorage.setItem("userIdForKV", uniqueId);
    }
  }

  return uniqueId;
}

export { checkAndSetIP };
