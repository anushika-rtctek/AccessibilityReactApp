import React from 'react'
import './DivTable.css'

function DivTable() {
    return (
        <div className='Table'>
            <div className='Title'>
                <h2>Table using DIV tag</h2>
            </div>
            <div className='Heading'>
                <div className='Cell' itemScope='col'>
                    Heading 1
                </div>
                <div className='Cell' itemScope='col'>
                    Heading 2
                </div>
                <div className='Cell' itemScope='col'>
                    Heading 3
                </div>
            </div>
            <div className='Row'>
                <div className='Cell'>
                    Content 1
                </div>
                <div className='Cell' itemScope='row'>
                    Content 2
                </div>
                <div className='Cell'>
                    Content 3
                </div>
            </div>
            <div className='Row'>
                <div className='Cell'>
                    Content 1
                </div>
                <div className='Cell' itemScope='row'>
                    Content 2
                </div>
                <div className='Cell'>
                    Content 3
                </div>
            </div>
            <div className='Row'>
                <div className='Cell'>
                    Content 1
                </div>
                <div className='Cell' itemScope='row'>
                    Content 2
                </div>
                <div className='Cell'>
                    Content 3
                </div>
            </div>
        </div>
    )
}

export default DivTable
