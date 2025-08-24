import React from 'react'
import { useLocation } from 'react-router-dom';

function ViewMore() {
    const item = useLocation();
    return (
        <div>
            {console.log(item.state)}
        </div>
    )
}

export default ViewMore
