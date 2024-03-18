import './Row.css';

export default function Row (props){
    console.log(props)
    return(
        <div>
            {props.title}
        </div>
    )
}