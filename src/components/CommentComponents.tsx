import { Comment } from "./Comment";

interface Props{
    comment:Comment;
}

export function CommentComponents(props:Props){
    const {comment}=props;

    return <div>
        <div className="row">
            <div className="col">
                <img className="commentkep" src={comment.avatar} alt="avatar"/>
            </div>
            <div className="col-10">
                <a href={comment.email}>{comment.email}</a>
                <p>{comment.content}</p>
            </div>
        </div><br/>
    </div>
}