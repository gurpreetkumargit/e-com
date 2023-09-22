import "./navbar.css";
import SearchBox from "../CommonComponents/SearchBox.tsx";

export default function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">The Hindustan E-Com Shop</div>
        <div>
          <SearchBox
            width={200}
            height={40}
            label="1213"
            placeHolder="GlobalSearch"
          />
        </div>
        <div className="nav-actions">Menu</div>
      </div>
    </>
  );
}
