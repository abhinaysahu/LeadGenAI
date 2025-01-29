import { useEffect, useState } from "react";
import callEllipse from "../assets/RecentActivities/CallEllipse.png";
import callRinger from "../assets/RecentActivities/CallRinger.png";
import convertedDone from "../assets/RecentActivities/ConvertedDone.png";
import convertedEllipse from "../assets/RecentActivities/ConvertedEllipse.png";
import followupEllipse from "../assets/RecentActivities/FollowUpEllipse.png";
import followupClock from "../assets/RecentActivities/FollowUpClock.png";

export default function RecentActivities() {
  // State to store activities
  const [activities, setActivities] = useState([
    {
      type: "call",
      id: crypto.randomUUID(),
      name: "John Jacob",
      timestamp: Date.now() - 5 * 60 * 1000, // 5 minutes ago
    },
    {
      type: "converted",
      id: crypto.randomUUID(),
      name: "Tech Solution",
      timestamp: Date.now() - 2 * 60 * 60 * 1000, // 2 hours ago
    },
    {
      type: "follow-up",
      id: crypto.randomUUID(),
      name: "InnovationX",
      timestamp: Date.now() - 3 * 24 * 60 * 60 * 1000, // 3 days ago
    },
  ]);

  // Function to calculate time difference
  const getTimeAgo = (timestamp) => {
    const now = Date.now();
    const diff = now - timestamp;

    const minutes = Math.floor(diff / (60 * 1000));
    const hours = Math.floor(diff / (60 * 60 * 1000));
    const days = Math.floor(diff / (24 * 60 * 60 * 1000));

    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  // Function to add a new activity dynamically
  const addActivity = (type, name) => {
    const newActivity = {
      type,
      id: crypto.randomUUID(),
      name,
      timestamp: Date.now(), // Timestamp starts from the time of addition
    };

    setActivities((prevActivities) => [newActivity, ...prevActivities]); // Adds new activity to the top
  };

  // Update timeline every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setActivities((prevActivities) => [...prevActivities]); // Trigger re-render
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  // Activity icons mapping
  const activityIcons = {
    call: { background: callEllipse, foreground: callRinger },
    converted: { background: convertedEllipse, foreground: convertedDone },
    "follow-up": { background: followupEllipse, foreground: followupClock },
  };

  return (
    <>
      <div className="text-2xl font-bold py-5 pl-10 border-b border-b-gray-400 text-gray-800">
        Recent Activities
      </div>

      {/* Button to add a new activity for testing
      <div className="p-5">
        <button
          onClick={() => addActivity("call", "New Contact")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Call Activity
        </button>
        <button
          onClick={() => addActivity("converted", "New Customer")}
          className="bg-green-500 text-white px-4 py-2 ml-2 rounded"
        >
          Add Converted Activity
        </button>
        <button
          onClick={() => addActivity("follow-up", "Potential Client")}
          className="bg-yellow-500 text-white px-4 py-2 ml-2 rounded"
        >
          Add Follow-Up Activity
        </button>
      </div> */}

      <div className="grid-cols-1 activities-container">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="py-3 activity-container border-b border-b-gray-400 items-center flex"
          >
            <div className="activity-icon w-20 mx-10 relative">
              <img
                src={activityIcons[activity.type].background}
                alt="background"
              />
              <img
                className="absolute bottom-1 left-1"
                src={activityIcons[activity.type].foreground}
                alt="foreground"
              />
            </div>
            <div className="activity-description flex flex-col w-5xl">
              <div className="heading text-xl font-semibold text-gray-700">
                {activity.type === "call"
                  ? `Call with ${activity.name}`
                  : activity.type === "converted"
                  ? `${activity.name} was converted`
                  : `Follow-up with ${activity.name}`}
              </div>
              <div className="description text-gray-700">
                {activity.type === "call"
                  ? "Discussed pricing details for enterprise plan"
                  : activity.type === "converted"
                  ? "Conversion completed successfully"
                  : "Scheduled a follow-up discussion"}
              </div>
            </div>
            {/* Dynamic timeline */}
            <div className="timeline ml-20 text-xl font-semibold text-gray-700">
              {getTimeAgo(activity.timestamp)}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
