export default function TeamPage() {
  const teamMembers = [
    {
      name: "Sokha Vann",
      role: "Frontend Developer",
      bio: "Builds responsive interfaces and keeps the user experience smooth.",
    },
    {
      name: "Dara Chhin",
      role: "Backend Developer",
      bio: "Designs APIs and ensures data flows reliably across the app.",
    },
    {
      name: "Malis Pich",
      role: "UI/UX Designer",
      bio: "Crafts clean layouts and clear interaction patterns.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-900 px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-center text-4xl font-bold md:text-5xl">Our Team</h1>
        <p className="mt-4 text-center text-slate-300">
          Meet the people behind this project.
        </p>

        <section className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="rounded-xl border border-slate-700 bg-slate-800 p-6 shadow-lg"
            >
              <h2 className="text-2xl font-semibold">{member.name}</h2>
              <p className="mt-1 text-sm font-medium text-amber-400">{member.role}</p>
              <p className="mt-4 text-slate-300">{member.bio}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
