//   Paul
import users from "../users.json"
import "./users.css"

export default function Users() {


    return (
        <>
            <div className="profileCard-wrapper-1">
                {users.map((user) => (
                    <div key={user.id} className="profileCard">
                        {/* <UserIcon /> */}
                        <img src={user.avatar} alt={user.name} />
                        <h4>{user.name}</h4>
                    </div>
                ))}
            </div>
        </>
    );
}
