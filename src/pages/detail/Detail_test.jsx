import NavBar from "../home/Navbar/NavBar";
import Formreg from "../home/Formreg/Formreg";
import Footer from "../home/Footer/Footer";
import "./Detail.css";
// tạo mảng chứa thông tin
const detailItem = {
  name: "Tower Street Apartments",
  address: "Elton St 125 New york",
  distance: "Excellent location - 500m from center",
  price: "Book a stay over $114 at this property and get a free airport taxi",
  photos: [
    "./images/hotel_detail_1.jpg",
    "./images/hotel_detail_2.jpg",
    "./images/hotel_detail_3.jpg",
    "./images/hotel_detail_4.jpg",
    "./images/hotel_detail_5.jpg",
    "./images/hotel_detail_6.jpg",
  ],
  title: "Stay in the heart of City",
  description:
    "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
  // nine_night_price: 955,
  nine_night_price: 945,
};
const Detail = () => {
  // hàm để render phần tử bên trong mảng
  function RenderImg() {
    return (
      <div className="container7">
        {detailItem.photos.map((items) => {
          return <img src={items} height="220px" width="315px"></img>;
        })}
      </div>
    );
  }
  // hiển thị nội dung
  return (
    <div>
      <div className="containerDetail">
        <div className="containerDetail2">
          <NavBar />
        </div>
      </div>

      <div className="box11">
        <div className="detailBox">
          <h1>{detailItem.name}</h1>
          <button className="btnDetail" type="button">
            Reserve or Book Now!
          </button>
        </div>
        <p>
          <i class="fa-solid fa-location-dot"></i>
          {detailItem.address}
        </p>
        <p className="textDetail">
          <b>{detailItem.distance}</b>
        </p>
        <p className="priceDetail">
          <b>{detailItem.price}</b>
        </p>
        {RenderImg()}
        <div className="detailBox2">
          <div>
            <h1>{detailItem.title}</h1>
            <p className="textDetail2">{detailItem.description}</p>
          </div>
          <div className="box12">
            <div className="detailBox3">
              <h1 className="textDetail3">Perfect for a 9-night stay!</h1>
              <p>
                Located in the real heart of KraKow, this property has an
                excellent location score of 9.8!
              </p>
              <p className="textDetail4">
                <b>${detailItem.nine_night_price}</b>(9 nights)
              </p>
              <button className="btnDetail2" type="button">
                Reserve or Book Now!
              </button>
            </div>
          </div>
        </div>
      </div>
      <Formreg />
      <Footer />
    </div>
  );
};
export default Detail;
