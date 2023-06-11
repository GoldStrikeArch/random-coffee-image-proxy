export const revalidate = 0;

export async function GET() {
  const res = await fetch("https://coffee.alexflipnote.dev/random.json");
  const data = await res.json();

  return new Response(JSON.stringify(data, null, 2), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
