import { supabase } from '../lib/supabaseClient';

async function getLinks() {
  const { data, error } = await supabase.from('links').select('*');
  if (error) {
    console.error('Error fetching links:', error);
    return [];
  }
  return data;
}

export default async function Home() {
  const links = await getLinks();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-center">My Links</h1>
      </div>

      <div className="mt-12 w-full max-w-md">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full p-4 mb-4 text-center bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
          >
            {link.title}
          </a>
        ))}
      </div>
    </main>
  );
}
