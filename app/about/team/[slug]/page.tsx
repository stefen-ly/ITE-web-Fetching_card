import { notFound } from "next/navigation";

const teamMembers = [
  {
    slug: "sokha-vann",
    name: "Sokha Vann",
    role: "Frontend Developer",
    bio: "Builds responsive interfaces and keeps the user experience smooth.",
    email: "sokha@myapp.dev",
  },
  {
    slug: "dara-chhin",
    name: "Dara Chhin",
    role: "Backend Developer",
    bio: "Designs APIs and ensures data flows reliably across the app.",
    email: "dara@myapp.dev",
  },
  {
    slug: "malis-pich",
    name: "Malis Pich",
    role: "UI/UX Designer",
    bio: "Crafts clean layouts and clear interaction patterns.",
    email: "malis@myapp.dev",
  },
];

type TeamMemberPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  const { slug } = await params;
  const member = await teamMembers.find((item) => item.slug === slug);

  if (!member) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-900 px-6 py-12 text-white">
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-700 bg-slate-800 p-8 shadow-xl">
        <p className="text-sm uppercase tracking-wide text-amber-400">Team Member</p>
        <h1 className="mt-2 text-4xl font-bold">{member.name}</h1>
        <p className="mt-2 text-lg text-slate-300">{member.role}</p>

        <p className="mt-6 leading-relaxed text-slate-200">{member.bio}</p>

        <div className="mt-8 border-t border-slate-700 pt-6">
          <p className="text-sm text-slate-400">Contact</p>
          <a
            href={`mailto:${member.email}`}
            className="mt-2 inline-block text-amber-300 hover:text-amber-200"
          >
            {member.email}
          </a>
        </div>
      </div>
    </main>
  );
}
