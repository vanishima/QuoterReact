import React, {useEffect, useState} from 'react'

// API
import quotesAPI from "../api/quotesAPI";

// Element
import Layout from "../components/Layout";
import FormEditQuote from "../components/quotes/FormEditQuote";

async function drawQuote(setQuote) {
  const url = new URL(window.location);
  const quote_id = url.searchParams.get("id");
  // console.log("QuoteDetail: ", quote_id);
  const quote = await quotesAPI.getQuoteById(quote_id);
  setQuote(quote);
}

const QuoteDetail = props => {
  const [quote, setQuote] = useState(null);

 useEffect(() => {
    drawQuote(setQuote);
  }, []);

  return (
    <Layout currPage={"/my-quotes"}>
      {quote && <div className="content-page">
        <FormEditQuote quote={quote}/>
      </div>}
    </Layout>
  )
}

export default QuoteDetail