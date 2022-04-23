import { Link } from 'remix';
import { Comfortable } from '~/components/Layouts';

const randomItem = (arr: any) => arr[Math.floor(Math.random() * arr.length)];
const greetingList = [
    { term: 'Aloha', lang: 'Hawaiian', abbr: 'haw' },
    { term: 'Bangawoyo', lang: 'Korean', abbr: 'ko' },
    { term: 'Ciao', lang: 'Italian', abbr: 'it' },
    { term: 'F&aacute;ilte', lang: 'Irish', abbr: 'ga' },
    { term: 'Guten Tag', lang: 'German', abbr: 'de' },
    { term: 'Hala', lang: 'Arabic', abbr: 'ar' },
    { term: 'Hej', lang: 'Swedish', abbr: 'sv' },
    { term: 'Hello', lang: 'English', abbr: 'en' },
    { term: 'Hi', lang: 'English', abbr: 'en' },
    { term: 'Hoi', lang: 'Dutch', abbr: 'nl' },
    { term: 'Hola', lang: 'Spanish', abbr: 'es' },
    { term: 'Howdy', lang: 'English', abbr: 'en' },
    { term: 'Konnichiwa', lang: 'Japanese', abbr: 'jp' },
    { term: 'Kumusta', lang: 'Tagalog', abbr: 'tl' },
    { term: 'Namaste', lang: 'Hindi', abbr: 'hi' },
    { term: 'Ni hao', lang: 'Mandarin', abbr: 'zh' },
    { term: 'Ol&aacute;', lang: 'Portuguese', abbr: 'pt' },
    { term: 'Shalom', lang: 'Hebrew', abbr: 'he' },
    { term: 'Salut', lang: 'French', abbr: 'fr' },
    { term: 'Szia', lang: 'Hungarian', abbr: 'hu' },
    { term: 'Welcome', lang: 'English', abbr: 'en' },
    { term: "What's Up", lang: 'English', abbr: 'en' },
    { term: 'Yasou', lang: 'Greek', abbr: 'el' },
    { term: 'Yo', lang: 'English', abbr: 'en' },
];
const greeting = randomItem(greetingList);
const emoji = randomItem(['👋', '🤗']);

export default function Index() {
    return (
        <Comfortable>
            <article>
                <h1
                    dangerouslySetInnerHTML={{ __html: `${greeting['term']}! ${emoji}` }}
                    title={greeting.abbr !== 'en' ? `Now you know how to greet people in ${greeting.lang}` : ''}
                />

                <p>
                    I have been developing scalable, complex web applications for over 15 years and have learned what it
                    takes to build a performant, well-tested and resilient application that engages users. I’ve worked
                    closely with product managers, designers and quality engineers which has given me extensive
                    experience delivering successful projects on tight deadlines.
                </p>
                <p>
                    Outside of work, I maintain many popular <Link to="open-source">Open Source</Link> projects on
                    GitHub. I also like to ride my bike on the open road 🚴 and spending time nurturing my garden 🍅.
                </p>
                <p>
                    I currently work full-time as a Senior Principal Software Engineer at Yahoo. Occasionally, I am
                    available to work on freelance projects. Check out my <Link to="projects">projects</Link> to see my
                    work!
                </p>
            </article>
        </Comfortable>
    );
}
