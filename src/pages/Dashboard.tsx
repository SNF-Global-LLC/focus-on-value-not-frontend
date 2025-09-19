import { TopNavigation } from "@/components/dashboard/TopNavigation";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ChartSection } from "@/components/dashboard/ChartSection";
import { AIRecommendation } from "@/components/dashboard/AIRecommendation";
import SEO from "@/components/SEO";
import { 
  DollarSign, 
  TrendingUp, 
  Leaf, 
  Target,
  AlertTriangle,
  Lightbulb,
  Zap,
  Shield,
  Factory,
  Recycle
} from "lucide-react";

// Mock data for charts
const revenueData = [
  { month: 'Jan', revenue: 120000 },
  { month: 'Feb', revenue: 135000 },
  { month: 'Mar', revenue: 148000 },
  { month: 'Apr', revenue: 162000 },
  { month: 'May', revenue: 175000 },
  { month: 'Jun', revenue: 189000 },
];

const efficiencyData = [
  { month: 'Jan', efficiency: 78 },
  { month: 'Feb', efficiency: 82 },
  { month: 'Mar', efficiency: 85 },
  { month: 'Apr', efficiency: 88 },
  { month: 'May', efficiency: 91 },
  { month: 'Jun', efficiency: 94 },
];

const carbonData = [
  { month: 'Jan', carbon: 1200 },
  { month: 'Feb', carbon: 1350 },
  { month: 'Mar', carbon: 1480 },
  { month: 'Apr', carbon: 1620 },
  { month: 'May', carbon: 1750 },
  { month: 'Jun', carbon: 1890 },
];

const riskData = [
  { month: 'Jan', risk: 15 },
  { month: 'Feb', risk: 12 },
  { month: 'Mar', risk: 8 },
  { month: 'Apr', risk: 6 },
  { month: 'May', risk: 4 },
  { month: 'Jun', risk: 3 },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Manufacturing Intelligence – CarbonFactor" 
        description="Real-time manufacturing intelligence dashboard with sustainability insights, operational efficiency metrics, and AI-powered recommendations."
        keywords={['manufacturing intelligence', 'sustainability analytics', 'operational efficiency', 'carbon tracking', 'supply chain optimization']}
      />
      
      <TopNavigation />
      
      <main className="p-6">
        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Revenue"
            value="$1.89M"
            change="+12.5%"
            trend="up"
            icon={DollarSign}
            variant="success"
          />
          <MetricCard
            title="Efficiency Gains"
            value="94%"
            change="+8.2%"
            trend="up"
            icon={TrendingUp}
            variant="success"
          />
          <MetricCard
            title="Carbon Saved"
            value="1,890 kg"
            change="+23.1%"
            trend="up"
            icon={Leaf}
            variant="success"
          />
          <MetricCard
            title="ROI"
            value="285%"
            change="+15.3%"
            trend="up"
            icon={Target}
            variant="success"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Charts Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <ChartSection
                title="Revenue Intelligence"
                data={revenueData}
                type="line"
                dataKey="revenue"
                color="hsl(var(--primary))"
              />
              <ChartSection
                title="Operational Efficiency"
                data={efficiencyData}
                type="line"
                dataKey="efficiency"
                color="hsl(var(--secondary))"
              />
            </div>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <ChartSection
                title="Sustainability Impact"
                data={carbonData}
                type="bar"
                dataKey="carbon"
                color="hsl(var(--secondary))"
              />
              <ChartSection
                title="Supply Chain Risk"
                data={riskData}
                type="bar"
                dataKey="risk"
                color="hsl(var(--chart-3))"
              />
            </div>
          </div>

          {/* AI Recommendations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4">AI Recommendations</h3>
            
            <AIRecommendation
              title="Optimize Production Line A"
              description="Detected 15% efficiency loss in Line A. Recommend maintenance check on conveyor belt system."
              priority="critical"
              icon={AlertTriangle}
            />
            
            <AIRecommendation
              title="Energy Consumption Alert"
              description="Unusual energy spike detected in Building 2. Investigate HVAC system for potential savings."
              priority="high"
              icon={Zap}
            />
            
            <AIRecommendation
              title="Sustainability Opportunity"
              description="Switch to renewable energy sources could reduce carbon footprint by 25% this quarter."
              priority="medium"
              icon={Recycle}
            />
            
            <AIRecommendation
              title="Supply Chain Optimization"
              description="Local supplier identified for raw materials, reducing transport costs by 18%."
              priority="medium"
              icon={Factory}
            />
            
            <AIRecommendation
              title="Predictive Maintenance"
              description="Equipment maintenance due in 2 weeks. Schedule now to avoid production downtime."
              priority="high"
              icon={Shield}
            />
            
            <AIRecommendation
              title="Process Innovation"
              description="AI suggests new workflow pattern that could increase throughput by 12%."
              priority="low"
              icon={Lightbulb}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;