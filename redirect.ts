// redirect.ts

// ✅ Properly formatted URL
const redirectUrl = "http://srv233619.hoster-test.ru/red";

// Redirect handler
Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
