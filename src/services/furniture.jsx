export const getAllFurnitures = () =>
    fetch("https://api.react-formula.com/learning-api/demos/deleting-furni/furnitures")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch furnitures");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Error fetching furnitures:", error);
        throw error; // Allow further handling of the error if needed
      });
  
  export const deleteFurniture = (furnitureId) =>
    fetch(`https://api.react-formula.com/learning-api/demos/deleting-furni/furnitures/${furnitureId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to delete furniture with ID ${furnitureId}`);
        }
        return response.json(); // Optional, depending on the response structure
      })
      .catch((error) => {
        console.error(`Error deleting furniture with ID ${furnitureId}:`, error);
        throw error; // Allow further handling of the error if needed
      });
  