import { META_TITLE } from '~/libs/const';
import { Comfortable } from '~/components/Layouts';

export function meta() {
    return { title: `Skills | ${META_TITLE}` };
}

export default function Skills() {
    return (
        <Comfortable>
            <article>
                <h1>Skills</h1>
                <p>
                    <strong>JavaScript, expert:</strong> Immensely passionate about JavaScript and related technology:
                    Node.js, React, Web Components, Webpack, etc. Have been developing with TypeScript for many years
                    now too.
                </p>
                <p>
                    <strong>ReactJS, expert:</strong> Strong understanding of React and its ecosystem. Helped maintain
                    numerous open source React components and libraries (i.e, Fluxible React library).{' '}
                </p>
                <p>
                    <strong>HTML and CSS, expert:</strong> Detailed understanding of responsive design, accessibility,
                    semantic markup, SEO and CSS animations. Extensive experience working with designers to build
                    complex interactive web apps.
                </p>
                <p>
                    <strong>Operations, learning:</strong> Some experience with AWS, Heroku, Jenkins, Docker, and
                    others.
                </p>
                <p>
                    <strong>PHP, fading:</strong> Built many previous sites and frameworks with LAMP stack, but have not
                    done so in many years.
                </p>
            </article>
        </Comfortable>
    );
}
