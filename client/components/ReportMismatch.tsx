import React from "react";

export default function ReportMismatch({ bookId, title }:{bookId:string,title:string}){
  const report = async ()=>{
    try{
      await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({type:'mismatch',bookId,title})});
      alert('Thanks — mismatch reported');
    }catch(e){
      alert('Could not report mismatch');
    }
  }
  return (<button onClick={report} className='text-sm text-muted-foreground hover:text-primary'>Report mismatch</button>);
}
