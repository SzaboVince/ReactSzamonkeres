import { useEffect, useState } from "react";
import { CommentComponents } from "./CommentComponents";
import { Comment } from "./Comment";

export function CommentSection(){
    const url="http://localhost:3000/api/comments";
    const [ comment, setComment ] = useState([] as Comment[]);
    const [ errorMessage, setErrorMessage ] = useState('');
    
    useEffect(() => {
        async function load() {
          try {comment
            const response = await fetch(url);
            if (!response.ok) {
              setErrorMessage('Hiba a letöltéskor');
              return;
            }
            const content = await response.json() as Comment[];
            setComment(content);
          } catch {
            setErrorMessage('Hiba a letöltéskor');
          }
        }
        load();
        console.log(errorMessage);
      }, []
    )

    return <div>
        <h1>Comments</h1>
        <div>
            {
                comment.map(comment=><CommentComponents key={comment.id} comment={comment}/>)
            }
        </div>
    </div>
}