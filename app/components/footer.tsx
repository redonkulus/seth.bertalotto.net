import { Comfortable } from './layouts';
export default function Footer() {
    return (
        <Comfortable>
            <footer className="text-sm border-t-2 dark:border-gray-400 pt-8">
                Copyright &copy; {new Date().getFullYear()} Seth Bertalotto.{' '}
                <a href="https://github.com/redonkulus">GitHub</a> |{' '}
                <a href="http://www.linkedin.com/in/sethbertalotto">LinkedIn</a>
            </footer>
        </Comfortable>
    );
}
