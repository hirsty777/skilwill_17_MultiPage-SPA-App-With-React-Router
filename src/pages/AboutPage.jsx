import Style from "../styles/AboutPage.module.css"
import WalterImg from "../assets/walter-profile.jpg"

const AboutPage = () => {
    return (
        <div className={Style["about-page-wrapper"]}>
            <div className={Style["about-page"]}>
                <div className={Style["about-page-image"]}>
                    <img src={WalterImg} alt="walter" />
                </div>
                <div><p>Walter Hartwell "Walt" White Sr., also known by his clandestine pseudonym and business moniker Heisenberg and also frequently referred to as Mr. White, is an American former chemist and major narcotics distributor from Albuquerque, New Mexico, whose drug empire became the largest meth operation in American history, surpassing both Gustavo Fring's drug empire and the Cartel's. Before entering the drug trade, Walt was a respected chemist and scientist who later worked as an overqualified high school chemistry teacher at J. P. Wynne High School alongside working at the A1A Car Wash to financially support his family (his wife Skyler, son Walt Jr., and infant daughter Holly). After being diagnosed with terminal lung cancer, Walt started manufacturing chemically pure crystal methamphetamine to provide for his family upon his death. Knowing nothing about the drug trade, Walt enlisted the aid of his former student, Jesse Pinkman, to sell the meth he produced.
                </p>
                <p>
                Walt's scientific knowledge and dedication to quality lead him to produce crystal meth that is purer and more potent than any competitors. To avoid the tedious collection of pseudoephedrine required for production, Walt devises an alternative chemical process utilizing methylamine, giving his product a distinctive blue colour. His crystal meth, which is given the street name "Blue Sky," dominates the market, leading to confrontations with established drug makers and dealers. Although Walt and Jesse began as amateur small-time meth cooks, manufacturing the drug out of an RV in the deserts of New Mexico, and being met with very limited success, Walt and Jesse soon climbed up the drug hierarchy, killing or systematically destroying anyone who impeded them. Because of his drug-related activities, Walt eventually finds himself at odds with his family, the Drug Enforcement Administration (DEA) through his brother-in-law and accomplished DEA agent Hank Schrader, the local gangs, and the Mexican drug cartels (including their regional distributors), putting him and his family's lives at risk.
                </p></div>
            </div>
        </div>
    )
}

export default AboutPage