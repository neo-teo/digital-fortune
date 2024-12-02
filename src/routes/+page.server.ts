import { TRAIN_LINES, STREETS, SLICES, PARKS } from '$lib/data/nyc_data';
import { CARS, FRUITS } from '$lib/data/item_data';

function getRandomTrainLine() {
    const randomIndex = Math.floor(Math.random() * TRAIN_LINES.length);
    return TRAIN_LINES[randomIndex];
}

function getRandomStreet() {
    const randomIndex = Math.floor(Math.random() * STREETS.length);
    return STREETS[randomIndex];
}

function getRandomSlice() {
    const randomIndex = Math.floor(Math.random() * SLICES.length);
    return SLICES[randomIndex];
}

function getRandomPark() {
    const randomIndex = Math.floor(Math.random() * PARKS.length);
    return PARKS[randomIndex];
}

function getRandomCar() {
    const randomIndex = Math.floor(Math.random() * CARS.length);
    return CARS[randomIndex];
}

function getRandomFruit() {
    const randomIndex = Math.floor(Math.random() * FRUITS.length);
    return FRUITS[randomIndex];
}

export function load() {

    let car = getRandomCar();
    let fruit = getRandomFruit();

    const misc_data = [
        {
            cover: '/cards/car.jpeg',
            title: '#1',
            label: 'If you see a ' + car.label + ' today, take a moment to consider its surroundings.',
            src: car.src
        },
        {
            cover: '/cards/unlucky.jpeg',
            title: '#2',
            label: "Don't let an " + fruit.label + " ruin your day.",
            src: fruit.src
        },
        {
            cover: '/cards/diner.jpeg',
            title: '#3',
            label: "Consider going for a walk between 12:50PM and 1:10PM today",
            // src: '/fruit/orange.png'
        },
    ]

    let trainLine = getRandomTrainLine();
    let street = getRandomStreet();
    let slice = getRandomSlice();
    let park = getRandomPark();

    const nyc_data = [
        {
            cover: '/cards/construction.jpeg',
            title: '#1',
            label: 'Time to ride the ' + trainLine.label + ". It will guide you well.",
            src: trainLine.src
        },
        {
            cover: '/cards/slice.jpeg',
            title: '#2',
            label: 'Get a slice at ' + slice.label + ", maybe even two.",
            src: slice.src
        },
        {
            cover: '/cards/park.jpeg',
            title: '#3',
            label: 'Only good things can come from hanging around ' + park.label + " today",
            src: park.src
        },
        // {
        //     cover: '/cards/car.jpeg',
        //     title: 'Lucky Street',
        //     label: street.label,
        //     src: street.src
        // },
        // {
        //     cover: '/cards/diner.jpeg',
        //     title: 'Lucky Diner',
        //     src: '/fruit/orange.png'
        // },
        // {
        //     cover: '/cards/bar.jpeg',
        //     title: 'Lucky Bar',
        //     src: '/fruit/orange.png'
        // },
        // {
        //     cover: '/cards/deli.jpeg',
        //     title: 'Lucky Deli',
        //     src: '/fruit/orange.png'
        // },
        // {
        //     title: 'Lucky Library',
        //     src: '/fruit/orange.png'
        // },
    ]

    const love_data = [
        {
            cover: '/cards/school.jpeg',
            title: '#1',
            label: 'You are likely to have an encounter today. It is unclear if it will be for the better or worse.',
        },
        {
            cover: '/cards/friend.jpeg',
            title: '#2',
            label: 'Today is not the day to send the message you\'ve been thinking of. Take time to reflect.',
        },
        {
            cover: '/cards/bar.jpeg',
            title: '#3',
            label: '???',
            src: '/cat.gif'
        },
    ]

    return {
        misc_data,
        nyc_data,
        love_data
    };
} 