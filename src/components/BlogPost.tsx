interface Props{
    cim:string;
    tartalom:string;
}

export function BlogPost(props:Props){
    return <div>
        <div>
            <img className="fokep rounded" src="Bloggerlogo1.png" alt="kep"/>
        </div>
        <div>
            <h1>{props.cim}</h1>
        </div>
        <div>
            <p>{props.tartalom}</p>
        </div>
    </div>
}