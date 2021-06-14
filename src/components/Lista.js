
const listinha = ['banana', 'manga', 'abacaxi']
function Lista() {

  function renderList(){
    return listinha.map((frutas) =>{
      return <li>{frutas}</li>
    })
  }
  return (
      <div>
        
          <ul>{renderList()}</ul>
      </div>
  );
}

export default Lista