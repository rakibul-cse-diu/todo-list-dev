import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {

    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div className='nav-link'>
            <Link
                style={{
                    fontWeight: "600",
                    color: match ? "#1A91FA" : "#CEDBDC",
                    boxShadow: match ? "inset -6.22302px -6.22302px 6.22302px #3B4451, inset 3.73381px 3.73381px 6.22302px #000000" : "-6.22302px -6.22302px 18.6691px #3B4451, 6.22302px 6.22302px 18.6691px #000000",
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
};

export default CustomLink;