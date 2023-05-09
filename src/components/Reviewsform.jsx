import React from 'react'
import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill
} from 'react-icons/bs'

import './Reviewsform.css'

function Reviewsform({data, updateFieldHandler}) {
    return (<>
    <div className='review-form'>
        <div className='form-control score-container'>
            <label className="radio-container">
                <input type="radio" value='unsatisfied' name='review'
                checked={data.review === "unsatisfied"}
                onChange={(e) => updateFieldHandler("review", e.target.value)}
                required/>
                <BsFillEmojiFrownFill/>
                <p>Insatisfeito</p>
            </label>
            <label className="radio-container">
                <input type="radio" value='neutral' name='review'
                checked={data.review === "neutral"}
                onChange={(e) => updateFieldHandler("review", e.target.value)}
                required/>
                <BsFillEmojiNeutralFill/>
                <p>Neutro</p>
            </label>
            <label className="radio-container">
                <input type="radio" value='safisfied' name='review'
                checked={data.review === "satisfied"}
                onChange={(e) => updateFieldHandler("review", e.target.value)}
                required/>
                <BsFillEmojiSmileFill/>
                <p>Satisfeito</p>
            </label>
            <label className="radio-container">
                <input type="radio" value='very_safisfied' name='review'
                checked={data.review === "very_satisfied"}
                onChange={(e) => updateFieldHandler("review", e.target.value)}
                required/>
                <BsFillEmojiHeartEyesFill/>
                <p>Muito satisfeito</p>
            </label>
        </div>
        <div className="forms-control">
            <label htmlFor="comment">Comentário:</label>
            <textarea required
            name="comment"
            placeholder='Conte como foi a sua experiência com o produto'
            id="comment"
            checked={data.comment || ""}
            onChange={(e) => updateFieldHandler("comment", e.target.value)}
            ></textarea>
        </div>
    </div>
    </>
    )
}

export default Reviewsform