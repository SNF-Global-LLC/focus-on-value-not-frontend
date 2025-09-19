import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface AIRecommendationProps {
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'critical' | 'low';
  icon: LucideIcon;
}

export function AIRecommendation({ title, description, priority, icon: Icon }: AIRecommendationProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'bg-critical text-critical-foreground';
      case 'high':
        return 'bg-primary text-primary-foreground';
      case 'medium':
        return 'bg-secondary text-secondary-foreground';
      case 'low':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getIconColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'text-critical';
      case 'high':
        return 'text-primary';
      case 'medium':
        return 'text-secondary';
      case 'low':
        return 'text-muted-foreground';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <Card className="ai-recommendation">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-card-panel rounded-lg">
          <Icon className={`w-4 h-4 ${getIconColor(priority)}`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h4 className="text-sm font-medium text-foreground truncate">{title}</h4>
            <Badge className={`text-xs ${getPriorityColor(priority)}`}>
              {priority}
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  );
}