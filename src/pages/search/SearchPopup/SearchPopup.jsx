import "./SearchPopup.css";

function Searchengin() {
  // hiển thị nội dung trên trang search
  return (
    <div className="box7">
      <div className="containSearch">
        <h2>
          <strong>Search</strong>
        </h2>
        <form>
          <div>
            <label for="des">Destination</label>
            <input
              className="in1"
              type="text"
              id="des"
              name="destination"
            ></input>
          </div>
          <div>
            <label for="checkIn">Check-in Date</label>
            <input
              className="in1"
              type="text"
              id="checkIn"
              name="checkIn"
              value={`06/24/2022 to 06/24/2022`}
            ></input>
          </div>
          <div>
            <p>Options</p>
            <div className="containSearch2">
              <div>
                <label for="min">Min price per night</label>
                <input
                  className="input2"
                  type="text"
                  id="min"
                  name="min"
                ></input>
              </div>
              <div>
                <label for="max"> Max price per night</label>
                <input
                  className="input3"
                  type="text"
                  id="max"
                  name="max"
                ></input>
              </div>
              <div>
                <label for="adult">Adult</label>
                <input type="text" id="adult" name="adult" value={1}></input>
              </div>
              <div>
                <label for="children">Children</label>
                <input
                  type="text"
                  id="children"
                  name="children"
                  value={0}
                ></input>
              </div>
              <div>
                <label for="room">Room</label>
                <input type="text" id="room" name="room" value={1}></input>
              </div>
            </div>
          </div>
          <button className="btnSearch" type="button">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
export default Searchengin;
