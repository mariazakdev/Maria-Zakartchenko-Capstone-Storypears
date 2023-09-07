import Avatar from "../Avatar/Avatar";
import "./WriterList.scss";
import { useNavigate } from "react-router-dom";

function WriterList({ writerListData }) {

  const navigate = useNavigate();

  const handleWriterClick = (profile) => {
    navigate(`/writers/${profile.pen_first_name}${profile.pen_last_name}`, { state: { writerData: profile } });
  };
  return (
    <div className="writers">
      <h2>Our Writers</h2>
      <ul className="writers-list">
        {writerListData.map((profile) => (
          <li key={profile.id} className="writers-list__item" onClick={() => handleWriterClick(profile)}>
            <Avatar className="avatar__image-bg" />
            <p>
                {profile.pen_first_name}
                {profile.pen_last_name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default WriterList;
