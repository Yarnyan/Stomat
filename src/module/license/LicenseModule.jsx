import React, { useEffect } from 'react'

export default function LicenseModule() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="License">
            <div className="License__body">
                <img src="/source/image/lic3.png" alt="" />
                <img src="/source/image/lic2.png" alt="" />
                <img src="/source/image/lic.png" alt="" />
            </div>
        </div>
    )
}
