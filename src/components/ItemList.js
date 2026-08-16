import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItems = (i) => {
    //Distpatch an action
    dispatch(addItem(i));
  };
  return (
    <div>
      {items.map((i) => (
        <div
          key={i.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div>
            <div className="py-2">
              <span>{i.name}</span> - <span>₹{i.price}</span>
            </div>
            <p className="text-sm">{i.description}</p>
          </div>
          <div>
            <button
              className="p-2 border border-green-600 bg-stone-100 text-md rounded-lg  shadow-xl "
              onClick={() => handleAddItems(i)}
            >
              {" "}
              Add +{" "}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
