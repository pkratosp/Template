
interface DescriptionProps{
    title: string
    description: string
    descriptionTitle?: string
    link?: string
    linkDescription?: string
}

export default function Description(props:DescriptionProps){
    return(
        <div className="w-1/2 m-auto py-5">
            <span className="font-medium text-violet-600 py-4">{props.descriptionTitle}</span>
            <h2 
                className="text-4xl text-black font-bold text-center py-6"
            >
                {props.title}
            </h2>
            <p className="text-gray-500 text-center text-xl font-medium">{props.description}</p>
        </div>
    )
}