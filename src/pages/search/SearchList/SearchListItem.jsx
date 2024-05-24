import "./SearchListItem.css";
function RenderSearchItem(props) {
  // truyền thông tin qua props
  function RenderItem() {
    return (
      <div className="box9">
        {/* sử dụng hàm map để render thông tin */}
        {props.Search.map((items) => {
          return (
            <div className="box8">
              <img src={items.image_url} height="267px" width="200px"></img>
              <div className="containerSearch">
                <div className="textSearch1">
                  <h2 className="name1">{items.name}</h2>
                  <p>
                    <b>{items.rate_text}</b>
                  </p>
                  <span className="itemsRate">{items.rate}</span>
                </div>
                <p>{items.distance} from center</p>
                <p className="tag">{items.tag}</p>
                <p>
                  <b>{items.description}</b>
                </p>
                <div className="textSearch2">
                  <p>{items.type}</p>
                  <p className="price">
                    <b>${items.price}</b>
                  </p>
                </div>
                <div className="textSearch3">
                  <p className="cancel1">
                    <b>{items.free_cancel ? "Free cancellation" : null}</b>
                  </p>
                  <p className="cancel2">
                    {items.free_cancel
                      ? "You can cancel later, so lock in this great price today!"
                      : null}
                  </p>
                  <p>Includes taxes and fees</p>
                  <button className="btnSearch2" type="button">
                    See availability
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  return <div>{RenderItem()}</div>;
}
export default RenderSearchItem;
