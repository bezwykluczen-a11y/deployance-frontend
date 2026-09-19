// app/blog/page.jsx

async function getPosts() {
  const res = await fetch('http://deployance.online/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query GetPosts {
          posts {
            nodes {
              id
              title
              excerpt
            }
          }
        }
      `,
    }),
    next: { revalidate: 3600 } 
  });

  if (!res.ok) {
    throw new Error('Failed to fetch from WPGraphQL');
  }

  const json = await res.json();
  
  // Return the array of posts
  return json.data.posts.nodes;
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div className="max-w-4xl mx-auto p-12 space-y-8">
      <h1 className="text-5xl font-bold text-center mb-12">Our Blog</h1>
      
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts found.</p>
      ) : (
        posts.map((post) => (
          <article key={post.id} className="p-8 border rounded-xl shadow-sm">
            <h2 
              className="text-3xl font-bold mb-4"
              dangerouslySetInnerHTML={{ __html: post.title }}
            />
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            />
          </article>
        ))
      )}
    </div>
  );
}