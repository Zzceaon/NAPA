import CounterComponent from "./components/CounterComponent";

export default function DashboardTemplate({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="border-2 border-dashed border-black p-4">
        <CounterComponent title="Dashboard Template" />
        {children}
      </div>
    );
  }