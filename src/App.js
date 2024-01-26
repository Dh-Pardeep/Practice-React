import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputFile from './components/InputFile';
import RealtimeData from './components/RealtimeData';
import FireStoreData from './components/FirestoreData';
import AuthenticationData from './components/AuthenticationData';
function App() {
  return (
    <>
      <InputFile />
      <FireStoreData />
      <RealtimeData />
      <AuthenticationData/>
    </>
  );
}

export default App;
