const TRAIN_LINES = [
    '1',
    '2',
    '3',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'J',
    'L',
    'M',
    'N',
    'Q',
    'R',
    'W',
    'Z'
];

function getRandomTrainLine() {
    const randomIndex = Math.floor(Math.random() * TRAIN_LINES.length);
    return `/train_lines/${TRAIN_LINES[randomIndex]}.jpg`;
}

export let nyc_data = [
    {
        title: 'lucky train line',
        number: 0,
        src: getRandomTrainLine()
    },
    {
        title: 'lucky street',
        number: 0,
        src: '/animals/000.png'
    },
    {
        title: 'lucky slice',
        number: 0,
        src: '/fruit/orange.png'
    },
    {
        title: 'lucky park',
        number: 0,
        src: '/fruit/orange.png'
    },
    {
        title: 'lucky deli',
        number: 0,
        src: '/fruit/orange.png'
    },
    {
        title: 'lucky library',
        number: 0,
        src: '/fruit/orange.png'
    },
    {
        title: 'lucky emoji',
        number: 0,
        src: '/fruit/orange.png'
    },
    {
        title: 'run into crush',
        number: 0,
        src: '/fruit/orange.png'
    },
];