import Head from 'next/head'
import { useContext } from 'react'
import WebSiteContext from '../src/components/Context/WebSiteContext'

export default function Home() {

  const context = useContext(WebSiteContext);
  return (
    <div className="row">
      <div className="col-md-3">1</div>
      <div className="col-md-3">2</div>
      <div className="col-md-3">3 یسیس</div>
      <div className="col-md-3">4</div>
    </div>
  )
}
