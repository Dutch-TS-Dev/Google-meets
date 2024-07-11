//   Paul
import users from "../users.json";
import "./users.css";

export default function Users() {
  return (
    <div className="profileCard-wrapper-1">
      {users.map((user) => (
        <div key={user.id} className="profileCard">
          <img src={user.avatar} alt={user.name} />
          <h4 className="pl-3 text-white">{user.name}</h4>
        </div>
      ))}
    </div>
  );
}
