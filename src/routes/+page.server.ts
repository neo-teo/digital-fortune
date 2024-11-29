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

    return {
        nyc_data: [
            {
                title: 'lucky train line',
                label: trainLine.label,
                src: trainLine.src
            },
            {
                title: 'lucky street',
                label: street.label,
                src: street.src
            },
            {
                title: 'lucky slice',
                label: slice.label,
                src: slice.src
            },
            {
                title: 'lucky diner',
                src: '/fruit/orange.png'
            },
            {
                title: 'lucky bar',
                src: '/fruit/orange.png'
            },
            {
                title: 'lucky park',
                label: park.label,
                src: park.src
            },
            {
                title: 'lucky deli',
                src: '/fruit/orange.png'
            },
            {
                title: 'lucky library',
                src: '/fruit/orange.png'
            },
            {
                title: 'lucky emoji',
                src: '/fruit/orange.png'
            },
            {
                title: 'run into crush',
                src: '/fruit/orange.png'
            },
        ]
    };
} 