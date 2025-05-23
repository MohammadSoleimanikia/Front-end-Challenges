# Drag and Drop List Component
A simple React component that implements drag and drop functionality for reordering list items.

## Features

- Draggable list items
- No external dependencies

## How It Works

1. When a user starts dragging an item, the index is stored
2. During drag over, the default behavior is prevented to allow drops.
3. When an item is dropped:
    - The dragged item is removed from its original position
    - The item is inserted at the new position (index)
    - The state is updated with the new order
