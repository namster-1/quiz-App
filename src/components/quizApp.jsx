import React from 'react'

function QuizApp({question,correctAnswer,incorrectAnswers,handleClick,handleNextQuestion,showAnswer}) {
    const answers =[correctAnswer,...incorrectAnswers]
    .sort(()=>Math.random()-0.5);
    const Button =({ans})=>{
        let classes = 'btn btn-lg m-2 btn-info'
        if(showAnswer===true && ans===correctAnswer){
           classes =replaceStr(classes,'btn-info','btn-success');
        }
        if(showAnswer === true && ans !== correctAnswer){
            classes = replaceStr(classes,'btn-info','btn-danger');
        }
        return (
        <button onClick={()=>handleClick(ans)} className={classes}
       dangerouslySetInnerHTML={{ __html:ans}} />
        )
    }
    return (
        <div>
            <div className="text-center">
                <h2 className="text-center" dangerouslySetInnerHTML={{ __html:question}} />
                <div className="m-2">
                    <Button ans={answers[0]} />
                    <Button ans={answers[1]} />

                </div>
                <div>
                <Button ans={answers[2]} />
                <Button ans={answers[3]} />
                </div>
                {showAnswer && (
                    <button onClick={()=>handleNextQuestion()} className="btn btn-warning btn-lg m-2">next question</button>
                )}
            </div>
        </div>
    )
}
function replaceStr(str,wordOne,wordTwo){
    let strArr=str.split(' ');
    for(let i=0;i<strArr.length;i++){
        if(wordOne===strArr[i]){
            strArr[i]=wordTwo;
        }
    }
    return strArr.join(' ');
}

export default QuizApp
