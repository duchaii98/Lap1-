import "./Footer.css";
// tạo mảng chứa thông tin
const footerItem = [
  {
    col_number: 1,
    col_values: [
      "Countries",
      "Regions",
      "Cities",
      "Districts",
      "Airports",
      "Hotels",
    ],
  },
  {
    col_number: 2,
    col_values: [
      "Homes",
      "Apartments",
      "Resorts",
      "Villas",
      "Hostels",
      "Guest houses",
    ],
  },
  {
    col_number: 3,
    col_values: [
      "Unique places to stay",
      "Reviews",
      "Unpacked: Travel articles",
      "Travel communities",
      "Seasonal and holiday deals",
    ],
  },
  {
    col_number: 4,
    col_values: [
      "Car rental",
      "Flight Finder",
      "Restaurant reservations",
      "Travel Agents",
    ],
  },
  {
    col_number: 5,
    col_values: [
      "Curtomer Service",
      "Partner Help",
      "Careers",
      "Sustainability",
      "Press center",
      "Safety Resource Center",
      "Investor relations",
      "Terms & conditions",
    ],
  },
];
function FooterRender() {
  // hàm map sẽ render các phần tử của mảng trên
  function FooterRen() {
    return (
      <div className="container6">
        {footerItem.map((item) => {
          return (
            // sử dụng 1 lần hàm map nữa để render các phần tử trong mảng col_values
            <div key={item.col_number} className="child">
              {item.col_values.map((itemms) => {
                return <div style={{ color: " #003580" }}>{itemms}</div>;
              })}
            </div>
          );
        })}
      </div>
    );
  }
  return <div className="box6">{FooterRen()}</div>;
}
export default FooterRender;
