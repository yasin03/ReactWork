import React from 'react'

const Jsx2 = () => {

    const user = {
        name : "Ali Gel",
        email : "aligel@gmail.com",
        occupation : "Developer"
    }


/*
<div> -> Ebeveynlik görevi görür Domda gözükür Ebeveyn zorunludur
<React.Fragment> -> Yalancı ebeveynlik görevi görür Domda bişey göstermez
<> -> Yalancı ebeveynlik görevi görür
3'üde kullanılabilir.
*/
  return (
    <React.Fragment>
    <div>Name : {user.name}</div>
    <div>Email : {user.email}</div>
    <div>Occupation : {user.occupation}</div>
    </React.Fragment>
  )
}

export default Jsx2;