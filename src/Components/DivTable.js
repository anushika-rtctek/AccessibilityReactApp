import React, { useEffect, useState } from 'react'
import './DivTable.css'

function DivTable() {

    // const [focusedRow, setFocusedRow] = useState(0)
    // const [focusedCell, setFocusedCell] = useState(0)

    // useEffect(() => {
    //     const handleKeyPress = (event) => {
    //         switch (event.key) {
    //             case 'ArrowUp':
    //                 setFocusedRow(prevRow => Math.max(0, prevRow - 1))
    //                 break
    //             case 'ArrowDown':
    //                 setFocusedRow(prevRow => prevRow + 1)
    //                 break
    //             case 'ArrowLeft':
    //                 setFocusedCell(prevCell => Math.max(0, prevCell - 1))
    //                 break
    //             case 'ArrowRight':
    //                 setFocusedCell(prevCell => prevCell + 1)
    //                 break
    //             default:
    //                 break
    //         }
    //     }
    //     window.addEventListener('keydown', handleKeyPress)

    //     return () => {
    //         window.removeEventListener('keydown', handleKeyPress)
    //     }
    // }, [])

    return (
        <div>
            <h1>Table for reference</h1>
            <div role='table' aria-label='Test Data'>
                <div>
                    <h2>Test Data</h2>
                </div>
                <div role='rowgroup'>
                    <div role='row'>
                        <span role='rowheader'>Details</span>
                        <span role='columnheader'>User 1</span>
                        <span role='columnheader'>User 2</span>
                    </div>
                </div>
                <div role='rowgroup'>
                    <div role='row'>
                        <span role='rowheader'>Name</span>
                        <span role='cell'>Anushika</span>
                        <span role='cell'>Saumya</span>
                    </div>
                    <div role='row'>
                        <span role='rowheader'>Age</span>
                        <span role='cell'>21</span>
                        <span role='cell'>24</span>
                    </div>
                    <div role='row'>
                        <span role='rowheader'>City</span>
                        <span role='cell'>Noida</span>
                        <span role='cell'>Lucknow</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DivTable
