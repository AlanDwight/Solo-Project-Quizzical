import React from "react"
import ReactDOM from "react-dom"
import he from 'he'
// import Choice from 'Choice'

export default function Quzzies(props){ 
    // console.log(props.choiceStat)
    // let questionArray = [];
    // console.log(props.metaData.correct_answer)
    
    let [ choices, setChoices ] = React.useState([])
    let [ answerChoices, setAnswerChoices ] = React.useState(choices)

    React.useEffect(()=> { 
        // console.log(props.paintArraySetter)
        // console.log(props.count)
        // console.log(props.post)
        // console.log(props.rightAnswerArray)
        // console.log(props.choices[props.id])
        // console.log(props.paintArray)
        // console.log(props.paintArray)
        
        
        
        if(props.count == 1 ){ 
            // console.log('render one time')
            // console.log(choiceObject.choiceArray)
            setChoices(shuffleArray( choiceObject.choiceArray))
            
        }else if(props.count ==2 ) {
            // console.log(choices) 
            // setAnswerChoices(choices)
            return props.choiceSetter((prev)=>{
                prev.push(choices)
                return prev
    })
        }
        
    },[props.count])
    
    React.useEffect(()=>{
        
         if(props.count > 3 && props.post ){ 
             props.choices[props.id].forEach((item,index)=>{
                props.rightAnswerArray.forEach((answer, index2)=>{
                    // console.log(item, answer)
                    if(item === answer ) { 
                        
                        // let paint = `.choice_${index}`
                        let paint = `.choice_${index}`
                       
                            props.paintArraySetter(prev=>{ 
                                prev.push(paint); 
                                return prev;
                            })
                            
                        // props.paintArray.forEach((item,index)=> { 
                        //     document.querySelector(item).classList.add('paint_choice')
                        // })
                    // console.log(item,index)
                        // document.querySelectorAll(`.choice_${index}`).forEach(item =>{ 
                        //     item.classList.add('paint_choice')
                        // })
                        
                        // console.log(index2)
                        // console.log(document.querySelector(`.${paint}`))
                        // .classList.add('paint_choice')
                        
                    }})})
        }
    }, [props.count])
    
    
    // console.log(props.choices)
    // console.log(choices)
    // console.log(answerChoices)
   
    // React.useEffect(()=> { 
    //     if(props.count == 2 ){ 
    //         console.log('render second time')
    //         // console.log(choiceObject.choiceArray)
    //         // setChoices(shuffleArray( choiceObject.choiceArray))
    //     }
    // },[])
    
    React.useEffect(()=>{
        // console.log(props.paintArray)
        // console.log('render')
       
        
        if(props.userAnswer){ 
            let correctAnswerArray = props.rightAnswerArray; 
            choiceObject.choiceArray.forEach((item,index)=>{

                correctAnswerArray.forEach((answer, index2)=>{
                    // console.log(item, answer)
                    if(item === answer ) { 
                    // console.log(item,index)
                        // console.log(`choice_${index2}`)
                        // document.querySelectorAll(`.choice_${index}`).forEach(item =>{ 
                        //     item.classList.add('paint_choice')
                        // })
                        
                        // console.log(index2)
                        // document.querySelector(`.choice_${index}`).classList.add('paint_choice')
                        
                            
                    }
            })
            })
        }
        
    },[props.questionData])
   
    let userAnswerArray = []; 
    if(props.userAnswer){ 
        let userAnswerObj = props.userAnswer; 
        let placeHolder = '';
        for(let i = 0 ; i < 5 ;  i ++ ){ 
            placeHolder =  `userAnswerObj.choice_${[i]}`
            userAnswerArray.push(eval(placeHolder))
        }
        let correctAnswer = props.metaData.correct_answer; 
        userAnswerArray.forEach((answer,index)=>{
            if(answer == correctAnswer){ 
                // console.log(`${answer} is a correct one`)
            }
        })
        
        
    }
    // props.userAnswer && console.log(userAnswerArray)
    // console.log(props.rightAnswerArray)
  
    
    let choiceObject = {
        choiceArray : [],
        choiceArrayID : props.id
    }
// const [ choiceObject , setChoiceObject ] = React.useState({ 
//         choiceArray : [],
//         choiceArrayID : props.id
// })

choiceObject.choiceArray.push(props.metaData.correct_answer)
        props.metaData.incorrect_answers.forEach(item=>
        {
            choiceObject.choiceArray.push(he.decode(item))
            // choiceObject.choiceArrayID  = Math.random()
        })

// React.useEffect(()=>{
//         console.log('rendered')
//         choiceObject.choiceArray.push(props.metaData.correct_answer)
//         props.metaData.incorrect_answers.forEach(item=>
//         {
//             choiceObject.choiceArray.push(he.decode(item))
//             // choiceObject.choiceArrayID  = Math.random()
//         }
    
//     )   
//         setChoiceObject(prevData => (shuffleArray(prevData.choiceArray)))
//     },[])
    
//     console.log(choiceObject)
    
    
    // let ranNum = (Math.random()*10).toFixed(0); 
    // let ranPos;
    // if( ranNum > 3){
    //     ranPos = ranNum - 3
    //  }else { 
    //     ranPos = ranNum;
    //  }
    //     console.log(ranNum)

    // console.log(props)

    
    // React.useEffect(()=>{
    //     console.log(choiceObject.choiceArray)
    // },[props])
    
    // props.choiceProp.forEach(item=>choiceObject.choiceArray.push(he.decode(item)))
    
    // choiceObject.choiceArray.push(props.metaData.correct_answer)
    // props.metaData.incorrect_answers.forEach(item=>
    //     {
    //         choiceObject.choiceArray.push(he.decode(item))
    //         // choiceObject.choiceArrayID  = Math.random()
    //     }
    
    // )
    
    // choiceObject.choiceArray = shuffleArray(choiceObject.choiceArray)
    
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            // Generate a random index from 0 to i
            const j = Math.floor(Math.random() * (i + 1));

            // Swap elements array[i] and array[j]
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
        }

    // console.log(choiceObject.choiceArray)
    // let newChoiceArray = []
    // newChoiceArray.push(choiceObject.choiceArray)


// data hereeeeeeeeeeeeeee
// console.log(choiceObject.choiceArrayID)
    function choiceRenderer(){ 
        let renderData = choices.map((item,index)=>{
            return ( 
                <>
                    <input 
                        name = {`choice_${choiceObject.choiceArrayID}`}
                        value={item} 
                        type="radio" 
                        id = {item}
                        // checked = { userAnswerArray ? item == userAnswerArray[index] : 
                        // choiceObject.choiceArray[0] }
                        onChange = {props.eventHandler}
                        />
                    <label className='choice-style' htmlFor={item}>{item}</label>
                </>
            )
        })
        return renderData; 
    }
    function answerRenderer(){
        // console.log(choiceObject.choiceArray)
        // console.log(props.choices)
        // console.log(choiceObject.choiceArray)
        
        // console.log(props.choices[props.id])
        
        // console.log(props.rightAnswerArray)
        props.choices[props.id].forEach((item,index)=>{
                props.rightAnswerArray.forEach((answer, index2)=>{
                    // console.log(item, answer)
                    if(item === answer ) { 
                        
                        // let paint = `choice_${index}`
                        // props.paintArraySetter(prev=>{ 
                        //     prev.push(paint); 
                        //     return prev;
                        // })
                        // console.log(props)
                    // console.log(item,index)
                    
                        // document.querySelectorAll(`.choice_${index}`).forEach(item =>{ 
                        //     item.classList.add('paint_choice')
                        // })
                        
                        // console.log(index2)
                        // console.log(document.querySelector(`.${paint}`))
                        // .classList.add('paint_choice')
                        
                            
                    }})})
        // console.log(props.paintArray)
        let renderData = props.choices[props.id].map((item,index)=>{
            // props.choices[index].forEach((item2, indexpos)=>{
            //     // console.log(item2)
            // })
            // console.log(item)
            // if(props.paintArray.length != 0){ 
            //     let data = props.paintArray[props.id]
            // }
            return ( 
                <>
                    <input 
                        name = {`choice_${choiceObject.choiceArrayID}`}
                        value={item} 
                        type="radio" 
                        // id = {item}
                        checked = { item == userAnswerArray[choiceObject.choiceArrayID]}
                        onChange = {props.eventHandler}
                        />
                    <label className={`choice_${index} choice-style js-choice`} id={item} htmlFor={item}>{item}</label>

                </>
            )
        })
        return renderData; 
    }
    
    
    function correctAnswerPaint(){ 
        let correctAnswerArray = props.rightAnswerArray; 
        // console.log(correctAnswerArray)
        let renderData = choiceObject.choiceArray.map((item,index)=>{
            return ( 
                <>
                    <label htmlFor={item}>{item}</label>
                    <input 
                        name = {`choice_${choiceObject.choiceArrayID}`}
                        value={item} 
                        type="radio" 
                        id = {item}
                        checked = { item == correctAnswerArray[choiceObject.choiceArrayID]}
                        // checked = { item == userAnswerArray[choiceObject.choiceArrayID]}

                        onChange = {props.eventHandler}
                        />
                </>
            )
        })
        return renderData; 
    }
    
    //  choiceArray.push(he.decode(item.correct_answer))
    //         item.incorrect_answers.forEach(item2=>choiceArray.push(he.decode(item2)))
    
    return ( 
        <>
            <div className = 'question-style'>{props.questionData}</div>
            <div className = "choices-box">{props.userAnswer?answerRenderer(): choiceRenderer()}</div>
            <hr className = 'line' />
        </>
    )
}