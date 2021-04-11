import s from "./Header.module.css"

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.headerWrapper}>
                <div className={s.logo}>
                    <span>social</span>
                </div>
                <div className={s.properties}>
                    <span>properties</span>
                </div>
            </div>
        </header>
    );
}

export default Header