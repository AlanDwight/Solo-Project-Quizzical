import React, { useEffect , useState } from "react"
import ReactDOM from "react-dom"
import Quzzies from "./components/Quzzies"
import he from 'he'

export default function App(){ 
    
    const [ question , setQuestion ] = useState([]) 
    let [ choices, setChoices ] = React.useState([])
    let [ paintArray, setPaintArray ] = React.useState([])
    let correctCount = 0 ;
    // console.log(paintArray)

    // function apiCall () { 
    //     let data = fetch('https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple')
    //         .then(res => res.json())
    //         .then(data => console.log(data ))
            
    // }
    
    
    const [ formData , setFormData ] = React.useState(
        {
            choice_0 : '',
            choice_1 : '',
            choice_2 : '',
            choice_3 : '',
            choice_4 : '',
        }
    )
    
    // console.log(question)
    
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            // Generate a random index from 0 to i
            const j = Math.floor(Math.random() * (i + 1));

            // Swap elements array[i] and array[j]
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
        }

    
    
    // if(props.userAnswer){ 
    //         let correctAnswerArray = props.rightAnswerArray; 
    //         console.log(correctAnswerArray)
    //         choiceObject.choiceArray.forEach((item,index)=>{
    //             correctAnswerArray.forEach((answer, index2)=>{
    //                 if(answer == item ) { 
    //                     document.querySelector(`.choice_${index}`).classList.add('paint_choice')
    //                 }
    //         })
    //         })
    //     }
    
    // console.log(formData)
    
    // let choiceArray = []
    // question.forEach((item,index)=>{ 
    //     choiceArray.push(he.decode(item.correct_answer))
    //     item.incorrect_answers.forEach(item2=>choiceArray.push(he.decode(item2)))
    // })    
    // console.log(choiceArray)
    
    //  let choiceObject = {
    //     choiceArray : [],
    //     choiceArrayID : props.id
    // }
    // let choiceArray = []
    // // console.log(props)
    // choiceObject.choiceArray.push(props.metaData.correct_answer)
    // props.metaData.incorrect_answers.forEach(item=>
    //     {
    //         choiceObject.choiceArray.push(he.decode(item))
    //         // choiceObject.choiceArrayID  = Math.random()
    //     }
    
    // )
    
    //  React.useEffect(()=>{
    //     if(userAnswer){ 
    //         // let correctAnswerArray =correctAnswerArray; 
    //         console.log(correctAnswerArray)
    //         let renderData = choiceObject.choiceArray.map((item,index)=>{
    //             if(item == correctAnswerArray[choiceObject.choiceArrayID]){ 
    //                 document.querySelector(`.choice_${index}`).classList.add('paint_choice')
    //         }
    //         })
    //     }
        
        
        
    // },[formData])
    
    

    // let userAnswerArray = []; 
    //             userAnswerArray.push(
    //                 { 
    //                     [name] : value,
    //                 }
    //             )
                
    //             console.log(userAnswerArray)
    
    function choiceEvent(event){ 

        const { name, value , type , checked   } = event.target ; 
            setFormData(prevFormData => { 
                return { 
                    ...prevFormData, 
                    [name] : value,
                }
            })
    }
    
    
    
     function clickHandler(){ 

         fetch('https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple')
            .then(res => res.json())
            .then(data => setQuestion(data.results))
            
    
    }
    
    // console.log(question)
    
    const [ post , setPost ] = React.useState (false)
    
    function submitUserAnswer(){ 
        // console.log(question)
        // console.log(formData)
        if(count<=4){ 
            alert('You have to answer all questions')
        }else { 
            setPost(true)
            
        }

    }
    
    function resetQuestion(){ 
        setPost(false)
        location.reload()
        // clickHandler()
    }

   
    let [ resultCount, setResultCount  ] = React.useState(0);

    //  let choiceProp = []; 
    //     let renderData =  question.map((item,index)=>{
    //         choiceProp.push(item.correct_answer); 
    //         item.incorrect_answers.forEach(item=>choiceProp.push(item));
    //         // shuffleArray(choiceProp)
    //     console.log(choiceProp)
    // })
    
    
    
    function questionRenderer(){ 
        
        let choiceProp = []; 
        let renderData =  question.map((item,index)=>{
            choiceProp.push(item.correct_answer); 
            // console.log(item.correct_answer)
            item.incorrect_answers.forEach(item=>choiceProp.push(item));
            // shuffleArray(choiceProp)
        // console.log(choiceProp)        
        // let [ choiceStat, setChoiceStat ] = React.useState(choiceProp)
                                    return (
                                                <Quzzies 
                                                     questionData = {he.decode(item.question)}
                                                     metaData = {item}
                                                     id = {index}
                                                     eventHandler = {choiceEvent}
                                                     choiceProp = {choiceProp}
                                                     count = {count}
                                                     choiceSetter = {setChoices}
                                                     choices = {choices}
                                                     paintArraySetter = {setPaintArray}
                                                     paintArray = {paintArray}
                                                />
                                            )
                                         
                                    
                                })
        return renderData
    }
    
    let correctAnswerArray = [];

        let [count , setCount ] = React.useState(0) ;
        // console.log(resultCount)
    React.useEffect(()=>{
        // console.log('render')
        // let renderData =  question.map((item,index)=>{
        //     correctAnswerArray.push(item.correct_answer);
        question.map((item,index)=>{
            correctAnswerArray.push(item.correct_answer);
            })
            
            let userAnswerArray = []; 
            let userAnswerObj = formData; 
            let placeHolder = '';
            for(let i = 0 ; i < 5 ;  i ++ ){ 
                placeHolder =  `userAnswerObj.choice_${[i]}`
                userAnswerArray.push(eval(placeHolder))
            }
            
            // let correctAnswer = props.metaData.correct_answer; 
            // userAnswerArray.forEach((answer,index)=>{
            //     if(answer == correctAnswer){ 
            //         console.log(`${answer} is a correct one`)
            //     }
            // })
            
            // console.log(userAnswerArray)
            // console.log(userAnswerArray)
            // console.log(correctAnswerArray)
            setCount(prev => prev+=1 ) ; 
            // console.log(count)
            userAnswerArray.forEach((userAnswer, index)=>{
                correctAnswerArray.forEach((correctAnswer, index2)=>{
                    if(userAnswer == correctAnswer && count >= 5){ 
                        // console.log ('render')
                        // document.querySelector(`.choice_${index2}`).classList.add('paint_choice')
                        setResultCount(prevCount => prevCount += 1  );
                    }
                })
            })
  
    }, [formData])
                        // console.log(resultCount)
    
    let [ someArray , setSomeArray ] = React.useState([1,2,3,4,5])
                  
    React.useEffect(()=>{ 
    //   console.log(count)
      if(count == 0){ 
        setSomeArray(prev => shuffleArray(prev))
      }  
    },[])
        // console.log('render one time', someArray)
     

    function answerRenderer(paint){    
        

        let choiceProp = []; 
        
        // console.log(userAnswerArray)
        
        question.map((item,index)=>{
            choiceProp.push(item.correct_answer); 
            item.incorrect_answers.forEach(item=>choiceProp.push(item));
            })
        // console.log(choiceProp)
        let renderData =  question.map((item,index)=>{
            correctAnswerArray.push(item.correct_answer);
            
            if(correctAnswerArray.length == 5 && paint.length!=0){
                // console.log(paint)
                paint.forEach((item,index)=>{
                    document.querySelectorAll(item).forEach((item2,index2)=>{
                        if(index == index2){ 
                            item2.classList.add('paint_choice')
                        }
                        // document.querySelectorAll(item).forEach((item2, index2)=>{ 
                        //     console.log (item2)
                        // })
                    })
                    
                })
                // console.log(correctAnswerArray)            
            }
            let questionData = []
            question.forEach(item => questionData.push(item.correct_answer))
            question.forEach(item => item.incorrect_answers.forEach(item2 => questionData.push(item2) ))
            // console.log(questionData.length)
            
           
            
            document.querySelectorAll('.js-choice').forEach((item,index)=>{
                questionData.forEach(async item2=> {
                    await item.classList.add('paint_all_answer_data')

                    // console.log(document.getElementById(item2))
                    // if(document.getElementById(item2).checked){ 
                    //     // console.log('hee')
                    //     item.classList.add('paint_all_answer_data')

                    // }else { 
                        
                    // }
                })
            })
            
             questionData.forEach(async item2=> { 
                    if(await document.getElementById(item2).checked){
                        document.getElementById(item2).classList.add('paint-selective-choice')
                        document.getElementById(item2).style.backgroundColor = "#94D7A2"
                        // document.getElementById(item2).classList.remove('choice-style')
                        document.getElementById(item2).classList.remove('paint_all_answer_data')
                        // console.log(document.getElementById(item2))
                        // console.log(document.getElementsByTagName("label")[0])
                    }
                    })
            
            let userAnswerArray = []; 
            let userAnswerObj = formData; 
            let placeHolder = '';
            for(let i = 0 ; i < 5 ;  i ++ ){ 
                placeHolder =  `userAnswerObj.choice_${[i]}`
                userAnswerArray.push(eval(placeHolder))
            } 
            if(correctAnswerArray.length == 5){ 
                userAnswerArray.forEach((item, index)=>{
                    correctAnswerArray.forEach((item2, index2)=>{
                        if(item == item2){ 
                            correctCount ++ ; 
                            // console.log(`${item} is a correct answer`)
                            // console.log(correctCount)
                        }
                    })
                })     
            }     
            
            // let correctAnswer = props.metaData.correct_answer; 
            // userAnswerArray.forEach((answer,index)=>{
            //     if(answer == correctAnswer){ 
            //         console.log(`${answer} is a correct one`)
            //     }
            // })
            
            // console.log(userAnswerArray)
            
            // userAnswerArray.forEach((userAnswer, index)=>{
            //     correctAnswerArray.forEach((correctAnswer, index2)=>{
            //         if(userAnswer == correctAnswer){ 
            //             document.querySelector(`.choice_${index}`).classList.add('paint_choice')
            //         }
            //     })
            // })
  
           // let choiceArray = []
    // question.forEach((item,index)=>{ 
    //     choiceArray.push(he.decode(item.correct_answer))
    //     item.incorrect_answers.forEach(item2=>choiceArray.push(he.decode(item2)))
    // })    
    // console.log(choiceArray)
        //    console.log(paintArray)
                                    return (
                                                <Quzzies 
                                                     questionData = {he.decode(item.question)}
                                                     metaData = {item}
                                                     id = {index}
                                                     eventHandler = {choiceEvent}
                                                     userAnswer = {formData}
                                                     rightAnswerArray = {correctAnswerArray}
                                                     count = {count}
                                                     choices = {choices}
                                                     paintArraySetter = {setPaintArray}
                                                     paintArray = {paint}
                                                     post = {post}

                                                />
                                            )
                                         
                                    
                                })
        return renderData
    }
    
    return ( 
        <> 
             <main>
                {
                    post 
                        ? 
                            <>  
                            <section>
                                {answerRenderer(paintArray)}
                                
                                <span className = "result">You scored {correctCount}/5 correct answers</span><button
                                    onClick = {resetQuestion} 
                                    className ='reset'> 
                                    Reset</button>
                            </section>
                            <img className = "img1" src="./images/1.png" alt=""/>
                            <img className = "img2" src="./images/2.png" alt=""/>
                        </>
                        : null
                        // resultCount>5?alert('over') : resultCount
                }
                {
                question.length == 0 && !post
                    ?  
                        <>
                            <div className = "heading-container">
                                <h1 className = "heading">Quzzical</h1>
                                <h2 className = "description">some descrption if needed</h2>
                                <button onClick = {clickHandler} className = "start-quiz">Start quiz</button>
                            </div>
                            <img className = "img1" src="./images/1.png" alt=""/>
                            <img className = "img2" src="./images/2.png" alt=""/>
                        </>
                    :question.length!=0 && !post
                        ?
                        <>  
                            <section>
                                {questionRenderer()}
                                <button 
                                    onClick = {submitUserAnswer} 
                                    className ='submit-user-answer'> 
                                    Check Answer</button>
                            </section>
                            <img className = "img1" src="./images/1.png" alt=""/>
                            <img className = "img2" src="./images/2.png" alt=""/>
                        </>
                    : null
            }
            </main>
        </>
    )
}