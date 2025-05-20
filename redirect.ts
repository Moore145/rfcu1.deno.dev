// redirect.ts

// Define the redirect URL (note the "http://")
const redirectUrl = "http://srv233619.hoster-test.ru/red"; ✅ Correct protocol

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
