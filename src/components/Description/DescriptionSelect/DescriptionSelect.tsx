import { ArrowRight } from "phosphor-react"

interface DescriptionProps{
    title: string
    description: string
    descriptionTitle?: string
    link?: string
    linkDescription?: string
}

export default function DescriptionSelect(props: DescriptionProps){
    return(
        <div className="w-1/2 m-4 py-5">
            <span className="block text-violet-600 text-lg font-bold">{props.descriptionTitle}</span>
            <h2 className="text-2xl font-bold text-gray-900 py-2">{props.title}</h2>
            <p className="text-gray-500 text-xl font-medium py-6">{props.description}</p>

            <a 
                href={props.link} 
                className="text-2xl text-violet-600 flex font-semibold"
                target={"_blank"}
            >
                {props.linkDescription}<ArrowRight className="text-violet-600" size={32} />
            </a>
        </div>
    )
}