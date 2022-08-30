import React, { useEffect, useLayoutEffect, useState } from 'react'

function Content() {
    console.log('re-render')
    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default React.memo(Content);
