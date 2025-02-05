import {
  MapPinIcon,
  CalendarIcon,
  UsersIcon,
  TreesIcon as TreeIcon,
} from "lucide-react";
import { SpotlightCard } from "./react-bits-dev/spotlight-card";
import { Activity } from "@/shared/types/activity";
import { Button } from "./ui/button";

import dayjs from "dayjs";

type ActivityCardProps = {
  activity: Activity;
};

export const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  return (
    <SpotlightCard className="h-full" spotlightColor="rgba(34, 197, 94, 0.2)">
      <div className="flex flex-col h-full">
        <div className="flex-grow">
          <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <TreeIcon className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-black">
            {activity.name}
          </h3>
          <div className="flex items-center text-sm text-gray-700 mb-2">
            <MapPinIcon className="w-4 h-4 mr-1" />
            {activity.location}
          </div>
          <div className="flex items-center text-sm text-gray-700 mb-2">
            <CalendarIcon className="w-4 h-4 mr-1" />
            {dayjs(activity.start_datetime).format("DD/MM/YYYY")}
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <UsersIcon className="w-4 h-4 mr-1" />
            {activity.available_slots} guests
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          {/* <span className="font-bold text-white">{activity.} / night</span> */}
          <Button>Book Campsite</Button>
        </div>
      </div>
    </SpotlightCard>
  );
};
