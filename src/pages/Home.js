import React from 'react';
import {Categories, SortPopup,PizzaBlock} from "../components";
import {nanoid} from "nanoid";

function Home({items}) {
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={[
                        'Мясные','Вегетарианская','Гриль','Острые','Закрытые'
                    ]}/>
                <SortPopup items={[{name:'популярности',type:'popular'}, {name:'цене',type: 'price'}, {name:'алфавиту',type:'alphabet'}]} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    items && items.map(item => <PizzaBlock
                        key={nanoid(4)}
                        name={item.name}
                        image={item.imageUrl}
                        price={item.price}
                        types={item.types}
                        sizes={item.sizes}
                    />)
                }
            </div>
        </div>
    );
}

export default Home;