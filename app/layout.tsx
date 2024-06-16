import { type Metadata } from "next";
import { Inter } from "next/font/google";
import { NavLink } from "./_components/NavLink";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nextjs Example",
  description: "example",
};

const inter = Inter({ subsets: ["latin"] });

const routes = [
  { to: "/", text: "首页", end: true },
  { to: "/client-component", text: "Client Component" },
  { to: "/fetch-data", text: "Fetch Data" },
  { to: "/server-actions", text: "Server Actions" },
  { to: "/streaming-render", text: "Streaming Render" },
  { to: "/use-search-params", text: "useSearchParams" },
  { to: "/dynamic-routes/123", text: "Dynamic Routes" },
  { to: "/parallel-routes", text: "Parallel Routes" },
  { to: "/auth-page", text: "Auth Page" },
];

function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="container mx-auto">
          <nav className="flex border-b flex-col space-y-2 py-2">
            {routes.map((r, k) => (
              <li key={k}>
                <NavLink to={r.to} end={r.end} activeClassName="text-[red]">
                  {r.text}
                </NavLink>
              </li>
            ))}
          </nav>
          <div className="py-2">{props.children}</div>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
