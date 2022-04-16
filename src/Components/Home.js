import "./Index.css";
const Home = () => {
    return (
        <div id="Parent2">
            <h1 className="title">Vintage World</h1>
            <button className="button centre" onClick={() => {
                document.getElementById('Home').setAttribute('class', "hide")
                if (document.getElementById('canvas')) {
                    document.getElementById('canvas').setAttribute('class', 'show')
                    localStorage.setItem('done', 'false')
                } else {
                    localStorage.setItem('done', 'true')
                }
                document.getElementById('GameGUI').setAttribute('class', 'show')
               window.addEventListener('beforeunload', () => {
                   return false
               })
            }}>Play</button>
            <p>{localStorage.getItem('V')}</p>
        </div>
    )
}


export default Home