import { FaUser } from "react-icons/fa";

interface UserCardProps {
  person: { name: string; following: boolean };
}

const UserCard = ({ person: { name, following } }: UserCardProps) => {
  return (
    <div className="flex items-center justify-between">
      <section className="flex items-center">
        <FaUser className="text-3xl mr-3 text-gray-500" />
        <span>{name}</span>
      </section>

      <button>{following ? "Following" : "Follow"}</button>
    </div>
  );
};

export default UserCard;
