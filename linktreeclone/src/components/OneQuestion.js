import React, {useState} from 'react'

export default function OneQuestion(props) {
    const [open, setOpen] = useState(false);

  return (
    <div className="box">
            <div className="que" onClick={()=> setOpen(!open)}>
                <h3>{props.que}</h3>
                {
                    open 
                    ?   <i class="fa-solid fa-chevron-up" ></i> 
                    :   <i class="fa-solid fa-chevron-down" ></i>
                }
                
            </div>
            {
                open 
                ?   <div className="ans">
                        <p>{props.ans1 ? props.ans1 : null}</p>
                        <p>{props.ans2 ? props.ans2 : null}</p>
                        <p>{props.ans3 ? props.ans3 : null}</p>
                        <p>{props.ans4 ? props.ans4 : null}</p>
                        <p>{props.ans5 ? props.ans5 : null}</p>
                        <p>{props.ans6 ? props.ans6 : null}</p>
                    </div>
                : null
            }
            
        </div>
  )
}
