export interface Chapter {
    id: string;
    introText: string;
    outroText: string;
}

function getDayMessage(): string {
    const day = new Date().getDay();
    return {
        0: "Sunday's digital energies are especially strong today.",
        1: "Monday's digital waves are realigning your path.",
        2: "Tuesday's binary streams are particularly clear.",
        3: "Wednesday's binary streams are particularly clear.",
        4: "Thursday's electronic pulses are revealing secrets.",
        5: "Friday's digital stars are especially bright.",
        6: "Saturday's virtual forces are in perfect harmony."
    }[day] || "";
}

const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

export const chapters: Chapter[] = [
    {
        id: 'intro',
        introText: `Today is ${today}.`,
        outroText: 'Would you like to take a look at your digital fortune?'
    },
    {
        id: 'misc',
        introText: getDayMessage(),
        outroText: 'The next category is about the city you live in.'
    },
    {
        id: 'nyc',
        introText: 'Let\'s see what the city has in store for you...',
        outroText: 'The next category is about relationships.'
    },
    {
        id: 'love',
        introText: 'Hmm ...',
        outroText: 'That\'s all for now. Check back tomorrow for new reading.'
    }
]; 