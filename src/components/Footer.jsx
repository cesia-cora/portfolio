export const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="ft-row-1">
                    <a href="https://www.linkedin.com/in/cesia-cora" target="_blank">LinkedIn</a>
                    <img src="pixel-avatar.png" id="pixelAvatar"></img>
                    <a href="https://www.github.com/cesia-cora" target="_blank">Github</a>
                </div>
                <div className="ft-row-2">
                    <p style={{'fontSize': '12px'}}>Pixel art by <a href="https://twitter.com/viiolaceus" target="_blank" style={{color: 'palevioletred'}}>viiolaceus</a></p>
                </div>
            </div>
        </>
    )
}