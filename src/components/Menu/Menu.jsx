import React from 'react';
import './Menu.css';

const Menu = () => {
    return (
        <div className="menuContainer">
            <div className="BoxContainer">
                <div className="innerBoxMenu">
                    <div className="leftMenu">
                        <div className="textsLeftBox">
                            <h6>Menu</h6>
                            <p>We change our menu every season. Here is what we are currently dishing up.</p>
                        </div>
                        <div className="buttons">
                            <button  button className='btn fullColor'>Food Menu</button >
                            <button  button className='btn emptyInner'>Drinks Menu</button >
                            <button  button className='btn emptyInner'>Takeaway Menu</button>
                        </div>
                    </div>
                    <div className="rightMenu">
                        <img src="../../../assets/menu.jpg" alt="Menu Image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
