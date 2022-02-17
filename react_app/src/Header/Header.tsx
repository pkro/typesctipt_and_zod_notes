import React from 'react';

export type HeaderProps = {
    title: string;
    color?: string;
}

const Header = ({title, color}: HeaderProps) => {
    return (<header>
        <h1 style={{color: color ? color : 'blue'}}>{title}</h1>
    </header>);
}

export default Header;