'use strict';

//require in express
const express= require('express');
const app = express();

//set method to add properties onto app object- how we set up pug
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res, next)=>{
    res.render('index', {
        //all this gets sent to the pug index template in the views file
        inactivePage1:'/about',
        inactivePage2:'/inventory',
        active: 'Home',
        inactive1:'About',
        inactive2:'Inventory'
    });
})

app.get('/about', (req, res, next)=>{//name of route is first arg  (localhost:3000/article)
        res.render('about', {//name of template to render
            //information here
            inactivePage1:'/',
            inactivePage2:'/inventory',
            active:'About',
            inactive1:'Home',
            inactive2: 'Inventory'
        })
    })

let bakeryArr=[{name:'Muffins', price:1.99},{name:'Cookies', price:2.59},{name:'Pastries', price:3.75 },{name:'Cannoli', price:5.25},{name:'Cake', price:9.99}]
app.get('/inventory', (req, res, next)=>{//name of route is first arg  (localhost:3000/article)
    res.render('inventory', {//name of template to render
            //information here
            inactivePage1:'/',
            inactivePage2:'/about',
            active:'Inventory',
            inactive1:'Home',
            inactive2:'About',
            sweets:bakeryArr
    })
})
app.listen(3000, ()=>{
        console.log('listening on port 3000')
});