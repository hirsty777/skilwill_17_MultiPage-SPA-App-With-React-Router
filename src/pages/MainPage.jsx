import WalterImg from "../assets/walter.jpg"
import Style from "../styles/MainPage.module.css"

const MainPage = () => {
    return (
        <div className={Style["main-page-wrapper"]}>
            <div className={Style["main-page"]}>
                <h1 className={Style["main-page-header"]}>Walter White</h1>
                <div className={Style["main-page-image"]}>
                    <img src={WalterImg} alt="walter" />
                </div>
            </div>
        </div>
    )
}

export default MainPage