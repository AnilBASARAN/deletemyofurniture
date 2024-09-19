import * as FurnitureServices from "./services/furniture";

const FurnitureItem = (props) => {
  const { furniture , fetchFurnitures } = props;

  return (
    <div className="flex m-8 border rounded-lg shadow-md border-stone-300 overflow-clip">
      
      <img
      alt=""
        src={furniture.image}
        className="object-cover w-48 h-48 border-r border-stone-300"
      />
      
      <div className="flex flex-col justify-between w-full px-6 py-4 bg-white">
        <div className="mb-4 text-2xl text-stone-600">{furniture.name}</div>
        
        <div className="text-stone-500">{furniture.description}</div>

        <div className=" flex justify-end">
        <button
          onClick={ async ()=>{
            await FurnitureServices.deleteFurniture(furniture.id);
            fetchFurnitures();
          }}
          className="bg-red-400 text-red-200 px-2 py-1 rounded-lg" >
        delete <i className="fa-solid fa-trash "></i>
        </button>
        </div>
        
      </div>

      
    </div>
  );
};

export default FurnitureItem;
