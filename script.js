


Vue.filter('currency', function(value) {
    return '$' + value.toFixed(2);
});

var demo = new Vue({
    el: '#main',
    data: {
    items: [
        {
            name: 'Milk',
            price: 2,
            active:false
        },{
            name: 'Eggs',
            price: 2,
            active:false
        },{
            name: 'Chicken',
            price: 6,
            active:false
        },{
            name: 'Ground Beef',
            price: 3,
            active:false
        },{
            name: 'Chips',
            price: 2,
            active:false
        },{  
            name: 'Salsa',
            price: 3,
            active:false
        },{      
            name: 'Yogurt',
            price: 2,
            active:false
        },{  
            name: 'Cheese',
            price: 4,
            active:false
        }
    ]
},
        methods: {
            toggleActive:function(s) {
                s.active = !s.active;
            },
            total: function() {
                var total = 0;

            this.items.forEach(function(s) {
                if (s.active){
                total += s.price;
            }
        });
            return total;
        }
    }
});

