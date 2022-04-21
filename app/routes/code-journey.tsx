import React, { useState } from 'react';
import Figure from '~/components/figure';
import useIntersect from '~/libs/useIntersect';
import { Wide } from '~/components/layouts';

const generateId = (text: string) => text.replace(/[^a-z0-9]/gi, '').toLowerCase();

// Create a data structure of headers to use for table of contents rendering
const headers = {
    '1996': '1996: Discovery',
    '1998': '1998: Static Websites',
    '2000': '2000: Semantic Markup',
    '2004': '2004: Dynamic Websites',
    '2009': '2009: Server-side JS',
    '2013': '2013: Universal Webapps',
    '2016': '2016: Typed JS',
    Future: 'Future',
} as Record<string, string>;

/**
 * This header sets up an interaction observer to set the active item in the floating table of contents
 */
const Header = ({ setActive, title }: { setActive: React.Dispatch<React.SetStateAction<any>>; title: string }) => {
    const [setNode] = useIntersect({ rootMargin: '0px', setActive, threshold: 1.0 });
    const id = generateId(title);
    return (
        // @ts-ignore ts doesn't like passing in set state into ref
        <h2 id={id} ref={setNode}>
            {title}
        </h2>
    );
};

export default function CodeJourney() {
    const [active, setActive] = useState('');
    return (
        <Wide>
            <h1>🛣️ Code Journey</h1>

            <div className="relative lg:max-w-2xl">
                <ul className="hidden lg:block fixed top-[230px] right-[20%] pb-0 pr-[10px] text-right list-none border-r-[1px] border-black dark:border-white">
                    {Object.keys(headers).map((header) => {
                        const id = generateId(headers[header]);
                        return (
                            <li
                                key={id}
                                className="relative py-1 after:bg-black after:dark:bg-white after:rounded-[5px] after:content-[''] after:w-[5px] after:h-[5px] after:absolute after:top-[43%] after:right-[-13px]"
                            >
                                <a href={`#${id}`} className={active === id ? 'text-black dark:text-amber-300' : ''}>
                                    {headers[header]}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <p>
                    All developers take different paths throughout their coding careers. I like to call this their
                    &#8220;Code Journey&#8221;. This is my story into how I learned to program and what keeps me doing
                    it to this day.
                </p>

                <Header setActive={setActive} title={headers['1996']} />

                <Figure
                    caption="1996 Packard Bell D160"
                    height="263"
                    src="/images/code-journey/packard-bell-d160.jpg"
                    width="164"
                />

                <p>
                    My first computer was my families&#8217;{' '}
                    <a href="http://pbclub.pwcsite.com/wiki/index.php/Multimedia_D160">1996 Packard Bell D160</a>. With
                    133MHz processor and only 8MB pre-installed, I remembering thinking this was the best computer that
                    was ever made! However, just trying to play a video game like Madden 98 was impossible, without
                    upgrading it to 16MB of memory.{' '}
                </p>

                <p>
                    At this time, the internet was in full swing. I would go to my friends house after school and try to
                    squeeze out as much of the internet we could in the free 200 minutes of AOL usage. I also had access
                    to{' '}
                    <a href="https://www.vice.com/en/article/4xaqe9/why-webtvs-remote-controlled-internet-failed-to-take-off">
                        WebTV
                    </a>
                    , an early TV based web surfing device, many years ahead of its time, but horribly slow and hard to
                    use.
                </p>

                <p>
                    Soon after getting online, I got more curious about how various websites I visited were made. I
                    would see some interesting interaction, like menu drop downs and try to figure out how it was done.{' '}
                </p>

                <Figure
                    align="right"
                    caption="1998 Microsoft.com Screenshot"
                    src="/images/code-journey/microsoft-1998.png"
                    width="300"
                    height="169"
                />

                <p>
                    One of my favorites sites to peak under the hood was the Microsoft homepage, which had the
                    aforementioned drop down menus. Viewing source on this page presented a mess of tables and div tags
                    that was almost incomprehensible to understand. My tried and true tactic was to copy the source code
                    into MS Notepad and little by little delete code and check to see that the menu&#8217;s still
                    worked. Then I would repeat this until I was left with the &#8220;minimal&#8221; amount of code to
                    make it work.{' '}
                </p>

                <p>
                    Eventually, I wanted to understand the code more than just copy paste other peoples work. So I
                    ditched Notepad and started using Macromedia&#8217;s Dreamweaver editor. I still wrote my HTML from
                    scratch, but dabbled in their interactive libraries that added &#8220;mm_&#8221; prefixes all over
                    the code base. Learning how to do image mouse over effects and mouse trail animations was a good to
                    way learn how interactive and expressive websites could be.
                </p>

                <Header setActive={setActive} title={headers['1998']} />

                <p>
                    Fast forward a year or two later and I was building all sorts of websites. I remember having sites
                    for my favorite music bands, a site of 100&#8217;s of animated gif&#8217;s I found on the web (all
                    loading at once and causing the browser to crawl to a halt) and even a video game site of cheat
                    codes for my favorite video games.
                </p>

                <p>
                    Having all these sites on my computer wouldn&#8217;t work since I couldn&#8217;t share these with my
                    friends and random internet strangers. This is when I found the website hosting service,{' '}
                    <a href="https://www.tripod.lycos.com/">Tripod</a>, Most other developers I knew were on Geocities,
                    but I didn&#8217;t like the community aspect of it. At the time, I thought Tripod was easier to use
                    and just worked.
                </p>

                <p>
                    My tooling at the time was still Dreamweaver, but with a simple FTP setup to automatically push my
                    changes to the server whenever I saved locally. No testing or CI in place to catch issues, this was
                    the early days of just pushing to production and debugging live on site.
                </p>

                <Header setActive={setActive} title={headers['2000']} />

                <p>
                    Up until this point, if you &#8220;Viewed Source&#8221; on any of my sites, you would find a mess of
                    capitalized tag names, table layouts,{' '}
                    <a href="https://en.wikipedia.org/wiki/Spacer_GIF">spacer.gif</a> hacks and invalid markup that
                    would make accessibility experts faint.
                </p>

                <p>
                    This is when I discovered something called{' '}
                    <a href="https://html.com/semantic-markup/">Semantic Markup</a>, the thought that the tags actually
                    had meaning and could be used in the correct context was an &#8220;a-ha&#8221; moment for me. I
                    loved the idea of decorating the website with proper tags that would help with SEO and
                    accessibility.
                </p>

                <p>
                    I deep dived into <a href="https://alistapart.com/">A List Apart</a>, semantic HTML books from{' '}
                    <a href="https://simplebits.com/">Simplebits</a> and other sites that evangelized a web that was
                    accessible to everyone. Building websites with CSS 2 was a completely different thought process and
                    really sparked a new creative direction for my websites.
                </p>

                <Header setActive={setActive} title={headers['2004']} />

                <p>
                    Static sites were fun, but I was tired of creating hundreds of .html files. Copying header and
                    footer markup into each file was tedious. I also tried to use{' '}
                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frame">frames</a> to make this
                    easier, but they were buggy and error prone across browsers.
                </p>

                <Figure
                    align="right"
                    caption="PHP logo"
                    height="124"
                    src="/images/code-journey/php-logo.png"
                    width="180"
                />

                <p>
                    This is when I discovered <a href="https://www.php.net/">PHP</a> and{' '}
                    <a href="https://www.mysql.com/">MySQL</a> databases. I wasn&#8217;t quite sure what either was,
                    however, I knew it would let me build more dynamic and complex websites. After more research, I
                    wanted to build something that would leverage these technologies more than just a simple static
                    sites.
                </p>

                <p>
                    At the time, mobile phones were becoming popular and with that, ringtone usage. I had been using
                    other websites on the internet to download MIDI ringtone files, but I found them to be hard navigate
                    or riddled with pop-up ads and flashing banner images.
                </p>

                <p>
                    I decided to build my own ringtone website that would solve all these issues. This site became{' '}
                    <a href="http://mididelight.com/">MIDI Delight</a>, still active to this day and something that
                    helped me land a job later in my career. This site allowed me to leverage MySQL to build a database
                    of artists, songs, user profiles, favorites, polls and uploading capabilities. It really helped me
                    learn how to build a more complex, data driven website from scratch.
                </p>

                <Header setActive={setActive} title={headers['2009']} />

                <Figure caption="Node.Js logo" height="170" src="/images/code-journey/nodejs-logo.jpg" width="138" />

                <p>
                    At this point, I had been working at Yahoo for a few years, we had been building all our sites with
                    PHP. Things were working well, but PHP had been showing its age and was getting hard to work with
                    (this is before the improvements made in PHP 5+). We were looking for something new to replace our
                    aging PHP stacks and started to look into the new server side JavaScript technology called{' '}
                    <a href="https://nodejs.org/en/">Node.js</a>.
                </p>

                <p>
                    Node.js was a game changer. It allowed me to use my frontend JavaScript skills on the backend and
                    removed the need to context switch between languages. It also allowed us to leverage open source
                    technology more broadly and re-use the libraries that were battle tested by hundreds of other
                    websites. We started building all new websites with Node.js at Yahoo.
                </p>

                <Header setActive={setActive} title={headers['2013']} />

                <p>
                    Even though we were able to leverage the same language on the server and client, we still found
                    ourselves rewriting the same business logic in each run time. This lead to more work and bugs, as we
                    had to maintain two different frameworks in our applications.
                </p>

                <Figure caption="React logo" height="133" src="/images/code-journey/react-logo.png" width="94" />

                <p>
                    Around this time, Facebook released <a href="https://reactjs.org/">React</a> to the world. At first,
                    we were skeptical of it and as confused as others in regards to mixing HTML and JS. We prototyped a
                    few projects and started to discover how it could be used to not only make highly interactive and
                    dynamic sites, but could also be leveraged on the server using much of the same code between the
                    browser and server.
                </p>

                <p>
                    Leveraging React for templating was a step in the right direction, but we still needed to figure out
                    how to manage data and state. At this point in time, Facebook had released the{' '}
                    <a href="https://facebook.github.io/flux/">Flux architecture</a>, but no actual companion library.
                    This lead to a proliferation of client based Flux libraries. However, none that satisfied our
                    business requirements within Yahoo (this was before Redux).{' '}
                </p>

                <Figure
                    align="right"
                    caption="Fluxible logo"
                    height="41"
                    src="/images/code-journey/fluxible-logo.png"
                    width="168"
                />

                <p>
                    Therefore, we decided to build our own open sourced universal Flux framework, called it{' '}
                    <a href="https://fluxible.io/">Fluxible</a>. Fluxible was a truly universal library that handled
                    routing, state management, hydration on the client and much more. It helped solve many application
                    requirements that we had internally.{' '}
                </p>

                <Header setActive={setActive} title={headers['2016']} />

                <p>
                    With Fluxible and React in tow, our applications got more sophisticated. We were now able to shared
                    business logic across run times. This allowed us to break down the application into smaller chunks
                    (or modules) and shared responsibility of various parts of the applications across teams.
                </p>

                <p>
                    This worked exceedingly well for the most part, but given JavaScripts lack of type system and
                    dynamic nature led to scalability and maintainability issues. Changes across teams would break each
                    others code, refactoring what challenging since there were so many decoupled parts of the system.
                    Dev&#8217;s were afraid to make changes in fear of breaking a part of the application they were not
                    familiar with.
                </p>

                <Figure caption="TypeScript logo" height="91" src="/images/code-journey/ts-logo.webp" width="162" />

                <p>
                    All these issues led us to <a href="https://www.typescriptlang.org/">TypeScript</a>. The static
                    typing, ability to catch errors before committing and the ease of refactoring were big wins for our
                    projects. Selling developers on these advantages took some time, but once they got over the learning
                    curve, the benefits outweighed the doubts.
                </p>

                <p>
                    Over the past few years, all new projects we have worked on have been started with TypeScript. It
                    has made our code more readable, maintainable and easier to work than our past non-typed efforts.{' '}
                </p>

                <Header setActive={setActive} title={headers.Future} />

                <p>
                    I&#8217;m not quite sure what the future holds for web development. The industry really blossomed
                    the last 10 years to radically change what could be done with HTML, CSS and JS. With all this
                    progress, it does seem like the past few years that the industry had settled on React and its
                    ecosystem of libraries and components. I like React, but I would prefer to see the industry focus on
                    open standards rather than proprietary technology, governed by one company.
                </p>

                <p>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components">Web Components</a> seem like
                    the next natural phase of evolution, but they have been around for a few years and have still yet to
                    see widespread adoption amongst developers and applications.
                </p>

                <p>
                    I&#8217;m also excited about more widespread adoption of{' '}
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules">ESModules</a> in
                    modern browsers, removing the need for complicated bundling tools like{' '}
                    <a href="https://webpack.js.org/">Webpack</a> is a win for users and developers alike.
                </p>

                <p>
                    Technology like{' '}
                    <a href="https://developers.google.com/web/fundamentals/primers/service-workers">service workers</a>{' '}
                    and the advent of <a href="https://web.dev/progressive-web-apps/">PWA&#8217;s</a> has really pushed
                    webapps to a more app like experience. I hope that Apple and Google continue to push the industry
                    forward to give the web a fighting chance.
                </p>

                <p>
                    The web has changed drastically since I started way back on my Pack Bell, but I&#8217;m excited to
                    see what the future has in store. I look forward to adding more to this story as the years
                    pass&#8230;
                </p>
            </div>
        </Wide>
    );
}
