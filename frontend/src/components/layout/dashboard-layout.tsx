import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-5">
        <h2 className="text-xl font-bold mb-5">Expense Tracker</h2>
        <nav>
          <ul className="space-y-3">
            <li>
              <Link href="/dashboard" className="block p-2 hover:bg-gray-700 rounded">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/expenses" className="block p-2 hover:bg-gray-700 rounded">
                Expenses
              </Link>
            </li>
            <li>
              <Link href="/settings" className="block p-2 hover:bg-gray-700 rounded">
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <header className="flex justify-between items-center bg-white p-4 shadow rounded-md">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <UserButton />
        </header>

        <div className="mt-6">{children}</div>
      </main>
    </div>
  );
}
