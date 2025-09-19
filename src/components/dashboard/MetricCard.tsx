import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: LucideIcon;
  variant?: 'default' | 'success' | 'warning';
}

export function MetricCard({ 
  title, 
  value, 
  change, 
  trend, 
  icon: Icon,
  variant = 'default' 
}: MetricCardProps) {
  const getTrendColor = () => {
    if (variant === 'success') return 'text-secondary';
    if (variant === 'warning') return 'text-warning';
    return trend === 'up' ? 'text-secondary' : 'text-destructive';
  };

  const getBadgeVariant = () => {
    if (variant === 'success') return 'default';
    if (variant === 'warning') return 'secondary';
    return trend === 'up' ? 'default' : 'destructive';
  };

  return (
    <Card className="metric-card">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-foreground">{value}</p>
          </div>
        </div>
        <Badge variant={getBadgeVariant()} className="flex items-center gap-1">
          {trend === 'up' ? (
            <TrendingUp className="w-3 h-3" />
          ) : (
            <TrendingDown className="w-3 h-3" />
          )}
          <span className="text-xs">{change}</span>
        </Badge>
      </div>
    </Card>
  );
}