import {useParams} from "react-router-dom"
import Style from "../styles/FactsPage.module.css"


const factsArray = [
    {
      id: 0, fact: "Walter White, portrayed by Bryan Cranston, is a brilliant yet underachieving high school chemistry teacher diagnosed with terminal lung cancer."
    },
    {
      id: 1, fact: "Motivated by a desire to secure his family's financial future, Walter turns to manufacturing and selling methamphetamine, a decision that drastically alters the course of his life."
    },
    {
      id: 2, fact: "Walter's transformation into the ruthless drug kingpin 'Heisenberg' is marked by his adoption of a new identity, complete with dark clothing, sunglasses, and a distinctive goatee."
    },
    {
      id: 3, fact: "He becomes increasingly skilled at chemistry-based tactics, using his knowledge to outwit his rivals and create a unique blue meth that becomes highly sought after."
    },
    {
      id: 4, fact: "Walter's ego and ambition grow as he gains power in the drug trade, leading to conflicts with other criminals and law enforcement agencies."
    },
    {
      id: 5, fact: "His relationship with his former student and business partner, Jesse Pinkman, is a central aspect of his character development, marked by mentorship, manipulation, and strain."
    },
    {
      id: 6, fact: "Walter's actions have far-reaching consequences, causing harm to his family, friends, and associates, while his justifications become increasingly morally ambiguous."
    },
    {
      id: 7, fact: "As the series progresses, Walter's motivations become a blend of financial stability, power, and a desire to assert his dominance in a world he once felt overlooked in."
    },
    {
      id: 8, fact: "His wife, Skyler White, becomes entangled in his criminal activities, leading to marital strife as she grapples with his decisions and their impact on their family."
    },
    {
      id: 9, fact: "Walter's journey showcases the complexities of human nature and the duality between his seemingly ordinary exterior and the dangerous path he chooses."
    }
]

const FactsPage = () => {
    const params = useParams()
    const factById = factsArray.find(fact => fact.id === +params.factId)
    //if entered id is not valid
    if(!factById){
        return (
        <div className={Style["facts-page-error"]}>   
            <h1>No Facts Found</h1>
        </div>
        )
    }
    //if entered id is  valid
    return (
        <div className={Style["facts-page-wrapper"]}>
            <div className={Style["facts-page"]}>
                <h1>{factById.fact}</h1>
            </div>
        </div>
    )
}

export default FactsPage