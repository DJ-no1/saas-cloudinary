import React from 'react'

const docPage = () => {
    return (
        <div>

            <button className="btn btn-outline btn-success">Success</button>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">Click</div>
                <div
                    tabIndex={0}
                    className="dropdown-content card card-compact bg-primary text-primary-content z-[1] w-64 p-2 shadow">
                    <div className="card-body">
                        <h3 className="card-title">Card title!</h3>
                        <p>you can use any element as a dropdown.</p>
                    </div>
                </div>
            </div>

            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li><a>Home</a></li>
                        <li><a>social Share </a></li>
                    </ul>
                </div>
            </div>

        </div>




    )
}

export default docPage