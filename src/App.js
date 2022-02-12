import { BrowserRouter, Route, Switch} from "react-router-dom";
//各ページに相当するコンポーネントをインポート
import Top from './Top';
import Workspage from './Workspage';



function App() {

  return (

    <BrowserRouter>

      <Switch>

        <Route exact path="/" component={Top} />
        <Route exact path="/Workspage" component={Workspage} />

      </Switch>

    </BrowserRouter>

  );

}

export default App;