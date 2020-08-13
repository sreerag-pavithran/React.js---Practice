import React from 'react';
import HeaderIcons from './headericons.componets';
import './header.css';


class Header extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            navItems:[
                {
                    link: '/',
                    name: 'Home',
                    id: 1
                },
                {
                    link: '/dashboard',
                    name: 'Dashboard',
                    id: 2
                },
                {
                    link: '/portal',
                    name: 'Student Portal',
                    id: 3
                },
                {
                    link: '/session',
                    name: 'Session',
                    id: 4
                },

            ]
        }
    }

    render(){
        return(
           <div className="header">
           
           {
               this.state.navItems.map(({id, ...otherHeaderProps}) => (
                   <HeaderIcons key={id} {...otherHeaderProps}/>
               ))
           }
           
           </div>
        )
    }
}

export default Header;