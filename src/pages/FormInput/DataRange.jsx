import { useState, useEffect, useRef } from "react";
import { addDays, format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./DataRange.css";

// export default App;
const DateRangeComponent = () => {
  // sư dụng useSate để quản lý và cập nhật giá trị setRange
  const [range, setRange] = useState([
    // khi component bắt đầu render, giá trị của range sẽ được khởi tạo với một phạm vi từ ngày hiện tại đến 7 ngày sau và có key là "selection"
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  // sư dụng useSate để  lưu trữ trạng thái của việc mở hay đóng date picker vàcập nhật giá trị setIsopen
  const [isOpen, setIsOpen] = useState(false);
  // refCalen: một tham chiếu đến một phần tử DOM (trong trường hợp này được gán giá trị ban đầu là null) để sử dụng trong việc kiểm tra vùng click.
  const refCalen = useRef(null);

  //
  //  an Khi Nhan Ben Ngoai
  const closeDateRangePicker = (event) => {
    // console.log(refCalen);
    //   console.log(event.target);
    //   // Kiem tra dang click chuot o dau

    //  kiểm tra nếu refCalen.current tồn tại và element mà người dùng click không nằm trong vùng của refCalen.current sử dụng `refCalen.curent.contains(event.target).
    //  - Trong trường hợp không nằm trong vùng, hàm setIsOpen(false) được gọi để đóng date picker (isOpen được set lại về false).
    if (refCalen.current && !refCalen.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  //  an Khi Nhan ESC
  const closeOnEscapePress = (event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };
  // su dung useEffect de load cac hanh dong khi trang duoc tai

  useEffect(() => {
    // them su kien click tren trang va su kien nhan ESC
    document.addEventListener("click", closeDateRangePicker, true);
    document.addEventListener("keydown", closeOnEscapePress, true);

    return () => {
      // trả về một hàm cleanup. Hàm này sẽ được gọi khi component bị unmount hoặc useEffect chạy lần tiếp theo.
      // Trong trường hợp này, hàm cleanup sử dụng document.removeEventListener để loại bỏ event listeners cho sự kiện click và sự kiện nhấn phím ESC.

      document.removeEventListener("click", closeDateRangePicker, true);
      document.removeEventListener("keydown", closeOnEscapePress, true);
    };
  }, []);
  return (
    // hiển thị nội dung của trang datarange
    <div className="containerDatarange">
      <i
        style={{ color: "gray", marginRight: "3px" }}
        class="fa-solid fa-calendar-days"
      ></i>
      <input
        style={{ width: "180px", border: "white", color: "gray" }}
        value={`${format(range[0].startDate, "dd-MM-yyyy")} den ${format(
          range[0].endDate,
          "dd-MM-yyyy"
        )}`}
        readOnly
        onClick={() => setIsOpen(true)}
      />
      <div className="calendarWrap" ref={refCalen}>
        {isOpen && (
          <DateRange
            onChange={(item) => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            direction="horizontal"
          />
        )}
      </div>
    </div>
  );
};

export default DateRangeComponent;
