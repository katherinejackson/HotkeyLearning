export const onClick = (val) => {
    if (window.itemClicked) {
        window.itemClicked(val)
    } else {
        console.log('The clicked item was ' + val)
    }
}

export const onFinishStack = () => {
    if (window.finishStack) {
        window.finishStack()
    } 
}

export const onFinishGame = (val) => {
    if (window.finishGame) {
        window.finishGame(val)
    } 
}

export const onReplayClick = () => {
    if (window.replayedClick) {
        window.replayedClick()
    } 
}