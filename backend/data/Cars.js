import Customer from "./customer.js";

const Cars = [
    {
        name: 'Civic Type-R',
        image: '/images/civic.png',
        description: 'Civic Type-r is a four seater performance sedan.',
        availability: true,
        brand: 'Honda',
        category: 'Sedan',
        price: 10000,
        regNum: 'LEC-209',
        
    },
    {
        name: 'Audi R8 2012',
        image: '/images/audi1.png',
        description: 'Audi R8 is a 2 seater super car.',
        availability: true, 
        brand: 'Audi',
        category: '2 Door',
        regNum: 'FSD-209',
        price: 50000,
    },
    {
        name: 'Ducati 575',
        image: '/images/bike1.png',
        description: 'Ducati 575 is a 200 horsepower bike.',
        availability: true,
        brand: 'Docuati',
        category: 'Bike',
        regNum: 'LEC-1',
        price: 60000,
    },
    {
        name: 'Toyota HighRoof Eclipse',
        image: '/images/BusOrig.png',
        description: 'It is a 20 seater bus. With air conditing facility also.',
        availability: true,
        brand: 'Toyota',
        category: 'Bus',
        regNum: 'LEC-5018',
        price: 20000,
    },
    {
        name: 'IVECO 602',
        image: '/images/redtruck.png',
        description: 'It is a truck can have 10/20 wheeler truck carrying the container.',
        availability: true,
        brand: 'IVECO',
        category: 'Truck',
        regNum: 'ABB-219',
        price: 100000,
    },
]

export default Cars;