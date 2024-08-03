import "./App.css";
import ItemList from "./ItemList";

const items = [
    {
        id: 1,
        name: "HTML",
        imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2017%2F07%2FHTML5_badge.png&f=1&nofb=1&ipt=f57becbb29f3190a7f809aec355a692a712b015b890acc280dfafc5521237ff8&ipo=images",
    },
    {
        id: 2,
        name: "CSS",
        imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogospng.org%2Fdownload%2Fcss-3%2Flogo-css-3-2048.png&f=1&nofb=1&ipt=9e8b7d940542d2cea4e5b891308d220302cf75657e136f32dd75326e46414ca5&ipo=images",
    },
    {
        id: 3,
        name: "JS",
        imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F6%2F6a%2FJavaScript-logo.png&f=1&nofb=1&ipt=1f901399290a22b18ce567f55ce182ca3fdcf4bbd7fe4c8bec0ffbece784418c&ipo=images",
    },
    {
        id: 4,
        name: "React",
        imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F09%2FReact_logo_logotype_emblem.png&f=1&nofb=1&ipt=b0f3c66b72e00ef293648f3f18e516dcab56fd62e0cd4983ec4bfff344f2e098&ipo=images",
    },
    {
        id: 5,
        name: "React-Duplicate",
        imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F09%2FReact_logo_logotype_emblem.png&f=1&nofb=1&ipt=b0f3c66b72e00ef293648f3f18e516dcab56fd62e0cd4983ec4bfff344f2e098&ipo=images",
    },
];

function App() {
    return (
        <div className='App'>
            <h1>Simple React App</h1>
            <ItemList items={items} />
        </div>
    );
}

export default App;
