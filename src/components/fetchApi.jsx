import React,{useEffect,useState} from 'react'
import axios from 'axios'
import QuizApp from './quizApp';
function FetchApi() {
    const [data,setData] = useState([]);
    const [endGame,setGameEnded] = useState(false);
    const [showAnswer,setShowAnswer] = useState(false);
    const [page,setPage] = useState(0);
    const [point,setPoint] = useState(0);
    useEffect(()=>{
        axios.get("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple")
        .then((res)=>{
            console.log(res)
            setData(res.data.results);
        })
        .catch((err)=>{
            console.log(err)
        })
    },[]);
    const handleNextQuestion = ()=>{
        setShowAnswer(false);
        return setPage(page+1)
    }
    const handleClick = (ans)=>{
        setShowAnswer(true)
        if(page >= data.length-1){
            setGameEnded(true)
        }
        if(!showAnswer){
            if(ans === data[page].correct_answer){
                setPoint(point+1)
                console.log(point);
            }
        }
        
    }
    if(endGame === true ){
        
        return <h2 className="text-center">you have {point} from {data.length} </h2>
    }   

    if(data.length>0){
        return (
            <div>
                <QuizApp question={data[page].question}
                 correctAnswer={data[page].correct_answer}
                 incorrectAnswers={data[page].incorrect_answers}
                 handleClick={handleClick}
                showAnswer={showAnswer}
                handleNextQuestion={handleNextQuestion}  />
            </div>
        )
        }else{
        return <h2 className="text-center">loading...</h2>
        }
    
}

export default FetchApi
