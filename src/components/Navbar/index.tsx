import "./index.scss";

interface IProps {
  companyName: string;
  aboutTxt: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (val: boolean) => void;
}

const Navbar = ({
  aboutTxt,
  companyName,
  isLoggedIn,
  setIsLoggedIn,
}: IProps) => {
  return (
    <nav>
      <ul className="ulList">
        <li>
          <a href="/" style={{ fontSize: "30px", color: "#bf4080" }}>
            {companyName}
          </a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">{aboutTxt}</a>
        </li>
        <li>
          <a href="/">contact</a>
        </li>
        <li>
          <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
