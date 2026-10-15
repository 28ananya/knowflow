type DashboardPageProps = {
  email: string
  onSignOut: () => void
}

export default function DashboardPage({ email, onSignOut }: DashboardPageProps) {
  return (
    <main className="dashboard-shell">
      <section className="dashboard-card">
        <p className="eyebrow">Workspace</p>
        <h1>Welcome back</h1>
        <p>Signed in as {email}</p>
        <button type="button" onClick={onSignOut}>
          Sign out
        </button>
      </section>
    </main>
  )
}
