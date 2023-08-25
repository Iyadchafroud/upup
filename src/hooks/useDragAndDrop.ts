import React, { useRef, useState } from 'react'

const useDragAndDrop = () => {
    const [isDragging, setIsDragging] = useState(false)
    const containerRef = useRef<Node>(null)

    /**
     * Define the event handler for drag enter
     * @param e the event
     */
    const handleDragEnter = (
        e: React.MouseEvent<HTMLDivElement, DragEvent>,
    ) => {
        // Prevent default behavior
        e.preventDefault()
        // Check if the mouse is entering the div or its children
        if (
            e.target === containerRef.current ||
            containerRef.current!.contains(e.target as Node)
        )
            // Show the drop zone
            setIsDragging(true)
    }

    /**
     * Define the event handler for drag leave
     * @param e the event
     */
    const handleDragLeave = (
        e: React.MouseEvent<HTMLDivElement, DragEvent>,
    ) => {
        // Prevent default behavior
        e.preventDefault()
        // Check if the mouse is leaving the div or its children
        if (
            e.target === containerRef.current ||
            containerRef.current!.contains(e.target as Node)
        ) {
            // Check if the mouse is moving to another element inside the div
            if (!containerRef.current!.contains(e.relatedTarget as Node))
                // Hide the drop zone
                setIsDragging(false)
        }
    }

    return {
        isDragging,
        setIsDragging,
        handleDragEnter,
        handleDragLeave,
        containerRef,
    }
}

export default useDragAndDrop