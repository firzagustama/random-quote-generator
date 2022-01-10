import { faTumblr, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch, useSelector } from "react-redux"
import { randomQuote, selectAuthor, selectQuote } from "./quoteSlice"

export function Quote() {
    const dispatch = useDispatch()
    const author = useSelector(selectAuthor)
    const quote = useSelector(selectQuote)

    const twitterLink = "https://twitter.com/intent/tweet?text=%22" + quote + "%22 " + author + "&hashtags=quotes"
    return (
        <div id="wrapper">
            <div id="quote-box">
                <div className="quote-text" style={{opacity: 1}}>
                    <FontAwesomeIcon icon={faQuoteLeft} size="xs"/>
                    <span id="text">{quote}</span>
                </div>
                <div className="quote-author" style={{opcaity: 1}}>
                    - 
                    <span id="author">{author}</span>
                </div>
                <div className="buttons">
                    <a className="button" id="tweet-quote" title="Tweet this quote!" target={"_top"} href={twitterLink}>
                        <FontAwesomeIcon icon={faTwitter} size="xs"/>
                    </a>
                    <a className="button" id="tumblr-quote" title="Post this quote on tumblr!" target={"_blank"} href="#">
                        <FontAwesomeIcon icon={faTumblr} size="xs"/>
                    </a>
                    <button className="button" id="new-quote" onClick={() => dispatch(randomQuote())}>New quote</button>
                </div>
            </div>
        </div>
    )
}