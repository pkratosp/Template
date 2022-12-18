import { ArrowRight, Star } from "phosphor-react"

interface CardsProps {
    description: string
    link:string
    descriptionLink: string
    title: string
    subTitle?: string
}

export default function Cards(props:CardsProps){
    return (
        <div className="bg-white shadow-2xl rounded-2xl w-1/2 m-4 p-6">
            <div className="flex p-4 items-center">
                <div 
                    className="bg-violet-700 p-2 rounded-full"
                >
                    <Star className="text-white" size={32} />
                </div>
                <p className="text-black px-4 text-2xl font-medium">{props.title}</p>
            </div>

            <h2 className="text-black font-medium text-3xl p-4">{props.subTitle}</h2>

            <p className="text-gray-400 text-xl p-4">{props.description}</p>

            <a 
                href={props.link} 
                target={"_blank"}
                className="flex items-center font-medium text-xl p-4"
            >
                Go to Awards <ArrowRight className="text-violet-600" size={32} />
            </a>

        </div>
    )
}