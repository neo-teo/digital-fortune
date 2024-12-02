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
        3: "Wednesday's digital winds bring interesting changes.",
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
        outroText: 'Would you like to receive your digital fortune?'
    },
    {
        id: 'misc',
        introText: getDayMessage(),
        outroText: 'The next category is New York specific.'
    },
    {
        id: 'nyc',
        introText: 'Let\'s see what New York has in store for you...',
        outroText: 'The next category is love life.'
    },
    {
        id: 'love',
        introText: 'Now, let\'s peek into matters of the heart...',
        outroText: 'That\'s all for now. Come back tomorrow for a new reading.'
    }
]; 