import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiCircle } from 'react-icons/fi';
import { useQuery } from 'react-apollo';
import { FETCH_USER } from '../../graphql/queries';
import Logout from '../session/logout';
import './nav.css'

export default function Nav() {

    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(0);
    const { loading, data } = useQuery(FETCH_USER);

    if (loading) return null;
    else {
        return <div className="nav">
            <Link className={active === 1 ? "active nav-link" : "nav-link"} onClick={() => setActive(1)} to="/today">Today</Link>
            <Link className={active === 2 ? "active nav-link" : "nav-link"} onClick={() => setActive(2)} to="/week">This Week</Link>
            <Link className={active === 3 ? "active nav-link" : "nav-link"} onClick={() => setActive(3)} to="/month">This Month</Link>
            <Link className={active === 4 ? "active nav-link" : "nav-link"} onClick={() => setActive(4)} to="/missed">Missed</Link>
            <Link className={active === 5 ? "active nav-link" : "nav-link"} onClick={() => setActive(5)} to="/odots">All</Link>
            <div className="nav-link" onClick={() => { setOpen(!open); setActive(0) }}>
                <FiChevronRight className={open ? "nav-open" : "nav-close"}/>
                Odots
            </div>
            {open ? <div className="nav-odots">
                {data.user.odots.map((odot, i) => (
                    <Link className={active === i + 6 ? "active nav-link" : "nav-link"} onClick={() => setActive(i + 6)} to={`/odots/${odot.id}`} key={i}>
                        <FiCircle color={odot.color}/>
                        {odot.title}
                    </Link>
                ))}
            </div> : null }
            <Logout className="nav-link"/>
        </div>
    }
}