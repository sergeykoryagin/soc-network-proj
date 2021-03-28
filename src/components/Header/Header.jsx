import s from "./Header.module.css"

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src={"https://aiconica.net/previews/spider-web-icon-1027.png"}
                alt={"logo"}
            />
        </header>
    );
}

export default Header