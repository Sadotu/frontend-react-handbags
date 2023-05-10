import React from 'react';
import './App.css';
import Button from './components/Button';
import Product from "./components/Product";
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import brand from "./assets/brand.png"
import our_story from "./assets/our_story.png"
import Tile from "./components/Tile";

const App = () => {
    return (
        <>
            <nav>
                <h1>Handbags & Purses</h1>
                <Button
                    buttonType='button'
                    isDisabled={false}
                    clickHandler={() => console.log('To the collection')}
                >
                    To the collection
                </Button>
                <Button
                    buttonType='button'
                    isDisabled={false}
                    clickHandler={() => console.log('Shop all bags')}
                >
                    Shop all bags
                </Button>
                <Button
                    buttonType='button'
                    isDisabled={true}
                    clickHandler={() => console.log('Pre-orders')}
                >
                    Pre-orders
                </Button>
            </nav>
            <main>
                <Product
                    label="Best Seller"
                    imageSrc={bag1}
                    name="The handy bag"
                    price="€400,-"
                />
                <Product
                    label="Best Seller"
                    imageSrc={bag2}
                    name="The stylish bag"
                    price="€250,-"
                />
                <Product
                    label="New Collection"
                    imageSrc={bag3}
                    name="The simple bag"
                    price="€300,-"
                />
                <Product
                    label="New Collection"
                    imageSrc={bag4}
                    name="The trendy bag"
                    price="€150,-"
                />
            </main>
            <footer>
                <Tile
                    title="The Brand"
                    paragraphs={["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, voluptatibus?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, sint?"]}
                />
                <Tile
                    imageSrc={brand}
                />
                <Tile
                    imageSrc={our_story}
                />
                <Tile
                    title="Our Story"
                    paragraphs={["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, voluptatibus?"]}
                />
            </footer>
        </>
    );
};

export default App;