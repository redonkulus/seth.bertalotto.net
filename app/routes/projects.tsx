import { Wide } from '~/components/layouts';
const projects = [
    {
        desc: 'Easy to use web application to help plan your basketball game lineup.',
        image: '/images/projects/plan-my-lineup.jpg',
        link: 'http://simplyflashcards.org/',
        name: 'Plan My Lineup',
        role: 'Creator',
        tech: 'html, css, javascript',
    },
    {
        desc: 'Simple web application for English language learners to practice letters, numbers and sight words.',
        image: '/images/projects/flashcards.jpg',
        link: 'http://simplyflashcards.org/',
        name: 'Simply Flashcards',
        role: 'Creator',
        tech: 'html, css, javascript',
    },
    {
        desc: 'Software as a service web application that allows companies to manage their customers and orders online. The website was developed from scratch with high speed performance and scalability in mind. User permission management, location based analytics and advanced employee scheduling application are among the tools built within this system.',
        image: '/images/projects/ct.png',
        link: 'https://customertrackr.com',
        name: 'CustomerTracker',
        role: 'Founder / Chief Technology Officer',
        tech: 'html, css, javascript, php, mysql, apache',
    },
    {
        desc: 'Owner and day to day maintainer of MIDI Delight Ringtones; free downloadable ringtones for mobile phones. Built the site infrastructure using PHP and MySQL from scratch. Used Front End technologies including semantic HTML, CSS, JavaScript, XML and Search Engine Optimization to provide users with a one stop resource for all things ringtone related. Developed a community based social network to allow users to build profiles and share ringtones with each other.',
        image: '/images/projects/midi-delight.png',
        link: 'https://mididelight.com',
        name: 'MIDI Delight',
        role: 'Founder',
        tech: 'html, css, javascript, php, mysql, apache',
    },
];

export default function Projects() {
    return (
        <Wide>
            <h1>🚧 Projects</h1>

            <p>Apps, utilities and other things I have built and maintained over the years.</p>

            <ul className="pb-0">
                {projects.map(({ desc, image, link, name, role, tech }) => (
                    <li key={name} className="flex mb-10">
                        <img className="basis-1/3 mr-4 hidden lg:block" alt={`${name} Logo`} src={image} width="300" />

                        <div className="lg:basis-2/3">
                            <h2>
                                <a href={link}>{name}</a>
                            </h2>

                            <p className="text-sm pb-4 text-gray-500">
                                <em>{role}</em>
                            </p>

                            <p className="pb-4">{desc}</p>

                            <h4 className="sr-only">Technologies Used</h4>

                            <p className="text-sm text-gray-500">{tech}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </Wide>
    );
}
