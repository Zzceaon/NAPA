'use client';
import CounterComponent from './components/CounterComponent';
import NavLinks from './components/NavLinks';
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-20">
      <NavLinks />
      <CounterComponent title="Dashboard Layout" />
      {children}
    </div>
  );
}
