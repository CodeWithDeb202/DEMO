import "./WelcomeCard.css";

const WelcomeCard = ({
  user = {},
  completion = 0,
}) => {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 17
      ? "Good Afternoon"
      : hour < 21
      ? "Good Evening"
      : "Good Night";

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const roleClass =
    user?.role === "Employer"
      ? "employer"
      : user?.role === "Admin"
      ? "admin"
      : "student";

  return (
    <div className="welcome-card">

      <div className="welcome-left">

        <div className="welcome-top">

          <img
            src={
              user?.profileImage ||
              "https://ui-avatars.com/api/?background=2563eb&color=fff&name=User"
            }
            alt="Profile"
            className="welcome-avatar"
          />

          <div>

            <h5>{greeting} 👋</h5>

            <h2>
              {user?.firstName} {user?.lastName}
            </h2>

            <span className={`role-badge ${roleClass}`}>
              {user?.role || "Student"}
            </span>

          </div>

        </div>

        <p className="welcome-date">
          {today}
        </p>

        <p className="welcome-message">
          Complete your profile to unlock more internship
          opportunities and improve your visibility.
        </p>

      </div>

      <div className="welcome-right">

        <div className="progress-head">

          <span>Profile Completion</span>

          <span>{completion}%</span>

        </div>

        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{
              width: `${completion}%`,
            }}
          ></div>

        </div>

      </div>

    </div>
  );
};

export default WelcomeCard;