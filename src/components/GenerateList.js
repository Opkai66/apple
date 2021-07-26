import react from 'react';
import {Link} from 'react-router-dom';

function GenerateList(){
    const products =["Mac","iPad","iPhone",'Watch','TV','Music'];

    products.forEach(element => {
    return (<Link to = {`/${element}`}>
      <div>{element}</div>
    </Link>)
  });
}
export default GenerateList;