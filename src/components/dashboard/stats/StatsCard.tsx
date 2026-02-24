import { UserCheck, Users, UserX } from "lucide-react";
import type { statsTypes } from "../../../types/types";
import Card from "../../ui/Card";

const iconsMap = {
  Users: Users,
  activeUsers: UserCheck,
  inactiveUsers: UserX,
};

const StatsCard = ({ title, value, icon, styles }: statsTypes) => {
  const Icon = iconsMap[icon as keyof typeof iconsMap];
  if (!Icon) return null;
  return (
    <Card size="xl">
      <div className="flex gap-4 items-center">
        <div className={`w-18 h-18 min-w-18 min-h-18 rounded-full flex items-center justify-center ${styles}`}>
          <Icon size={32} />
        </div>
        <div>
          <h6>{title}</h6>
          <p className="text-4xl font-semibold mt-2">{value}</p>
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;
