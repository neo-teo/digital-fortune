import { TRAIN_LINES, STREETS, SLICES, PARKS } from '$lib/data/nyc_data';
import { CARS, FRUITS } from '$lib/data/item_data';

function getRandomItem<T>(array: T[]): T {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

export function load() {

    // turn into get 3 radio stations ... 
    let car = getRandomItem(CARS);
    let fruit = getRandomItem(FRUITS);

    const radio_data = [
        {
            cover: '/cards/unlucky.jpeg',
            title: 'Radio 001',
            label: 'If you see a ' + car.label + ' today, take a moment to consider its surroundings.',
            src: car.src
        },
        {
            cover: '/cards/unlucky.jpeg',
            title: 'Radio 102',
            label: "Don't let an " + fruit.label + " ruin your day.",
            src: fruit.src
        },
        {
            cover: '/cards/unlucky.jpeg',
            title: 'Radio 037',
            label: "Consider going for a walk between 12:50PM and 1:10PM today",
            // src: '/fruit/orange.png'
        },
    ]

    // turn into get 3 sites ... 
    let trainLine = getRandomItem(TRAIN_LINES);
    let street = getRandomItem(STREETS);
    let slice = getRandomItem(SLICES);
    let park = getRandomItem(PARKS);

    const site_data = [
        {
            cover: '/cards/park.jpeg',
            title: 'Website 001',
            label: 'Time to ride the ' + trainLine.label + ". It will guide you well.",
            src: trainLine.src
        },
        {
            cover: '/cards/park.jpeg',
            title: 'Website 021',
            label: 'Get a slice at ' + slice.label + ", maybe even two.",
            src: slice.src
        },
        {
            cover: '/cards/park.jpeg',
            title: 'Website 008',
            label: 'Only good things can come from hanging around ' + park.label + " today",
            src: park.src
        },
    ]

    const arena_data = [
        {
            cover: '/cards/school.jpeg',
            title: 'Are.na Channel 007',
            label: 'You are likely to have an encounter today. It is unclear if it will be for the better or worse.',
        },
        {
            cover: '/cards/school.jpeg',
            title: 'Are.na Channel 022',
            label: 'Today is not the day to send the message you\'ve been thinking of. Take time to reflect.',
        },
        {
            cover: '/cards/school.jpeg',
            title: 'Are.na Channel 010',
            label: '???',
            src: '/cat.gif'
        },
    ]

    const fortune = [
        {
            id: 'websites',
            introText: 'Let\'s start with a soundtrack for your day. Just a moment while I pick out a few stations I think you might like.',
            outroText: 'These stations should serve you well.',
            cards: radio_data
        },
        {
            id: 'nyc',
            introText: 'Now let\'s dive into some special sites. I like you so I\'ll gather some extra special ones.',
            outroText: 'Keep these places in mind as you move through your day.',
            cards: site_data
        },
        {
            id: 'love',
            introText: 'Are.na is a special place. Let\'s see what it has in store for you.',
            outroText: 'That\'s all for now. Check back tomorrow for new waves.',
            cards: arena_data
        }
    ];

    return { fortune };
} 