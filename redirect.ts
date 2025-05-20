// redirect.ts

// Define the correct redirect URL
const redirectUrl = "http://srv233619.hoster-test.ru/red"; // ✅ Fixed the protocol

// Handle the request
Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
