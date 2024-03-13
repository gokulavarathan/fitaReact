import React from 'react';
const MyListComponent = () => {
  const data = [
    { id: 1, text: 'Item 1',name:"abc" },
    { id: 2, text: 'Item 2' ,"name":"xyz"},
    { id: 3, text: 'Item 3',"name":"lmn" },
    {id:4,text:"newText","name":"newName"}
  ];
  const string=["first","second","third","four"]
  for(var i =0 ;i<data.length;i++){
    console.log(data[i].id)
  }
const newVar = 10
  return (
    <div>
    <ul>
    {data.map((value,i) => (
        <li key={value.id}>{value.text} {value.name} name</li>
    ))}
  </ul>

    <ul>
      {data.map((value,i) => {
        return(
          <div>
          <h1>id:{value.id}</h1>
          <h1>name:{value.name}</h1>
          </div>
          
        )
      })}
    </ul>
</div>

  );
};
export default MyListComponent;
