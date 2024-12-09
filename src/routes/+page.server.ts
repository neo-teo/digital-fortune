import { RADIO, TOOLS, READING } from '$lib/data/website_data'

function getRandomItems<T>(array: T[], count: number): T[] {
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

function padNumber(num: number): string {
    return String(num).padStart(3, '0')
}

export function load() {
    const radio = getRandomItems(RADIO, 3).map((item, index) => ({
        ...item,
        cover: '/cards/bar.jpeg',
        title: `Radio ${padNumber(item.number)}`
    }));

    const tools = getRandomItems(TOOLS, 3).map((item, index) => ({
        ...item,
        cover: '/cards/construction.jpeg',
        title: `Decorator ${padNumber(item.number)}`
    }));

    const reading = getRandomItems(READING, 3).map((item, index) => ({
        ...item,
        cover: '/cards/friend.jpeg',
        title: `Reading ${padNumber(item.number)}`
    }));

    const fortune = [
        {
            introText: 'I love music. I sometimes DJ at the local data lake parties, so I\'m always looking for a fresh track to add to my mix. Just a moment while I pick out a few internet radio stations I think you might like.',
            outroText: 'Ooo one of my favorites ! I wonder what\'s on right now...',
            cards: radio
        },
        {
            introText: 'If you\'re looking to rennovate your digital home, these tools should come in handy. Take your pick!',
            outroText: 'Great pick ! My pond has been getting so many compliments from visiting ducks ever since I discovered that one.',
            cards: tools
        },
        {
            introText: 'My favorite activity to kick back during my server\'s downtime is reading. Here are a few of my favorites for you to pick from.',
            outroText: 'That\'s all for now. You can find me back here tomorrow for new webs to surf.',
            cards: reading
        }
    ];

    return { fortune };
} 