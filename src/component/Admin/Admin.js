import React from 'react';
import { Link } from 'react-router-dom';
import AddAdmin from '../AddAdmin/AddAdmin';

const Admin = () => {
    return (
        <>
            <div className="adminPanel">
                <ul>
                    <Link to='/addNews'><li>Add News</li></Link>
                    <Link to="/addAdmin"><li>Add admin</li></Link>
                    <Link to="/addTopNews"><li>Add top News</li></Link>
                </ul>
            </div>
        </>
    );
};

export default Admin;