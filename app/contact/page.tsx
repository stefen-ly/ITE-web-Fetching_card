export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12 text-foreground">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-2">
        <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
            Contact Us
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight">Let&apos;s talk</h1>
          <p className="mt-4 text-muted-foreground">
            Send us a message and we will get back to you as soon as possible.
          </p>

          <form className="mt-8 space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-input bg-background px-4 py-3 outline-none transition focus:border-ring"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-input bg-background px-4 py-3 outline-none transition focus:border-ring"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Type your message..."
                className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 outline-none transition focus:border-ring"
              />
            </div>

            <button
              type="submit"
              className="inline-flex rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        </section>

        <section className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Email</h2>
            <p className="mt-2 text-muted-foreground">support@myapp.dev</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Phone</h2>
            <p className="mt-2 text-muted-foreground">+855 12 345 678</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Office</h2>
            <p className="mt-2 text-muted-foreground">
              Phnom Penh, Cambodia
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
