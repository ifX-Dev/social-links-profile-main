import "./App.css";
import avatar from "./assets/avatar-jessica.jpeg";

function App() {
  return (
    <>
      <div className="bg-zinc-900 rounded-3xl max-[500px]:w-[100%] max-[500px]:mx-[20px] w-md max-[500px]:h-[740px] h-[784px] max-[500px]:p-10 p-16 col-between">
        <img src={avatar} alt="" className="w-[128px] rounded-[200px]" />
        <div className="col-between">
          <h1 className="inter-lg mb-1">Jessica Randall</h1>
          <p className="inter-md-bold text-(--color-green)">
            London, United Kingdom
          </p>
        </div>
        <p className="inter-md">"Front-end developer and avid reader"</p>
        <div className="col-between w-[100%] h-[350px]">
          <p className="lnk-btn">GitHub</p>
          <p className="lnk-btn">Frontend Mentor</p>
          <p className="lnk-btn">LinkedIn</p>
          <p className="lnk-btn">Twitter</p>
          <p className="lnk-btn">Instagram</p>
        </div>
      </div>
    </>
  );
}

export default App;
