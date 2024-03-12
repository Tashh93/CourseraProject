import React from 'react';
import recipes from '../recipes';

const Menu = () => {
    return(
        <div className='menu-header'>
            <div className='menu-header'>
                <h2>This week's specials!</h2>
                <button>Menu</button>
            </div>

            <div className='cards'>
                {
                    recipes.map(recipe => <div key={recipes.id} className='menu-items'>
                    <img src={recipe.image} alt='' />
                    <div className='menu-content'>
                        <div className='heading'>
                            <h5>{recipe.title}</h5>
                            <p>{recipe.price}</p>
                        </div>
                    </div>
                        <p>{recipe.description}</p>
                        <button className='orderBtn'>Order</button>

                    </div>)
                }
            </div>
        </div>
    )
    }
export default Menu;
