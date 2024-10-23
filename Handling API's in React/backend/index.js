import express from 'express';

const app = express();

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: 'table wooden',
            price: 200,
            image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
            id: 2,
            name: 'modern sofa',
            price: 450,
            image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
            id: 3,
            name: 'glass coffee table',
            price: 120,
            image: 'https://images.pexels.com/photos/1078897/pexels-photo-1078897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
            id: 4,
            name: 'leather armchair',
            price: 300,
            image: 'https://images.pexels.com/photos/1866148/pexels-photo-1866148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
            id: 5,
            name: 'wooden bookshelf',
            price: 180,
            image: 'https://images.pexels.com/photos/159839/pexels-photo-159839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
            id: 6,
            name: 'metal desk lamp',
            price: 50,
            image: 'https://images.pexels.com/photos/1078978/pexels-photo-1078978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }
    ];


    if (req.query.search) {
        const filteredProduct = products.filter(prod => prod.name.includes(req.query.search));
        res.send(filteredProduct);
        return;
    }

    setTimeout(() => {
        res.send(products);
    }, 3000);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});