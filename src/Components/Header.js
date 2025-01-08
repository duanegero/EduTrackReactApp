import { useNavigate } from "react-router-dom"; //importing use nav to go from page to page
export default function Header() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/Home");
  };

  return (
    <header className="bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg p-5 mb-1">
      <div className="container mx-auto">
        <h1
          className="text-4xl font-poppins text-white tracking-wider drop-shadow-md cursor-pointer inline"
          onClick={goToHome}
        >
          EduTRACK
        </h1>
      </div>
    </header>
  );
}
