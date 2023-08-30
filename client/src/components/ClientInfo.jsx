import { FaEnvelope, FaPhone, FaIdBadge } from "react-icons/fa";

const ClientInfo = ({ client }) => {
  return (
    <>
      <h5 className="mt-8 text-[20px] mb-4">Client Information</h5>
      <ul className="list-group">
        <li className="list-group-item flex items-center gap-x-2 py-3 text-[18px]">
          <FaIdBadge className="icon text-[#116A4E] text-[20px]" />
          {client.name}
        </li>
        <li className="list-group-item flex items-center gap-x-2 py-3  text-[18px]">
          <FaEnvelope className="icon text-[#116A4E] text-[20px]" />
          {client.email}
        </li>
        <li className="list-group-item flex items-center gap-x-2 py-3 text-[18px]">
          <FaPhone className="icon text-[#116A4E] text-20px" />
          {client.phone}
        </li>
      </ul>
    </>
  );
};

export default ClientInfo;
