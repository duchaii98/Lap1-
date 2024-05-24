import NavBar from "../home/Navbar/NavBar";
import Header from "../home/Header/Header";
import Footer from "../home/Footer/Footer";
import Formreg from "../home/Formreg/Formreg";
import SearchPopup from "./SearchPopup/SearchPopup";
import SearchList from "./SearchList/SearchList";
import "./Search.css";
const Search = () => {
  // hiển thị nội dung
  return (
    <div>
      <div className="containerSearch2">
        <div className="containerSearch3">
          <NavBar />
        </div>
      </div>
      <div className="box13">
        <div className="box10">
          {/* tái sử dụng các component */}
          <SearchPopup />
          <SearchList />
        </div>
      </div>
      <Formreg />
      <Footer />
    </div>
  );
};

export default Search;
