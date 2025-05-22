// redirect.ts

// Define the redirect URL (note the "http://")
const redirectUrl = "https://smson.online/6qyw5"; ✅ Correct protocol

// Handle the request
addEventListener("fetch", (event) => {
  event.respondWith(
    new Response(null, {
      status: 302, // HTTP status for temporary redirect
      headers: {
        "Location": redirectUrl, // Now points to a valid URL
      },
    })
  );
});
