import React from 'react'

function PageHeader({header}) {
    return (
        <h1 className="text-3xl md:text-4xl font-bold mb-10">{header}</h1>
    )
}

export default PageHeader