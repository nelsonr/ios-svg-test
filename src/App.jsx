import './App.css';

function App () {
    return (
        <div className="App">
            <div>
                <h4><code>{"<clipPath>"}</code></h4>
                <div className="icon-shape">
                    <svg className="icon-shape__svg">
                        <clipPath id="round-triangle" clipPathUnits="objectBoundingBox">
                            <path d="M0.025,0.252 C0.037,0.162,0.091,0.084,0.173,0.039 C0.255,-0.007,0.353,-0.013,0.441,0.023 C0.597,0.086,0.746,0.167,0.883,0.261 C0.963,0.317,1,0.406,1,0.5 C1,0.594,0.963,0.683,0.883,0.739 C0.746,0.833,0.597,0.914,0.441,0.977 C0.353,1,0.255,1,0.173,0.961 C0.091,0.916,0.037,0.838,0.025,0.748 C0.002,0.583,0.002,0.416,0.025,0.252"></path>
                        </clipPath>
                    </svg>
                    <div>🤔</div>
                </div>
            </div>

            <div>
                <h4><code>path()</code></h4>
                <div className="icon-shape icon-shape--path">
                    <div>🤔</div>
                </div>
            </div>
        </div>
    );
}

export default App;
