export async function GET() {
    const response = await fetch('http://deployance.online/wp-json/wp/v2/posts?_embed');
    const posts = await response.json();
    return Response.json(posts);
  }
  