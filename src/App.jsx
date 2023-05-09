import Userform from './components/Userform'
import Reviewsform from './components/Reviewsform'
import Thanks from './components/Thanks'
import Steps from './components/Steps'

import useForm from './hooks/useForm'
import { useState } from 'react'
import {FiSend} from 'react-icons/fi'
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'

import './App.css'

const formTemplate = {
  name: "",
  email:"",
  review: "",
  comment: "",
}

function App() {
  const [data, setData] = useState(formTemplate) //a const data vai receber e guardar os dados do form
  const updateFieldHandler = (key, value) => { //a chave é o nome do elemento dentro de formTemplate, e o value é o que ele recebe do formulário
    setData((prev) => {
      return {...prev, [key]:value} //mantendo valores anteriores e adicionando novos valores atrelando a chave ao novo valor digitado
    })
  } 
  const formComponents =
  //eu preciso enviar a const data que recebe o formTemplate para todos os componentes filho
  [
  <Userform data={data} updateFieldHandler={updateFieldHandler}/>,
  <Reviewsform data={data} updateFieldHandler={updateFieldHandler}/>,
  <Thanks data={data}/>
  ]
  const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useForm(formComponents)

  return (
    <div className='app'>
      <div className='header'>
      <h2>Deixe sua avaliação</h2>
      <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto</p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep}/>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">
            {currentComponent}
          </div>
          <div className="actions">

            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious/>
                <span>Voltar</span>
  
                </button>
            )}
            

              {!isLastStep ? (
                <button type='button' onClick={() => changeStep(currentStep + 1)}>
                  
                <span>Avançar</span>
                <GrFormNext/>
                </button>
              ) : (
                <button type='button'>
            
            <span>Enviar</span>
            <FiSend/>
            </button>
              )}
            
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
