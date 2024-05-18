import bcrypt from 'bcrypt';


const Customer = [
    {
        name: 'Muhammad Abubakar Siddique',
        username: 'BKR204',
        email: 'abubakar@gamil.com',
        password: bcrypt.hashSync('AB1234',8),
        address: 'WAPDA CITY 204-B B-BLOCK FAISALABAD',
        contact: '03019666199',
        type: 'C',
    },
    {
        name: 'Hateem Khurram',
        username: 'htm001',
        email: 'hateem@gamil.com',
        password: bcrypt.hashSync('hello123',8),
        address: 'WAPDA CITY 204-B B-BLOCK FAISALABAD',
        contact: '03011111111',
        type: 'C',
    },
    {
        name: 'Ali Ahmed',
        username: 'AA0054',
        email: 'ali@gamil.com',
        password: bcrypt.hashSync('AA331',8),
        address: 'PEOPLE COLONY 101-A A-BLOCK FAISALABAD',
        contact: '03009099999',
        type: 'C',
    },
    {
        name: 'Admin User',
        username: 'Admin01',
        email: 'admin@gamil.com',
        password: bcrypt.hashSync('123456',8),
        address: 'Bahria Town, 101-A A-BLOCK, Lahore',
        contact: '0300222211',
        type: 'A',
    },
    {
        name: 'Abdullah Zafar',
        username: 'AZ001',
        email: 'abdullah@gamil.com',
        password: bcrypt.hashSync('AA331',8),
        address: 'PEOPLE COLONY 101-A A-BLOCK FAISALABAD',
        contact: '03009099999',
        type: 'R',
    },
]
export default Customer;