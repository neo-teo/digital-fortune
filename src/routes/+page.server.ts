import { RADIO, TOOLS, READING } from '$lib/data/website_data'

function getRandomItems<T>(array: T[], count: number): T[] {
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

export function load() {
    const radio = getRandomItems(RADIO, 3).map((item, index) => ({
        ...item,
        cover: '/cards/unlucky.jpeg',
        title: `Radio ${String(index + 1).padStart(3, '0')}`
    }));

    const tools = getRandomItems(TOOLS, 3).map((item, index) => ({
        ...item,
        cover: '/cards/park.jpeg',
        title: `Website ${String(index + 1).padStart(3, '0')}`
    }));

    const reading = getRandomItems(READING, 3).map((item, index) => ({
        ...item,
        cover: '/cards/school.jpeg',
        title: `Are.na Channel ${String(index + 1).padStart(3, '0')}`
    }));

    const fortune = [
        {
            introText: 'Let\'s start with a soundtrack for your day. Just a moment while I pick out a few stations I think you might like.',
            outroText: 'These stations should serve you well.',
            cards: radio
        },
        {
            introText: 'Now let\'s dive into some special sites. I like you so I\'ll gather some extra special ones.',
            outroText: 'Keep these places in mind as you move through your day.',
            cards: tools
        },
        {
            introText: 'Are.na is a special place. Let\'s see what it has in store for you.',
            outroText: 'That\'s all for now. Check back tomorrow for new waves.',
            cards: reading
        }
    ];

    return { fortune };
} 