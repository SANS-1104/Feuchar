import './webinarDetail.css'

export default function WebinarLearn({ webinar }) {
  return (
    <div className="WebinarLearn-wrapper">
      <div className="upper">What you'll learn in Webinar?</div>
      <div className="mid">
        <div className="level1">{webinar.webinarLearnIntro}</div>
        <div className="level2">
          <ul>
            {webinar.webinarLearnPoints?.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="lower">
        <img src="/images/webinar2.png" alt="" />
      </div>
    </div>
  );
}
