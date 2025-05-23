import { useState } from "react";

// Initial list of items
const initialItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

function DragDropList() {
    // State to store the current list of items
    const [items, setItems] = useState(initialItems);

    // State to track the index of the dragged item
    const [draggedIndex, setDraggedIndex] = useState(null);

    // Store the index of the item being dragged
    const handleDragStart = (index) => {
        setDraggedIndex(index);
    };

    // Prevent default to allow dropping on this element
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (index) => {
        // Ignore if no item is being dragged or if the item is dropped on itself
        if (draggedIndex === null || draggedIndex === index) return;

        // Create a copy of the current items array
        const newItems = [...items];

        // Save the dragged item before removing it
        const draggedItem = newItems[draggedIndex];

        // Remove the dragged item from the array
        // e.g., ["apple", "orange", "banana"].splice(2, 1) => ["apple", "orange"]
        newItems.splice(draggedIndex, 1);

        // Insert the dragged item at the drop position
        newItems.splice(index, 0, draggedItem);

        // Update the list with the new order
        setItems(newItems);

        // Reset the dragged index
        setDraggedIndex(null);
    };

    return (
        <div>
            <h1>DRAG AND DROP</h1>
            <ul data-testid="list">
                {items.map((item, index) => (
                    <li
                        key={index}
                        draggable
                        onDragStart={() => handleDragStart(index)} // Start dragging
                        onDragOver={handleDragOver} // Allow dropping
                        onDrop={() => handleDrop(index)} // Drop handler
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DragDropList;
