const API_BASE = process.env.NEXT_PUBLIC_BASE_URL || "";

function getContactEnquiryEndpoint() {
  if (!API_BASE) {
    throw new Error("NEXT_PUBLIC_BASE_URL is not configured");
  }

  return API_BASE.endsWith("/")
    ? `${API_BASE}api/contact/enquiry`
    : `${API_BASE}/api/contact/enquiry`;
}

export async function submitContactEnquiry(payload) {
  const response = await fetch(getContactEnquiryEndpoint(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const contentType = response.headers.get("content-type") || "";
  const responseBody = contentType.includes("application/json")
    ? await response.json()
    : null;

  if (!response.ok) {
    throw new Error(
      responseBody?.message ||
        responseBody?.error ||
        "Failed to submit enquiry",
    );
  }

  return responseBody;
}
