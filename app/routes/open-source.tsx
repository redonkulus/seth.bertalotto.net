import { Comfortable } from '~/components/Layouts';
export default function OpenSource() {
    return (
        <Comfortable>
            <article>
                <h1>💻 Open Source</h1>

                <p>I actively help maintain the following open source projects on GitHub:</p>

                <ul>
                    <li>
                        <a href="https://fluxible.io/">Fluxible</a> &#8211; Universal Flux application framework
                    </li>
                    <li>
                        <a href="https://formatjs.io/">FormatJS</a> &#8211; Internationalization framework for web apps
                    </li>
                    <li>
                        <a href="https://purecss.io/">Pure.CSS</a> &#8211; A small, simple CSS framework for websites
                    </li>
                </ul>

                <p>
                    Check out my profile on <a href="https://github.com/redonkulus">GitHub</a> to see my other
                    contributions.
                </p>
            </article>
        </Comfortable>
    );
}
