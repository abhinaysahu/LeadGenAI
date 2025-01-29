import callEllipse from "../assets/RecentActivities/CallEllipse.png";
import callDoneIcon from "../assets/RecentActivities/CallDone.png";
export default function RecentActivities() {
  return (
    <>
      <div className="text-2xl font-bold py-5 pl-10 border-b border-b-gray-400  text-gray-800">
        Recent Activities
      </div>
      <div className="grid-cols-1 activities-container">
        <div className=" py-3 activity-container border-b border-b-gray-400 items-center flex">
          <div className="activity-icon w-20 mx-10 relative">
            <img src={callEllipse}></img>
            <img
              className="absolute bottom-1.5 left-1"
              src={callDoneIcon}
            ></img>
          </div>
          <div className="activity-description flex flex-col w-5xl">
            <div className="heading text-xl font-semibold text-gray-700">
              Call with Jacob Joe
            </div>
            <div className="description text-gray-700">
              Discussed pricing details for enterprise plan
            </div>
          </div>
          <div className="timeline ml-20 text-xl font-semibold text-gray-700">
            30m ago
          </div>
        </div>
      </div>
    </>
  );
}
