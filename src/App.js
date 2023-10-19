import Header from "../src/components/Header";
import MyComponent from "./components/Card";
import './App.css';
function App() {
  return (
    <>
      <div className="App">
        <a href="https://www.google.com/maps/dir/17.4077799,78.5122169/Hotel+Daspalla+Hyderabad,+Rd+Number+37,+CBI+Colony,+Jubilee+Hills,+Hyderabad,+Telangana+500033/@17.4244354,78.3763031,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bcb9145a835427b:0x42464f63243cc20c!2m2!1d78.3984825!2d17.4369625?entry=ttu"></a>
        <Header />
        <MyComponent />
      </div>
    </>
  );
}

export default App;
