import { TRAIN_LINES, STREETS, SLICES, PARKS } from '$lib/data/nyc_data';

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

export function load() {

    let trainLine = getRandomTrainLine();
    let street = getRandomStreet();
    let slice = getRandomSlice();
    let park = getRandomPark();

    const nyc_data = [
        {
            cover: '/cards/construction.jpeg',
            title: 'Lucky Subway',
            label: trainLine.label,
            src: trainLine.src
        },
        {
            cover: '/cards/slice.jpeg',
            title: 'Lucky Slice',
            label: slice.label,
            src: slice.src
        },
        {
            cover: '/cards/park.jpeg',
            title: 'Lucky Park',
            label: park.label,
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

    const misc_data = [
        {
            cover: '/cards/car.jpeg',
            title: 'Lucky Car',
            src: '/fruit/orange.png'
        },
        {
            title: 'Lucky Emoji',
            src: '/fruit/orange.png'
        },
        {
            title: 'Lucky Ting',
            src: '/fruit/orange.png'
        },
    ]

    const love_data = [
        {
            title: 'Love #1',
            label: 'Run Into Crush',
            src: '/fruit/orange.png'
        },
        {
            title: 'Love #2',
            label: 'Send the message you\'ve been thinking of',
            src: '/fruit/orange.png'
        },
        {
            title: 'Lucky #3',
            label: 'something else',
            src: '/fruit/orange.png'
        },
    ]

    return {
        misc_data,
        nyc_data,
        love_data
    };
} 