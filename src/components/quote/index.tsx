import { useEffect, useState } from 'react'
import {Container, Text, LoadingBlock} from './styles'
import { quotesTS } from '../../models/quoteAPI'
import { QuoteAPI } from '../../api/quoteAPI'
import ReactLoading from 'react-loading'
import { Refresh } from '../../assets/icons'

export default function Quote(p: {isopen:boolean}) {
    const [quote, setQuote] = useState<quotesTS>()
    const [loading, setLoading] = useState(true)
    
    const refreshQuote = () => {
        console.log(quote)
        setLoading(true)
        QuoteAPI.getQuote()
        .then(res => {
            setQuote(res)
        })
        .catch(err => {
            console.error(`An error has ocurred while retrieving quotes: ${err}`)
        })
        .finally(() => {setLoading(false)})
    }

    useEffect(() => {
        QuoteAPI.getQuote()
        .then(res => {
            setQuote(res)
        })
        .catch(err => {
            console.error(`An error has ocurred while retrieving quotes: ${err}`)
        })
        .finally(() => {setLoading(false)})
    }, [])

    return(
        <Container isopen={p.isopen}>
            {
                loading ? (
                    <>
                        <LoadingBlock>
                            <ReactLoading type='spin'/>
                        </LoadingBlock>
                    </>
                ):(
                    <>
                        <Text>
                            <blockquote><p>“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”</p></blockquote>
                            <p>{quote?.author}</p>
                        </Text>
                        <button onClick={refreshQuote}><Refresh /></button>
                    </>
                )
            }
        </Container>
    )
}