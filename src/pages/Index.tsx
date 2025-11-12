import { InvoiceManagement } from "@/components/InvoiceManagement";
import animaLogo from "@/assets/anima-logo.jpeg";
import reaLogo from "@/assets/rea-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <img src={animaLogo} alt="Anima Tech Studio" className="h-16 w-16 object-contain" />
              <div className="h-12 w-px bg-border"></div>
              <img src={reaLogo} alt="REA" className="h-12 w-12 object-contain" />
            </div>
            <div className="text-right">
              <h1 className="text-3xl font-bold text-foreground tracking-tight">Invoice Management System</h1>
              <p className="text-sm text-muted-foreground mt-1">Powered by Anima Tech Studio × REA</p>
            </div>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-6 py-8">
        <InvoiceManagement />
      </main>
    </div>
  );
};

export default Index;
